// components/ContactSection.jsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  // Replace with your Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = "9c6a2be3-36fc-433f-a961-8b8166f8589a" // Get this from https://web3forms.com

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formDataToSend = new FormData()

      // Add Web3Forms access key
      formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY)

      // Add form data
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("message", formData.message)

      // Optional: Add additional fields
      formDataToSend.append("subject", `New Contact Form Submission from ${formData.name}`)
      formDataToSend.append("from_name", "Portfolio Contact Form")

      // Optional: Redirect URL after submission (you can customize this)
      // formDataToSend.append("redirect", "https://yourwebsite.com/thank-you")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({ name: '', email: '', message: '' })

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        console.error("Form submission error:", data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error("Network error:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                Let&apos;s Connect!
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: " ragulviji20062@gmail.com", href: "mailto:ragulviji20062@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 8838713033", href: "tel:+918838713033" },
                { icon: MapPin, label: "Location", value: "Gobi, Tamil Nadu, India", href: "#" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg shadow-slate-500/10 hover:shadow-blue-500/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 rounded-2xl bg-blue-600 text-white group-hover:bg-purple-600 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">{item.label}</p>
                    <p className="text-slate-600 dark:text-slate-400">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {[
                { icon: Github, href: "https://github.com/raguls18", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ragul-s-37a8b9271/", label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg shadow-slate-500/10 hover:shadow-blue-500/25 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-0 shadow-2xl shadow-blue-500/10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5">
                <CardTitle className="text-xl text-slate-800 dark:text-slate-200">Send a Message</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center gap-3"
                  >
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      Failed to send message. Please try again or contact me directly.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-lg shadow-slate-500/5 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-lg shadow-slate-500/5 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none shadow-lg shadow-slate-500/5 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.div
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>


                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
