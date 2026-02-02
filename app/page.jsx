// app/page.jsx

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactSection } from "@/components/ContactSection"
import { ThemeToggle } from "@/components/ThemeToggle"

import {
  Github, Mail, ExternalLink, Download, MapPin,
  Calendar, Code, BookOpen, Trophy, Linkedin, Sparkles, Zap, X, Eye
} from "lucide-react"

import {
  FaHtml5, FaCss3Alt, FaPython, FaJava, FaReact,
} from "react-icons/fa";
import {
  SiJavascript, SiMongodb, SiMysql, SiTailwindcss, SiNextdotjs, SiNodedotjs
} from "react-icons/si";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const GenAiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M19.5 10.5C19.5 11.2213 19.2213 11.875 18.75 12.375C18.2787 12.875 17.625 13.125 17 13.125C16.375 13.125 15.7213 12.875 15.25 12.375C14.7787 11.875 14.5 11.2213 14.5 10.5C14.5 9.77868 14.7787 9.125 15.25 8.625C15.7213 8.125 16.375 7.875 17 7.875C17.625 7.875 18.2787 8.125 18.75 8.625C19.2213 9.125 19.5 9.77868 19.5 10.5ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM7 15.5C7 14.7787 7.27868 14.125 7.75 13.625C8.22132 13.125 8.875 12.875 9.5 12.875C10.125 12.875 10.7787 13.125 11.25 13.625C11.7213 14.125 12 14.7787 12 15.5C12 16.2213 11.7213 16.875 11.25 17.375C10.7787 17.875 10.125 18.125 9.5 18.125C8.875 18.125 8.22132 17.875 7.75 17.375C7.27868 16.875 7 16.2213 7 15.5Z" />
  </svg>
);

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  // Parallax effect for hero section
  const heroY = useTransform(scrollY, [0, 500], [0, -150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  // Mouse tracking for interactive elements
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/Ragul-S_Resume.pdf"
    link.download = "RAGUL_S_Resume.pdf"
    link.click()
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  // Enhanced animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    }
  }

  const heroChildVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const skillHoverVariants = {
    hover: {
      scale: 1.1,
      rotateY: 15,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const certificates = [
    { title: "HACKATHON", issuer: "CIT", img: "/certificates/CIT.jpg" },
    { title: "CIT Hackathon", issuer: "u & me", img: "/certificates/cit hackthon.jpg" },
    { title: "Ai Conclave Hackathon", issuer: "KEC", img: "/certificates/Ai Conclave Hackathon.jpg" },
    { title: "HackVerse", issuer: "Silicon Hack Club", img: "/certificates/HackVerse-certificate_page-0001.jpg" },
    { title: "python", issuer: "GUVI", img: "/certificates/python.jpg" },
    { title: "Workshop", issuer: "ESEC", img: "/certificates/Workshop.jpg" },
    { title: "Oracle", issuer: "Oracle University", img: "/certificates/Oracle.jpg" },
    { title: "Power Bi Workshop", issuer: "Anna University", img: "/certificates/Power Bi Workshop.jpg" },
    { title: "REACT", issuer: "NOVI TECH", img: "/certificates/react_page-0001.jpg" },
    { title: "Ai Using Python Workshop", issuer: "Ai For Techies", img: "/certificates/ai python_page-0001.jpg" },
    { title: "AWS", issuer: "AWS", img: "/certificates/AWS.jpg" },
    { title: "Data science", issuer: "Lets upgrade", img: "/certificates/datascience.jpg" },
    { title: "AI TOOLS", issuer: "Be10x", img: "/certificates/aitools.jpg" },
    { title: "Data Analytic MasterClass", issuer: "Anna University", img: "/certificates/Data Analytic.jpg" },
    { title: "Intership", issuer: "CodeTech", img: "/certificates/CT06DH659_page-0001.jpg" },
    { title: "Artificial Intelligence", issuer: "NoviTech", img: "/certificates/Artificial Intelligence.jpg" },
    { title: "Data Analatics Internship", issuer: "Anna University", img: "/certificates/Data Analatics.jpg" },
    { title: "Machine learning Internship", issuer: "Anna University", img: "/certificates/Machine learning.jpg" },
  ]

  const projects = [
    {
      title: "Market_Analysis",
      description: "An AI-powered agricultural market intelligence platform to help farmers maximize profits.",
      image: "https://i.pinimg.com/736x/ec/ef/84/ecef849e65f2460484d93273c86b922f.jpg",
      badges: [
        { label: "Python", className: "border-yellow-200 text-yellow-700 bg-yellow-50" },
        { label: "HTML", className: "border-red-200 text-red-700 bg-red-50" },
        { label: "Flask", className: "border-green-200 text-green-700 bg-green-50" },
      ],
      codeUrl: "https://github.com/raguls18/market_analysis",
      demoUrl: "https://market-analysis-ttto.onrender.com",
    },
    {
      title: "Farm2Bag Chatbot",
      description: "An AI-powered, Flask-based conversational assistant for farmers and customers.",
      image: "/Farm2Bag Chatbot.png",
      badges: [
        { label: "Python", className: "border-yellow-200 text-yellow-700 bg-yellow-50" },
        { label: "HTML", className: "border-red-200 text-red-700 bg-red-50" },
        { label: "Flask", className: "border-green-200 text-green-700 bg-green-50" },
      ],
      codeUrl: "https://github.com/raguls18/Farm2Bag_chatbot",
      demoUrl: "https://farm2bag-chatbot-6re7.onrender.com",
    },
    {
      title: "Generative_Text_Model",
      description: "GPT-2 powered text generation app built with Streamlit that generates human-like paragraphs.",
      image: "/Generative Text Model.png",
      badges: [
        { label: "Python", className: "border-blue-200 text-blue-700 bg-blue-50" },
        { label: "Streamlit", className: "border-green-200 text-green-700 bg-green-50" },
      ],
      codeUrl: "https://github.com/raguls18/Generative_Text_Model",
      demoUrl: "https://generative-text-ai.streamlit.app/",
    },
    {
      title: "Speech_Recognition_System",
      description: "A simple Speech-to-Text web application built with Streamlit and the SpeechRecognition library.",
      image: "/Speech_Recognition_System.png",
      badges: [
        { label: "Python", className: "border-blue-200 text-blue-700 bg-blue-50" },
        { label: "Streamlit", className: "border-indigo-200 text-indigo-700 bg-indigo-50" },
      ],
      codeUrl: "https://github.com/raguls18/Speech_Recognition_System",
      demoUrl: "https://speech-recognition-ai.streamlit.app/",
    },
    {
      title: "Neural_Style_Transfer",
      description: "A Streamlit app that lets users upload a content and style image to generate a stylized result.",
      image: "/neural.png",
      badges: [
        { label: "Python", className: "border-blue-200 text-blue-700 bg-blue-50" },
        { label: "Streamlit", className: "border-indigo-200 text-indigo-700 bg-indigo-50" },
      ],
      codeUrl: "https://github.com/raguls18/Neural_Style_Transfer",
      demoUrl: "https://neural-style-transfer-ai.streamlit.app/",
    },
    {
      title: "Text_Summarization_Tool",
      description: "An intelligent Text Summarization Tool using Streamlit and Hugging Face Transformers.",
      image: "/text.png",
      badges: [
        { label: "Python", className: "border-blue-200 text-blue-700 bg-blue-50" },
        { label: "Streamlit", className: "border-indigo-200 text-indigo-700 bg-indigo-50" },
      ],
      codeUrl: "https://github.com/raguls18/-Text_Summarization_Tool",
      demoUrl: "https://speech-recognition-ai.streamlit.app/",
    }, {
      title: "RENTAL_HOUSE",
      description: "RentHouse is a two-sided marketplace connecting property owners with tenants. Users can register as either an owner or a seeker, browse properties, manage favorites, and communicate directly.",
      image: "/rental.png",
      badges: [
        { label: "HTML", className: "border-blue-200 text-blue-700 bg-blue-50" },
        { label: "CSS", className: "border-blue-200 text-blue-700 bg-blue-50" },
        { label: "JAVASCRIPT", className: "border-blue-200 text-blue-700 bg-blue-50" },
      ],
      codeUrl: "https://github.com/raguls18/Rental_app",
      demoUrl: "https://rental-app-virid.vercel.app/",
    },
  ];



  const skillsData = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-cyan-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="dark:text-white text-black" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
    { name: "Gen AI", icon: <GenAiIcon className="text-purple-400" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-200 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RAGUL S
            </motion.a>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
              {['About', 'Skills', 'Projects', 'Certificate', 'Education', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left scale-x-0"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section with Enhanced Animations */}
        <motion.section
          className="container mx-auto px-6 py-20 lg:py-32 relative"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left space-y-6"
            >
              <motion.div variants={heroChildVariants}>
                <motion.h1
                  className="text-4xl lg:text-6xl font-bold mb-6"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300% animate-gradient">
                    RAGUL S
                  </span>
                  <motion.span
                    animate={floatingAnimation}
                    className="inline-block ml-4"
                  >
                    ✨
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p
                variants={heroChildVariants}
                className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              >
                Artificial Intelligence and Data Science Student passionate about creating innovative solutions and building meaningful digital experiences.
              </motion.p>

              <motion.div
                variants={heroChildVariants}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                {[
                  { icon: Code, text: "Full Stack Developer", color: "blue" },
                  { icon: BookOpen, text: "AI&DS Student", color: "green" },
                  { icon: Trophy, text: "Problem Solver", color: "purple" }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="secondary" className={`bg-${badge.color}-100 text-${badge.color}-800 border-${badge.color}-200 px-4 py-2`}>
                      <badge.icon className="mr-2 h-4 w-4" /> {badge.text}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={heroChildVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 rounded-2xl"
                    onClick={handleResumeDownload}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-2xl shadow-lg shadow-slate-500/10 hover:shadow-blue-500/20"
                    onClick={scrollToContact}
                  >
                    <Mail className="mr-2 h-4 w-4" /> Get In Touch
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={heroChildVariants}
                className="flex gap-6 justify-center lg:justify-start"
              >
                {[
                  { icon: Github, href: "https://github.com/raguls18" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ragul-s-37a8b9271/" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-slate-800"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex-shrink-0"
            >
              <div className="relative group w-64 h-64 lg:w-80 lg:h-80 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={320}
                    height={320}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl z-10"
                    priority
                  />
                </motion.div>

                {/* Floating Icons */}
                {[Sparkles, Zap, Code].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-blue-500 dark:text-blue-400"
                    style={{
                      top: `${20 + index * 25}%`,
                      left: `${80 + index * 10}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Icon size={24} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced About Section with Image */}
        <motion.section
          id="about"
          className="py-20 bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>

            <div className="grid lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
              {/* Image on the left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/profile.jpg" // You can use a different about image here
                      alt="About Ragul"
                      width={400}
                      height={400}
                      className="relative w-full max-w-md mx-auto rounded-full shadow-2xl border-4 border-white dark:border-slate-700 object-cover aspect-square"
                    />
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full opacity-20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>

              {/* Content on the right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <motion.p
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  I am a dedicated and enthusiastic Artificial Intelligence and Data Science student with a strong foundation in full-stack web development. I thrive on solving complex problems and am passionate about leveraging technology to build innovative applications.
                </motion.p>

                <motion.p
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  My goal is to apply my skills in AI and software engineering to create impactful, real-world solutions that make a difference in people&apos;s lives. I believe in continuous learning and staying updated with the latest technologies.
                </motion.p>

                {/* Stats or highlights */}
                <motion.div
                  className="grid grid-cols-2 gap-6 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  {[
                    { number: "15+", label: "Projects Built", color: "blue" },
                    { number: "18+", label: "Certificates", color: "green" },
                    { number: "3+", label: "Years Learning", color: "purple" },
                    { number: "∞", label: "Ideas Brewing", color: "indigo" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-4 rounded-2xl bg-${stat.color}-50 dark:bg-slate-700/50 border border-${stat.color}-200 dark:border-slate-600 shadow-lg shadow-${stat.color}-500/10`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Skills Section */}
        <motion.section
          id="skills"
          className="py-20 bg-gradient-to-br from-slate-100 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Skills & Technologies
            </motion.h2>

            <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 shadow-xl">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-4 p-6 rounded-3xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/80 cursor-pointer group shadow-lg shadow-slate-500/5 hover:shadow-xl hover:shadow-blue-500/10"
                    variants={skillHoverVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <p className="text-sm md:text-base font-medium tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </p>

                    {/* Skill level indicator */}
                    <motion.div
                      className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
                      whileHover={{ height: 2 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + (index % 4) * 10}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Projects Section */}
        <motion.section
          id="projects"
          className="py-20 bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {(showAll ? projects : projects.slice(0, 3)).map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="group h-full flex flex-col transition-all duration-500 border-0 shadow-xl shadow-slate-500/10 hover:shadow-2xl hover:shadow-blue-500/20 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden rounded-3xl">
                    <div className="aspect-video rounded-t-3xl overflow-hidden relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={350}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-grow justify-end">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.badges.map((badge, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge
                              variant="outline"
                              className={`${badge.className} border-2 hover:shadow-md transition-shadow`}
                            >
                              {badge.label}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="w-full hover:bg-blue-50 dark:hover:bg-slate-700 border-2 rounded-2xl shadow-lg shadow-slate-500/10 hover:shadow-blue-500/25"
                          >
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-3 w-3" /> Code
                            </a>
                          </Button>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            asChild
                            size="sm"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-3 w-3" /> Demo
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {projects.length > 3 && (
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 px-8 rounded-2xl"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "View Less" : "View More"} Projects
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Enhanced Certificates Section */}
        <motion.section
          id="certificate"
          className="py-20 bg-gradient-to-br from-slate-100 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Certificates & Achievements
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {(showAllCerts ? certificates : certificates.slice(0, 3)).map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden group rounded-3xl cursor-pointer"
                    onClick={() => setSelectedCertificate(cert)}>
                    <CardContent className="p-6 relative">
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg shadow-blue-500/25">
                          <Eye size={16} />
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={cert.img || "/placeholder.svg"}
                          alt={cert.title}
                          width={320}
                          height={200}
                          className="rounded-2xl mx-auto mb-4 object-contain aspect-video shadow-lg shadow-slate-500/10 group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-shadow"
                        />
                      </motion.div>

                      <motion.h3
                        className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {cert.title}
                      </motion.h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                        Issued by: <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                      </p>

                      <motion.div
                        className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: idx * 0.1 + 0.5 }}
                      />

                      <div className="mt-4 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">Click to view full certificate</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {certificates.length > 3 && (
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 px-8 rounded-2xl"
                    onClick={() => setShowAllCerts(!showAllCerts)}
                  >
                    {showAllCerts ? "View Less" : "View More"} Certificates
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Enhanced Education Section */}
        <motion.section
          id="education"
          className="py-20 bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>

            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-2xl shadow-blue-500/10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden rounded-3xl">
                  <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-t-3xl">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          B.Tech Artificial Intelligence and Data Science
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-2">
                          University Name
                        </CardDescription>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300 px-4 py-2 text-base rounded-2xl shadow-lg shadow-blue-500/20">
                          2023 - 2027
                        </Badge>
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {[
                        { icon: MapPin, text: "Gobi, TamilNadu", color: "text-blue-500" },
                        { icon: Calendar, text: "Expected Graduation: May 2027", color: "text-green-500" },
                        { icon: Trophy, text: "Current GPA: 3.8/4.0", color: "text-purple-500" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                          </motion.div>
                          <span className="text-slate-600 dark:text-slate-300 font-medium">{item.text}</span>
                        </motion.div>
                      ))}

                      <motion.div
                        className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl border-l-4 border-blue-500 shadow-lg shadow-blue-500/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4 text-lg">
                          📚 Relevant Coursework:
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                          {[
                            "Data Structures & Algorithms",
                            "Software Engineering",
                            "Database Systems",
                            "Web Development",
                            "Machine Learning",
                            "Computer Networks",
                            "Operating Systems",
                            "Artificial Intelligence"
                          ].map((course, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                              <span className="text-sm">{course}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <ContactSection />
      </main>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl shadow-blue-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    Issued by: {selectedCertificate.issuer}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-900/20 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors shadow-lg"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex justify-center">
                <Image
                  src={selectedCertificate.img || "/placeholder.svg"}
                  alt={selectedCertificate.title}
                  width={800}
                  height={600}
                  className="max-w-full h-auto rounded-2xl shadow-xl shadow-slate-500/20"
                />
              </div>

              <div className="mt-6 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="flex gap-6 justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Github, href: "https://github.com/raguls18" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ragul-s-37a8b9271/" },
              { icon: Mail, href: "mailto:your.email@example.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-3 rounded-2xl hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500 shadow-lg shadow-slate-700/20 hover:shadow-blue-500/30"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg mb-2">
              © {new Date().getFullYear()} RAGUL S. All rights reserved.
            </p>

          </motion.div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 5s ease infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  )
}