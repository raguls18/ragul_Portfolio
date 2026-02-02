import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Ragul S - Student Portfolio",
  description:
    "Computer Science student portfolio showcasing projects, skills, and experience. Passionate about creating innovative solutions and building meaningful digital experiences.",
  keywords: "computer science, student, portfolio, web development, react, next.js, full stack developer",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
