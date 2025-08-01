import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "How accurate is the contact data?",
      answer:
        "AI Hunter provides 99% data accuracy through our advanced AI verification system. We use multiple data sources and real-time verification to ensure the highest quality contact information. All email addresses are verified before delivery, and we provide a data accuracy guarantee.",
    },
    {
      question: "Do you integrate with our CRM?",
      answer:
        "Yes! AI Hunter integrates seamlessly with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and many others. We also offer custom API integrations for enterprise customers. Data syncs automatically in real-time, keeping your CRM up-to-date.",
    },
    {
      question: "How does the AI score leads?",
      answer:
        "Our AI lead scoring algorithm analyzes over 50 data points including company size, industry, recent funding, technology stack, job changes, and behavioral signals. The system learns from your successful conversions to continuously improve scoring accuracy for your specific use case.",
    },
    {
      question: "What data privacy standards do you meet?",
      answer:
        "AI Hunter is fully GDPR compliant and meets SOC2 Type II and ISO 27001 standards. We implement enterprise-grade security measures, provide data processing agreements, and offer complete audit trails. All data is encrypted in transit and at rest.",
    },
    {
      question: "How many credits do I need?",
      answer:
        "Credit usage depends on your prospecting volume. Contact discovery uses 1 credit per contact, while enrichment uses additional credits based on data points requested. Most users find our Professional plan (1,000 credits/month) sufficient for active prospecting.",
    },
    {
      question: "Can I try AI Hunter for free?",
      answer:
        "We offer a free trial with 500 credits to get you started. No credit card required. You can explore all features and see the quality of our data before making any commitment.",
    },
    {
      question: "What makes AI Hunter different from other tools?",
      answer:
        "AI Hunter combines multiple data sources with advanced AI algorithms for superior accuracy. Our real-time verification, predictive lead scoring, and seamless CRM integration set us apart. Plus, we're GDPR compliant by design, not as an afterthought.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "You can start discovering leads within minutes of signing up. Our platform is designed for immediate use with no complex setup required. CRM integrations can be configured in under 5 minutes with our guided setup process.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! We provide comprehensive support including email support for all users, priority support for Professional plans, and dedicated support for Enterprise customers. Our team typically responds within 2-4 hours during business hours.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your discovered contacts and enriched data in multiple formats including CSV, Excel, and via API. All exports are GDPR compliant and include proper data attribution and consent tracking.",
    },
    {
      question: "What industries does AI Hunter work best for?",
      answer:
        "AI Hunter works across all B2B industries, with particularly strong performance in technology, healthcare, finance, and professional services. Our AI models are trained on diverse industry data to ensure broad applicability.",
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer:
        "No long-term contracts required! You can upgrade, downgrade, or cancel your subscription at any time. We offer month-to-month billing with the option to save with annual plans. Enterprise customers may have custom terms.",
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-white border-0">❓ FAQ</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Find answers to common questions about Limra Softwares' features, pricing, and implementation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 py-2 bg-white shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions Section */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary text-white" asChild>
                <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                  Contact Support
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Resources</h2>
            <p className="text-gray-600">Quick access to helpful information</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Getting Started Guide</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Step-by-step guide to set up your account and start prospecting
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://salescentri.com/docs/user-guide" target="_blank" rel="noopener noreferrer">
                  Read Guide
                </a>
              </Button>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
              <p className="text-gray-600 mb-4 text-sm">Technical documentation for developers and integrations</p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://salescentri.com/docs/api-reference" target="_blank" rel="noopener noreferrer">
                  View Docs
                </a>
              </Button>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Security & Privacy</h3>
              <p className="text-gray-600 mb-4 text-sm">Learn about our security measures and privacy protections</p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://salescentri.com/trust/security-privacy" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center gradient-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of sales teams using AI Hunter to discover qualified leads
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
                Schedule Demo
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
