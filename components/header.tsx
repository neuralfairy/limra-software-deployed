"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Updated Branding */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 gradient-primary rounded-xl flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-lg">LS</span>
            </div>
            <span className="font-bold text-2xl gradient-text">Limra Softwares</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Demo
              </a>
            </Button>
            <Button className="gradient-primary text-white" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {/* Updated Mobile Menu Logo */}
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 gradient-primary rounded-xl flex items-center justify-center animate-pulse-slow">
                  <span className="text-white font-bold text-lg">LS</span>
                </div>
                <span className="font-bold text-2xl gradient-text">Limra Softwares</span>
              </div>
              <Link href="/features" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="text-sm font-medium hover:text-[#7B61FF] transition-colors">
                FAQ
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Demo
                  </a>
                </Button>
                <Button className="gradient-primary text-white" asChild>
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
