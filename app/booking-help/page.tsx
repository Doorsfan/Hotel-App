'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Search, Calendar, CreditCard, MapPin, Users, CheckCircle, AlertTriangle, HelpCircle, Clock, Shield, Star } from "lucide-react";
import Link from "next/link";

export default function BookingHelpPage() {

    const bookingSteps = [
        {
          step: 1,
          title: "Search for Hotels",
          description: "Enter your destination, check-in and check-out dates, and number of guests",
          tips: [
            "Use specific city names or hotel names for better results",
            "Check nearby dates if your preferred dates are unavailable",
            "Consider flexible dates for better rates"
          ]
        },
        {
          step: 2,
          title: "Browse & Compare",
          description: "Review hotel options, amenities, and guest reviews",
          tips: [
            "Read recent guest reviews for honest feedback",
            "Check hotel location on the map",
            "Compare amenities that matter to you"
          ]
        },
        {
          step: 3,
          title: "Select Room Type",
          description: "Choose your preferred room and rate type",
          tips: [
            "Free cancellation rates offer more flexibility",
            "Pay attention to included amenities",
            "Check bed type and room size"
          ]
        },
        {
          step: 4,
          title: "Enter Guest Details",
          description: "Provide guest information and special requests",
          tips: [
            "Ensure names match your ID exactly",
            "Add special requests like room preferences",
            "Provide accurate contact information"
          ]
        },
        {
          step: 5,
          title: "Payment & Confirmation",
          description: "Complete payment and receive your confirmation",
          tips: [
            "Double-check all details before payment",
            "Save your confirmation number",
            "Add booking to your calendar"
          ]
        }
      ];
    
      const commonIssues = [
        {
          issue: "I can't find availability for my dates",
          solutions: [
            "Try searching for nearby dates (±1-2 days)",
            "Check if you're searching for the correct year",
            "Consider alternative neighborhoods in your destination",
            "Contact the hotel directly as they may have last-minute availability"
          ]
        },
        {
          issue: "The price changed when I tried to book",
          solutions: [
            "Hotel prices change based on demand and availability",
            "Clear your browser cache and cookies",
            "Try booking in an incognito/private window",
            "Prices are held for a limited time during your session"
          ]
        },
        {
          issue: "My payment was declined",
          solutions: [
            "Check that all card details are entered correctly",
            "Ensure your card has sufficient funds/credit limit",
            "Contact your bank - they may have blocked the transaction",
            "Try using a different payment method"
          ]
        },
        {
          issue: "I haven't received my confirmation email",
          solutions: [
            "Check your spam/junk folder",
            "Verify you entered the correct email address",
            "Wait up to 30 minutes for email delivery",
            "Contact customer support with your booking details"
          ]
        },
        {
          issue: "The website is running slowly or freezing",
          solutions: [
            "Clear your browser cache and cookies",
            "Try using a different browser",
            "Check your internet connection",
            "Disable browser extensions temporarily"
          ]
        }
      ];
    
      const paymentTips = [
        {
          title: "Accepted Payment Methods",
          content: "We accept Visa, MasterCard, American Express, Discover, PayPal, Apple Pay, and Google Pay"
        },
        {
          title: "Currency & Pricing",
          content: "Prices are shown in your local currency. International cards are accepted with automatic conversion"
        },
        {
          title: "Security",
          content: "All transactions are encrypted and secure. We never store your complete card details"
        },
        {
          title: "Billing",
          content: "You'll be charged when you complete your booking unless you select a 'Pay at Hotel' rate"
        }
      ];
    
      const bookingTips = [
        {
          category: "Best Practices",
          tips: [
            "Book early for popular destinations and peak seasons",
            "Compare different room types and rates",
            "Read the cancellation policy before booking",
            "Check what's included in your rate (breakfast, Wi-Fi, etc.)",
            "Verify check-in and check-out times"
          ]
        },
        {
          category: "Money-Saving Tips",
          tips: [
            "Use flexible date search to find cheaper rates",
            "Consider staying slightly outside city centers",
            "Look for package deals that include extras",
            "Book Sunday-Thursday for business destinations",
            "Sign up for our newsletter for exclusive deals"
          ]
        },
        {
          category: "Special Occasions",
          tips: [
            "Mention celebrations in special requests",
            "Book spa or dining reservations after confirming your stay",
            "Consider room upgrades for special events",
            "Arrive early if you have evening plans",
            "Inform the hotel of any accessibility needs"
          ]
        }
      ];
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Booking Help</h1>
          <p className="text-muted-foreground">Everything you need to know about making a hotel reservation</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Button asChild className="h-auto p-4 flex-col gap-2">
            <Link href="/hotels">
              <Search className="h-6 w-6" />
              Start Booking
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
            <Link href="/cancellation">
              <Shield className="h-6 w-6" />
              Manage Booking
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
            <Link href="/contact">
              <HelpCircle className="h-6 w-6" />
              Get Support
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
            <Link href="/faq">
              <Star className="h-6 w-6" />
              View FAQ
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="guide" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guide">Booking Guide</TabsTrigger>
            <TabsTrigger value="troubleshoot">Troubleshooting</TabsTrigger>
            <TabsTrigger value="payment">Payment Help</TabsTrigger>
            <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
          </TabsList>

          {/* Booking Guide */}
          <TabsContent value="guide">
            <Card className="backdrop-blur-sm bg-card/95 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Step-by-Step Booking Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {bookingSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <div className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Troubleshooting */}
          <TabsContent value="troubleshoot">
            <Card className="backdrop-blur-sm bg-card/95 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Common Issues & Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {commonIssues.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">{item.issue}</h3>
                    <div className="space-y-2">
                      {item.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{solution}</span>
                        </div>
                      ))}
                    </div>
                    {index < commonIssues.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
                
                <Alert>
                  <HelpCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Still having trouble?</strong> Our customer support team is available 24/7 to help resolve any booking issues. 
                    <Link href="/contact" className="text-primary hover:underline ml-1">Contact us here</Link>.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Help */}
          <TabsContent value="payment">
            <Card className="backdrop-blur-sm bg-card/95 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {paymentTips.map((tip, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.content}</p>
                    {index < paymentTips.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Payment Security:</strong> Your payment information is protected by industry-standard encryption. 
                    We comply with PCI DSS standards to ensure your data is secure.
                  </AlertDescription>
                </Alert>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Payment Timing</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Pay Now Rates:</span>
                      <span className="text-muted-foreground">Charged immediately</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pay at Hotel:</span>
                      <span className="text-muted-foreground">Charged at check-in</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deposits:</span>
                      <span className="text-muted-foreground">Varies by hotel</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tips & Tricks */}
          <TabsContent value="tips">
            <div className="space-y-6">
              {bookingTips.map((category, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/95 border-border/50">
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Support */}
        <Card className="mt-8 backdrop-blur-sm bg-card/95 border-border/50">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Always here to help</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Knowledgeable support staff</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Secure Platform</h4>
                  <p className="text-sm text-muted-foreground">Your data is protected</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
