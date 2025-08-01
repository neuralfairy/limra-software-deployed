import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Zap, Shield, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 tech-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 gradient-primary text-white border-0">🚀 AI-Powered Lead Discovery</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Transform Your Sales with <span className="gradient-text">Limra Softwares</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Discover verified contacts, auto-enrich them, and supercharge your sales outreach with our AI-powered
              intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white text-lg px-8 py-4" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose AI Hunter?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your sales process with intelligent automation and verified data
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">99% Data Accuracy</h3>
                <p className="text-gray-600">AI-verified contact information with real-time validation</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">10x Faster Prospecting</h3>
                <p className="text-gray-600">Automate lead discovery and enrichment in seconds</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">GDPR Compliant</h3>
                <p className="text-gray-600">Enterprise-grade security and privacy protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
            <p className="text-gray-600 mb-8">See how much time and money you can save with AI Hunter</p>
            <Card className="p-8">
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">500%</div>
                    <p className="text-gray-600">Average ROI Increase</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">40hrs</div>
                    <p className="text-gray-600">Time Saved Per Month</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-2">2x</div>
                    <p className="text-gray-600">More Qualified Leads</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="gradient-primary text-white" asChild>
                    <a
                      href="https://salescentri.com/solutions/use-case-navigator/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try Interactive Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Sales Teams Worldwide</h2>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">TechCorp</div>
              <div className="text-2xl font-bold">SalesForce Inc</div>
              <div className="text-2xl font-bold">GrowthCo</div>
              <div className="text-2xl font-bold">LeadGen Pro</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "AI Hunter helped us close 2x more deals in just 30 days. The data accuracy is incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    JS
                  </div>
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-gray-500">VP Sales, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The AI-powered lead scoring has transformed our prospecting process completely."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    MJ
                  </div>
                  <div>
                    <div className="font-semibold">Maria Johnson</div>
                    <div className="text-sm text-gray-500">Sales Director, GrowthCo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-gray-600">Connect with your favorite sales and marketing tools</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-blue-600">SF</span>
              </div>
              <p className="text-sm font-medium">Salesforce</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-orange-600">HS</span>
              </div>
              <p className="text-sm font-medium">HubSpot</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-purple-600">PD</span>
              </div>
              <p className="text-sm font-medium">Pipedrive</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-green-600">AP</span>
              </div>
              <p className="text-sm font-medium">Apollo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-red-600">ZP</span>
              </div>
              <p className="text-sm font-medium">Zapier</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a
                href="https://salescentri.com/solutions/psa-suite/integrations"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Integrations
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full animate-rotate-slow"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in">
            Join thousands of sales teams already using Limra Softwares to close more deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial - 500 Credits Free
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
              asChild
            >
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
