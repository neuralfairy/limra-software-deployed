import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-white border-0">📞 Get In Touch</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Let's Talk <span className="gradient-text">Sales</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Ready to transform your prospecting process? Our team at Limra Softwares is here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-bold mb-2">Send us a message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="px-0">
              <form className="space-y-6" action="https://salescentri.com/get-started/contact" method="GET">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input id="name" name="name" type="text" required placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input id="company" name="company" type="text" placeholder="Your company name" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your prospecting challenges..."
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info */}
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                    <p className="text-gray-600 mb-2">Dallas, TX</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start gradient-primary text-white" asChild>
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4 mr-2" />
                    Book a Demo Call
                  </a>
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                  <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-4 w-4 mr-2" />
                    Sales Inquiry
                  </a>
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                  <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
                    Get Support
                  </a>
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM CST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendly Embed */}
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Schedule a Meeting</h3>
                <p className="text-gray-600 mb-4">
                  Book a time that works for you and speak directly with our sales team.
                </p>
                <Button className="w-full gradient-primary text-white" asChild>
                  <a href="https://salescentri.com/get-started/calendly" target="_blank" rel="noopener noreferrer">
                    Schedule Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Options */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-600">Choose the best way to get in touch with our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sales Support</h3>
                <p className="text-gray-600 mb-4">Questions about pricing, features, or getting started</p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                    Contact Sales
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
                <p className="text-gray-600 mb-4">Help with platform issues, integrations, or technical questions</p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
                    Get Support
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
                <p className="text-gray-600 mb-4">Interested in becoming a partner or integration</p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/contact/partnerships" target="_blank" rel="noopener noreferrer">
                    Partner With Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center gradient-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Don't wait - start discovering qualified leads today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
              asChild
            >
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Demo
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
