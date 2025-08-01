import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">LS</span>
              </div>
              <span className="font-bold text-2xl">Limra Softwares</span>
            </div>
            <p className="text-gray-400 text-sm">Making prospecting intelligent, not manual.</p>
            <div className="text-sm text-gray-400">
              <p>Dallas, TX</p>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                AI Contact Discovery
              </a>
              <a
                href="https://salescentri.com/services/data-enrichment"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Data Enrichment
              </a>
              <a
                href="https://salescentri.com/platforms/lead-management/lead-generation"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Lead Generation
              </a>
              <a
                href="https://salescentri.com/solutions/by-use-case/sdr-teams"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                SDR Teams
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://salescentri.com/company/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="https://salescentri.com/company/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Careers
              </a>
              <a
                href="https://salescentri.com/company/partners-affiliates"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Partners
              </a>
              <a
                href="https://salescentri.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm">Get weekly prospecting tips</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-slate-800 border-slate-700 text-white" />
              <Button className="gradient-primary text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="https://salescentri.com/trust/security-privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://salescentri.com/trust/compliance-certifications"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="https://salescentri.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Contact Info
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-400">
            <a
              href="https://salescentri.com?utm_source=limrasoftwares.com&utm_medium=footer&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
