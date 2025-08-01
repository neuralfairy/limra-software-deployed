import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Brain, Database, Target, Zap, Shield, ArrowRight } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-white border-0">🚀 Powerful Features</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Everything You Need to <span className="gradient-text">Supercharge Sales</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Discover how Limra Softwares' advanced features can transform your prospecting and lead generation process
          </p>
        </div>

        {/* Feature Tabs */}
        <Tabs defaultValue="discovery" className="max-w-6xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="discovery">AI Discovery</TabsTrigger>
            <TabsTrigger value="enrichment">Enrichment</TabsTrigger>
            <TabsTrigger value="scoring">Lead Scoring</TabsTrigger>
            <TabsTrigger value="crm">CRM Sync</TabsTrigger>
            <TabsTrigger value="export">GDPR Export</TabsTrigger>
          </TabsList>

          <TabsContent value="discovery" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">AI Contact Discovery</h2>
                <p className="text-gray-600 mb-6">
                  Leverage advanced AI algorithms to discover and verify contact information across multiple data
                  sources in real-time.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>99% data accuracy guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Real-time email verification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Social media profile matching</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Company hierarchy mapping</span>
                  </li>
                </ul>
                <Button className="gradient-primary text-white" asChild>
                  <a
                    href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl animate-scale-in">
                <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <Brain className="h-24 w-24 text-purple-500" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="enrichment" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Enrichment Engine</h2>
                <p className="text-gray-600 mb-6">
                  Automatically enrich your existing contacts with comprehensive data points including job titles,
                  company information, and social profiles.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>50+ data points per contact</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Technographic data</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Intent data signals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Funding and growth data</span>
                  </li>
                </ul>
                <Button className="gradient-primary text-white" asChild>
                  <a href="https://salescentri.com/services/data-enrichment" target="_blank" rel="noopener noreferrer">
                    Explore Enrichment <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl animate-scale-in">
                <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <Database className="h-24 w-24 text-blue-500" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scoring" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Lead Scoring & Segmentation</h2>
                <p className="text-gray-600 mb-6">
                  AI-powered lead scoring helps you prioritize prospects based on their likelihood to convert and
                  engagement potential.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Predictive lead scoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Behavioral analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Custom scoring models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Automated segmentation</span>
                  </li>
                </ul>
                <Button className="gradient-primary text-white" asChild>
                  <a
                    href="https://salescentri.com/solutions/use-case-navigator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Use Cases <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl animate-scale-in">
                <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <Target className="h-24 w-24 text-green-500" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crm" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Auto-Sync with CRM</h2>
                <p className="text-gray-600 mb-6">
                  Seamlessly integrate with your existing CRM systems and automatically sync enriched contact data in
                  real-time.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Salesforce integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>HubSpot compatibility</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Pipedrive sync</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Custom API integrations</span>
                  </li>
                </ul>
                <Button className="gradient-primary text-white" asChild>
                  <a
                    href="https://salescentri.com/solutions/psa-suite/integrations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Integrations <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl animate-scale-in">
                <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <Zap className="h-24 w-24 text-yellow-500" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="export" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">GDPR-Compliant Export</h2>
                <p className="text-gray-600 mb-6">
                  Export your data with full GDPR compliance, ensuring privacy protection and regulatory adherence for
                  global operations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>GDPR compliance built-in</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Data privacy controls</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Audit trail tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Secure data handling</span>
                  </li>
                </ul>
                <Button className="gradient-primary text-white" asChild>
                  <a href="https://salescentri.com/trust/security-privacy" target="_blank" rel="noopener noreferrer">
                    Security Details <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl animate-scale-in">
                <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <Shield className="h-24 w-24 text-red-500" />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Interactive Demo Section */}
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 mb-16 animate-fade-in">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">See Limra Softwares in Action</h2>
            <p className="text-gray-600 mb-6">Experience our platform with an interactive demo</p>
            <Button size="lg" className="gradient-primary text-white" asChild>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Interactive Demo
              </a>
            </Button>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-gray-600">See how AI Hunter compares to traditional solutions</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">AI Hunter</th>
                  <th className="text-center p-4 font-semibold">Traditional Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Data Accuracy</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    <span className="block text-sm text-gray-600">99%</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-500">✕</span>
                    <span className="block text-sm text-gray-600">60-70%</span>
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4">Real-time Verification</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-500">✕</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">AI-Powered Scoring</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-500">✕</span>
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4">GDPR Compliance</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-500">Partial</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center gradient-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and see the difference AI Hunter can make
          </p>
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
