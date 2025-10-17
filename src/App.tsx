import { useState } from 'react'
import { Gift, CheckCircle, Clock, Shield, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import './App.css'

interface FAQItem {
  question: string
  answer: string
}

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs: FAQItem[] = [
    {
      question: "How long does it take to receive my gift card?",
      answer: "Once you complete all required offers and the survey, your $100 Crumbl gift card will be sent to your email within 7-10 business days."
    },
    {
      question: "What kind of offers do I need to complete?",
      answer: "You'll need to complete a short survey and several partner offers. These may include signing up for free trials, newsletter subscriptions, or exploring products and services from our trusted partners."
    },
    {
      question: "Is this really free?",
      answer: "Yes! The gift card is completely free. Some partner offers may be free trials that convert to paid subscriptions if not cancelled, so please read each offer's terms carefully."
    },
    {
      question: "Can I use the gift card at any Crumbl location?",
      answer: "Yes! Your $100 gift card can be used at any Crumbl Cookies location nationwide or for online orders."
    },
    {
      question: "What if I don't complete all the offers?",
      answer: "You must complete all required offers to qualify for the gift card. Partial completion does not qualify for the reward."
    }
  ]

  const scrollToForm = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-2xl font-bold text-pink-500">Crumbl</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Your <span className="text-pink-500">$100 Crumbl</span> Gift Card Today!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Love Crumbl Cookies? Complete our quick survey and a few simple offers to claim your FREE $100 gift card. It's that easy!
              </p>
              <Button 
                onClick={scrollToForm}
                className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Claim Your Gift Card Now
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                ✓ No purchase necessary • ✓ Limited time offer
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/cookies-hero.jpg" 
                alt="Delicious Crumbl cookies on a plate"
                className="rounded-2xl shadow-2xl w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400/FFC0CB/white?text=Crumbl+Cookies'
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-pink-500 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">$100</div>
                <div className="text-sm">Gift Card Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Thousands Are Claiming Their Gift Cards
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Free</h3>
                <p className="text-gray-600">
                  No hidden costs or fees. Just complete the offers and claim your gift card.
                </p>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick & Easy</h3>
                <p className="text-gray-600">
                  Complete the survey and offers in just 15-20 minutes from your phone or computer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
                <p className="text-gray-600">
                  Your information is protected and only shared with trusted partner brands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete the Survey</h3>
                <p className="text-gray-600">
                  Answer a few quick questions about your cookie preferences and shopping habits. Takes just 2-3 minutes!
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Partner Offers</h3>
                <p className="text-gray-600">
                  Sign up for a selection of offers from our trusted partners. Choose the ones that interest you most.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Your Gift Card</h3>
                <p className="text-gray-600">
                  Once verified, we'll email your $100 Crumbl gift card within 7-10 business days. Start enjoying those cookies!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={scrollToForm}
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What People Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-pink-100">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-pink-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I couldn't believe it was real, but I got my gift card in just over a week! Already used it to get cookies for my whole office."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-semibold">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah K.</div>
                    <div className="text-sm text-gray-500">Verified User</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-100">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-pink-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Super easy process! The offers were actually pretty interesting and I found some cool new products. Plus free Crumbl!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-semibold">
                    MR
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mike R.</div>
                    <div className="text-sm text-gray-500">Verified User</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-100">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-pink-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Best deal ever! Took me about 20 minutes and now I have $100 to spend on my favorite cookies. Totally worth it!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-semibold">
                    JL
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Jessica L.</div>
                    <div className="text-sm text-gray-500">Verified User</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">50,000+</div>
              <div className="text-gray-600">Gift Cards Claimed</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-pink-200"></div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-pink-200"></div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">15 mins</div>
              <div className="text-gray-600">Average Completion Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-pink-100">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-pink-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Your Free $100 Gift Card?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of Crumbl fans who have already claimed their gift cards. Don't miss out on this limited-time offer!
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <div className="mb-6">
              <Gift className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Claim Your Gift Card</h3>
              <p className="text-gray-600">Click below to start the quick survey and offers</p>
            </div>

            <Button 
              onClick={() => window.open('https://example.com/survey', '_blank')}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all mb-4"
            >
              Start Now - Get $100 Gift Card
            </Button>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Free</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-8 max-w-2xl mx-auto">
            By participating, you agree to complete all required offers and provide accurate information. 
            Gift cards are delivered via email within 7-10 business days after verification. 
            Offer subject to availability and may be discontinued at any time. 
            See full terms and conditions for details.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-xl font-bold text-pink-400 mb-4">Crumbl</div>
          <div className="text-sm text-gray-400 space-y-2">
            <p>© 2024 Crumbl Gift Card Promotion. All rights reserved.</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Contact Us</a>
            </div>
            <p className="text-xs mt-4">
              This promotion is not affiliated with or endorsed by Crumbl Cookies LLC. 
              Gift cards are provided by third-party sponsors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
