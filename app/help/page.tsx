'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Search, MessageCircle, Phone, Mail, CreditCard, Calendar, MapPin, Users, Settings, HelpCircle, FileText, Shield } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      id: "booking",
      title: "Booking & Reservations",
      icon: Calendar,
      color: "bg-blue-500",
      items: [
        {
          question: "How do I make a reservation?",
          answer: "You can make a reservation by searching for your destination and dates on our homepage, selecting your preferred hotel, and completing the booking process with your payment information."
        },
        {
          question: "Can I modify my existing reservation?",
          answer: "Yes, you can modify your reservation up to 24 hours before check-in. Visit your booking confirmation email and click 'Manage Booking' or contact our support team."
        },
        {
          question: "What information do I need to make a booking?",
          answer: "You'll need guest names, contact information, payment details, and any special requests or preferences for your stay."
        },
        {
          question: "How do I add special requests to my booking?",
          answer: "During the booking process, you'll find a 'Special Requests' section where you can add preferences like room location, bed type, or dietary requirements."
        }
      ]
    },
    {
      id: "payment",
      title: "Payment & Billing",
      icon: CreditCard,
      color: "bg-green-500",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and digital wallets like Apple Pay and Google Pay."
        },
        {
          question: "When will I be charged for my booking?",
          answer: "For most bookings, you'll be charged immediately upon confirmation. Some hotels may offer pay-at-property options, which will be clearly indicated during booking."
        },
        {
          question: "Can I get a receipt for my booking?",
          answer: "Yes, a receipt is automatically sent to your email upon booking confirmation. You can also download it from your booking management page."
        },
        {
          question: "What if my payment fails?",
          answer: "If your payment fails, please check your card details and try again. Contact your bank if issues persist, or try an alternative payment method."
        }
      ]
    },
    {
      id: "cancellation",
      title: "Cancellation & Refunds",
      icon: Shield,
      color: "bg-red-500",
      items: [
        {
          question: "What is your cancellation policy?",
          answer: "Most bookings can be cancelled free of charge up to 24 hours before check-in. Specific policies vary by hotel and rate type, so please check your booking confirmation."
        },
        {
          question: "How do I cancel my reservation?",
          answer: "You can cancel your reservation through the link in your confirmation email, by visiting our cancellation page, or by contacting customer support."
        },
        {
          question: "How long does it take to receive a refund?",
          answer: "Refunds are typically processed within 3-5 business days and will appear on your original payment method within 7-10 business days."
        },
        {
          question: "Can I get a partial refund for early checkout?",
          answer: "Partial refunds for early checkout depend on the hotel's policy and rate type. Contact the hotel directly or our support team for assistance."
        }
      ]
    },
    {
      id: "checkin",
      title: "Check-in & Stay",
      icon: MapPin,
      color: "bg-purple-500",
      items: [
        {
          question: "What time is check-in and check-out?",
          answer: "Standard check-in is typically 3:00 PM and check-out is 11:00 AM. However, times may vary by hotel. Check your booking confirmation for specific times."
        },
        {
          question: "Can I check in early or check out late?",
          answer: "Early check-in and late check-out are subject to availability and may incur additional charges. Contact the hotel directly to arrange this."
        },
        {
          question: "What do I need to bring for check-in?",
          answer: "Bring a valid government-issued photo ID and the credit card used for booking. Some hotels may require additional verification."
        },
        {
          question: "Do you offer mobile check-in?",
          answer: "Many of our partner hotels offer mobile check-in options. Look for this feature in your booking confirmation or contact the hotel directly."
        }
      ]
    },
    {
      id: "account",
      title: "Account & Profile",
      icon: Users,
      color: "bg-orange-500",
      items: [
        {
          question: "How do I create an account?",
          answer: "Click 'Sign Up' on our homepage and fill in your details. Having an account allows you to save preferences, track bookings, and earn rewards."
        },
        {
          question: "I forgot my password. How can I reset it?",
          answer: "Click 'Forgot Password' on the login page and enter your email. We'll send you a link to reset your password securely."
        },
        {
          question: "How do I update my profile information?",
          answer: "Log into your account and visit the 'Profile' section where you can update your personal information, preferences, and contact details."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can delete your account by contacting our support team. Note that this will permanently remove your booking history and saved preferences."
        }
      ]
    }
  ];

  const quickLinks = [
    { title: "Make a Booking", href: "/hotels", icon: Calendar },
    { title: "Cancel Reservation", href: "/cancellation", icon: Shield },
    { title: "Contact Support", href: "/contact", icon: MessageCircle },
    { title: "Privacy Policy", href: "/privacy-policy", icon: FileText },
  ];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      searchQuery === "" || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0 || searchQuery === "");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Help Center</h1>
          <p className="text-muted-foreground">Find answers to common questions and get the help you need</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 backdrop-blur-sm bg-card/95 border-border/50">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Quick Links Sidebar */}
          <div className="lg:col-span-1">
            <Card className="backdrop-blur-sm bg-card/95 border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <Button variant="ghost" className="w-full justify-start">
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.title}
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/95 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Need More Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Call Us</p>
                    <p className="text-xs text-muted-foreground">+1 (800) HOTEL-US</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Email Support</p>
                    <p className="text-xs text-muted-foreground">support@bookmystay.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Live Chat</p>
                    <p className="text-xs text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Categories */}
          <div className="lg:col-span-3 space-y-6">
            {searchQuery && (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0)} results found for "{searchQuery}"
                </p>
              </div>
            )}

            {filteredCategories.map((category) => (
              <Card key={category.id} className="backdrop-blur-sm bg-card/95 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    {category.title}
                    <Badge variant="secondary">{category.items.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}

            {searchQuery && filteredCategories.length === 0 && (
              <Card className="backdrop-blur-sm bg-card/95 border-border/50">
                <CardContent className="p-8 text-center">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn't find any help topics matching "{searchQuery}". Try different keywords or browse our categories above.
                  </p>
                  <Button variant="outline" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;