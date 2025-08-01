import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Shield } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-white border-0">💰 Simple Pricing</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Starter Plan */}
          <Card className="relative border-2 hover:shadow-lg transition-shadow animate-scale-in">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold mb-2">Starter</CardTitle>
              <div className="text-4xl font-bold mb-2">
                <span className="gradient-text">Free</span>
              </div>
              <p className="text-gray-600">Perfect for getting started</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>100 credits/month</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>1 user</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Basic contact discovery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Email support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Standard integrations</span>
                </div>
              </div>
              <Button className="w-full gradient-primary text-white mt-6" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="relative border-2 border-purple-500 hover:shadow-lg transition-shadow animate-scale-in">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="gradient-primary text-white border-0 px-4 py-1 animate-bounce-slow">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl font-bold mb-2">Professional</CardTitle>
              <div className="text-4xl font-bold mb-2">
                <span className="gradient-text">$99</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">For growing sales teams</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>1,000 credits/month</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>5 users</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Advanced AI discovery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Lead scoring & segmentation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>CRM integrations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Analytics dashboard</span>
                </div>
              </div>
              <Button className="w-full gradient-primary text-white mt-6" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative border-2 hover:shadow-lg transition-shadow animate-scale-in">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold mb-2">Enterprise</CardTitle>
              <div className="text-4xl font-bold mb-2">
                <span className="gradient-text">Custom</span>
              </div>
              <p className="text-gray-600">For large organizations</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited credits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited users</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>White-labeled solution</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>API access</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>SLA guarantee</span>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <a href="https://salescentri.com/pricing/enterprise-custom" target="_blank" rel="noopener noreferrer">
                  Get Pricing Sheet
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Add-on Credits */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Need More Credits?</h2>
            <p className="text-gray-600">Purchase additional credits as needed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold gradient-text mb-2">500 Credits</div>
                <div className="text-3xl font-bold mb-4">$29</div>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="https://salescentri.com/pricing/plans-overview" target="_blank" rel="noopener noreferrer">
                    Purchase
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold gradient-text mb-2">1,000 Credits</div>
                <div className="text-3xl font-bold mb-4">$49</div>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="https://salescentri.com/pricing/plans-overview" target="_blank" rel="noopener noreferrer">
                    Purchase
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold gradient-text mb-2">5,000 Credits</div>
                <div className="text-3xl font-bold mb-4">$199</div>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="https://salescentri.com/pricing/plans-overview" target="_blank" rel="noopener noreferrer">
                    Purchase
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Trusted & Secure</h2>
          </div>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="font-semibold">SOC2</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="font-semibold">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="font-semibold">GDPR</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are credits and how do they work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Credits are used for contact discovery and enrichment. Each contact discovery uses 1 credit, and
                  enrichment uses additional credits based on the data points requested.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I change my plan anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                  prorate the billing accordingly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our
                  support team for a full refund.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center gradient-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of sales teams using AI Hunter to close more deals</p>
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
