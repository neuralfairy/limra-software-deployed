import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-white border-0">🏢 About Us</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Making Prospecting <span className="gradient-text">Intelligent, Not Manual</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform how sales teams discover and connect with their ideal prospects using the
            power of artificial intelligence.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 animate-slide-up">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg animate-fade-in">
                At Limra Softwares, we believe that sales teams should spend their time building relationships, not
                hunting for contact information. Our AI-powered platform eliminates the manual work of prospecting,
                allowing sales professionals to focus on what they do best - closing deals.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in Dallas, TX, we've helped thousands of sales teams worldwide discover and enrich millions of
                leads with unprecedented accuracy and speed.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">10M+</div>
                  <p className="text-gray-600">Contacts Discovered</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">5,000+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <Target className="h-24 w-24 text-purple-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600">Meet the experts behind AI Hunter</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">JS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="text-gray-600 mb-2">CEO & Co-Founder</p>
                <p className="text-sm text-gray-500">Former VP of Sales at TechCorp, 15+ years in B2B sales</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">MJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Maria Johnson</h3>
                <p className="text-gray-600 mb-2">CTO & Co-Founder</p>
                <p className="text-sm text-gray-500">AI/ML expert, former Google engineer, PhD in Computer Science</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">RW</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Robert Wilson</h3>
                <p className="text-gray-600 mb-2">VP of Engineering</p>
                <p className="text-sm text-gray-500">Full-stack architect, 12+ years building scalable platforms</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How AI Hunter Evolved</h2>
            <p className="text-gray-600">Our journey from idea to industry leader</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-up">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Idea</h3>
                  <p className="text-gray-600">
                    Founded in Dallas, TX with a vision to make prospecting intelligent and automated
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-slide-up">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">First AI Models</h3>
                  <p className="text-gray-600">
                    Developed our first AI-powered contact discovery algorithms with 95% accuracy
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-slide-up">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  2022
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Platform Launch</h3>
                  <p className="text-gray-600">
                    Launched AI Hunter platform with 1,000+ beta users and major CRM integrations
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-slide-up">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  2023
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scale & Growth</h3>
                  <p className="text-gray-600">
                    Reached 5,000+ customers and processed over 10 million contact discoveries
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-slide-up">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Revolution</h3>
                  <p className="text-gray-600">
                    Launched next-gen AI models with 99% accuracy and real-time verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Headquarters</h2>
            <p className="text-gray-600">Based in the heart of Dallas, Texas</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-purple-500 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold">Dallas, TX</h3>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Our Dallas headquarters serves as the innovation hub where our team of AI engineers, sales experts, and
                customer success specialists work together to build the future of intelligent prospecting.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-3" />
                  <span>50+ team members</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-purple-500 mr-3" />
                  <span>Award-winning workplace culture</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <MapPin className="h-24 w-24 text-purple-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Accuracy First</h3>
                <p className="text-gray-600 text-sm">
                  We're obsessed with data quality and accuracy in everything we deliver
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Customer Success</h3>
                <p className="text-gray-600 text-sm">
                  Our customers' success is our success - we're partners in growth
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">We continuously push the boundaries of what's possible with AI</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm">
                  Open communication and honest relationships with all stakeholders
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center gradient-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">Ready to be part of the future of intelligent prospecting?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <a href="https://salescentri.com/company/careers" target="_blank" rel="noopener noreferrer">
                View Careers
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
              asChild
            >
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Partner With Us
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
