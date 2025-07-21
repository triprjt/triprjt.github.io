import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Star,
  Palette,
  Smartphone,
  Globe,
  Heart,
  Coffee,
  Zap,
  Send,
  MapPin,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-purple-200">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg animate-pulse">
              A
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Alex Chen
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-purple-600 transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-purple-600 transition-all duration-300 hover:scale-105"
            >
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-purple-600 transition-all duration-300 hover:scale-105"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-purple-600 transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 animate-pulse"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="inline-block animate-bounce">
                <span className="text-6xl">👋</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                  Alex Chen
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">Full-Stack Developer & UI/UX Designer</p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I create beautiful, functional, and user-friendly digital experiences that make people smile 😊
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-purple-300 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Let's Chat
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-purple-100 transform hover:scale-110 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-blue-100 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-pink-100 transform hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 md:py-32 bg-white/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Alex Chen"
                width={400}
                height={500}
                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit bg-gradient-to-r from-purple-500 to-pink-500 text-white">About Me 🚀</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Looking for someone who can turn your{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    wildest ideas into reality?
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  You've found the right person! With over 5 years of turning complex problems into elegant solutions, I
                  don't just build websites and apps – I craft digital experiences that make your users fall in love
                  with your brand. Every pixel, every interaction, every line of code is designed with one goal: making
                  your vision come to life in ways that exceed your expectations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you need a stunning website that converts visitors into customers, a mobile app that users
                  can't put down, or a complete digital transformation that sets you apart from the competition – I've
                  got the skills, creativity, and passion to make it happen. Ready to see what we can create together?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-100 to-green-100 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-pink-100 to-orange-100 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-pink-600">30+</div>
                  <div className="text-sm text-gray-600">Thrilled Clients</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "Figma", "Tailwind CSS", "MongoDB"].map(
                  (skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transform hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ),
                )}
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Let's Build Something Amazing Together
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  🚀 Free consultation • Quick response • Your success is my priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="w-fit mx-auto bg-gradient-to-r from-blue-500 to-green-500 text-white">Portfolio 💼</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              My Recent{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my favorite projects that showcase my skills and creativity ✨
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-500" />
                    E-commerce Platform
                  </CardTitle>
                </div>
                <CardDescription>
                  A modern, responsive e-commerce platform built with Next.js and Stripe integration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Stripe
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Tailwind
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Task Management App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-green-500" />
                  Task Management App
                </CardTitle>
                <CardDescription>
                  A beautiful and intuitive task management app with real-time collaboration features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    React Native
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    Firebase
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                    Figma
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Creative Portfolio"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-pink-500" />
                  Creative Portfolio
                </CardTitle>
                <CardDescription>
                  A stunning portfolio website for a digital artist with interactive animations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    Three.js
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                    GSAP
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="w-fit mx-auto bg-gradient-to-r from-orange-500 to-red-500 text-white">
              Testimonials 💬
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What people{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                say about me
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it - here's what my clients and colleagues have to say! 🌟
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700 leading-relaxed">
                  "Alex is absolutely amazing! They delivered our project ahead of schedule and exceeded all our
                  expectations. The attention to detail and creative solutions were outstanding. 🚀"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Sarah Johnson"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700 leading-relaxed">
                  "Working with Alex was a game-changer for our business. Their technical expertise combined with
                  creative vision helped us create something truly special. Highly recommended! ⭐"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Michael Rodriguez"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                    <p className="text-sm text-gray-600">Founder, Creative Studio</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-white to-green-50">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700 leading-relaxed">
                  "Alex has an incredible ability to understand complex requirements and turn them into beautiful,
                  functional solutions. A true professional who cares about the end result. 💯"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Emily Chen"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Emily Chen</p>
                    <p className="text-sm text-gray-600">Product Manager, InnovateCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="w-fit mx-auto bg-white/20 text-white border-white/30">Get in Touch 📧</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let's create something <span className="text-yellow-300 animate-pulse">amazing</span> together!
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it! Let's grab a coffee ☕ and discuss how we can bring
              your ideas to life.
            </p>

            <div className="grid gap-8 md:grid-cols-3 max-w-3xl mx-auto">
              <div className="text-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mx-auto">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Me</h3>
                  <p className="text-blue-100">alex@example.com</p>
                </div>
              </div>

              <div className="text-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mx-auto">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Me</h3>
                  <p className="text-blue-100">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="text-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mx-auto">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Me</h3>
                  <p className="text-blue-100">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg animate-pulse">
                A
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Alex Chen
              </span>
            </div>

            <p className="text-gray-400 max-w-md mx-auto">
              Thanks for visiting my portfolio! Let's connect and create something amazing together.
              <Heart className="inline h-4 w-4 text-red-400 mx-1" />
            </p>

            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Alex Chen. Made with <Heart className="inline h-4 w-4 text-red-400 mx-1" />
                and lots of <Coffee className="inline h-4 w-4 text-yellow-400 mx-1" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
