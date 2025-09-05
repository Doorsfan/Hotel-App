import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Search, HelpCircle, Star, Clock, CreditCard, Shield, MapPin, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = {
    general: {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is BookMyStay?",
          answer: "BookMyStay is an online hotel booking platform that helps you find and reserve accommodations worldwide. We partner with thousands of hotels to offer you the best rates and experiences."
        },
        {
          question: "Is it free to use BookMyStay?",
          answer: "Yes, our booking service is completely free for travelers. We earn a small commission from our hotel partners, which doesn't affect the price you pay."
        },
        {
          question: "How do I know if my booking is confirmed?",
          answer: "You'll receive a confirmation email immediately after booking with your reservation details and confirmation number. You can also check your booking status in your account."
        },
        {
          question: "Can I book multiple rooms at once?",
          answer: "Yes, during the search process, you can specify the number of rooms needed. You can book up to 10 rooms in a single reservation."
        },
        {
          question: "Do you offer customer support?",
          answer: "Yes, we provide 24/7 customer support via phone, email, and live chat. Our team is always ready to help with your booking needs."
        }
      ]
    },
    booking: {
      title: "Booking & Reservations",
      icon: MapPin,
      questions: [
        {
          question: "How far in advance can I book a hotel?",
          answer: "You can typically book hotels up to 18 months in advance, though availability varies by property. We recommend booking early for popular destinations and peak seasons."
        },
        {
          question: "Can I book a hotel for the same day?",
          answer: "Yes, many hotels accept same-day bookings. Use our 'Today' filter when searching to see available properties for immediate check-in."
        },
        {
          question: "What if the hotel I want is fully booked?",
          answer: "Try adjusting your dates or check similar properties in the area. You can also set up price alerts to be notified if rooms become available."
        },
        {
          question: "Can I make a reservation without a credit card?",
          answer: "Most reservations require a credit card for guarantee, but some hotels offer alternative payment methods. Check the payment options during booking."
        },
        {
          question: "How do I add special requests to my booking?",
          answer: "During checkout, you'll find a 'Special Requests' section where you can add preferences like room type, location, accessibility needs, or celebration occasions."
        }
      ]
    },
    payment: {
      title: "Payment & Pricing",
      icon: CreditCard,
      questions: [
        {
          question: "When am I charged for my booking?",
          answer: "Payment timing depends on the rate type. Most bookings are charged immediately, while some 'Pay at Hotel' rates charge upon arrival. This is clearly indicated during booking."
        },
        {
          question: "Why do prices change when I refresh the page?",
          answer: "Hotel prices are dynamic and change based on demand, availability, and time. Prices are held for a limited time during your booking session."
        },
        {
          question: "Are there any hidden fees?",
          answer: "We display all known fees upfront. However, some hotels may charge resort fees, city taxes, or incidental charges directly. These are noted in the hotel details when known."
        },
        {
          question: "Do you accept international credit cards?",
          answer: "Yes, we accept major international credit cards including Visa, MasterCard, American Express, and many regional cards."
        },
        {
          question: "Can I pay in a different currency?",
          answer: "Prices are displayed in your local currency when possible. You can change the currency using the currency selector in the top menu."
        }
      ]
    },
    cancellation: {
      title: "Cancellation & Changes",
      icon: Shield,
      questions: [
        {
          question: "Can I cancel my booking for free?",
          answer: "Cancellation policies vary by hotel and rate type. Many bookings offer free cancellation up to 24-48 hours before check-in. Check your booking confirmation for specific terms."
        },
        {
          question: "How do I cancel my reservation?",
          answer: "Use the cancellation link in your confirmation email, visit our cancellation page, or contact customer support. You'll need your confirmation number and email address."
        },
        {
          question: "How long do refunds take to process?",
          answer: "Refunds typically appear on your statement within 3-5 business days, though it can take up to 10 business days depending on your bank."
        },
        {
          question: "Can I change my booking dates?",
          answer: "Date changes depend on the hotel's policy and availability. Some bookings allow free changes, while others may charge a fee. Check your booking terms or contact support."
        },
        {
          question: "What happens if I don't show up?",
          answer: "No-show policies vary by hotel. Most charge one night's rate, though some may charge the full stay. Check your booking confirmation for the specific no-show policy."
        }
      ]
    },
    checkin: {
      title: "Check-in & Your Stay",
      icon: Clock,
      questions: [
        {
          question: "What are typical check-in and check-out times?",
          answer: "Standard check-in is usually 3:00 PM and check-out is 11:00 AM, though times vary by hotel. Exact times are shown in your booking confirmation."
        },
        {
          question: "Can I check in early or check out late?",
          answer: "Early check-in and late check-out are subject to availability and may incur charges. Contact the hotel directly to arrange this service."
        },
        {
          question: "What do I need to bring for check-in?",
          answer: "Bring a valid government-issued photo ID and the credit card used for booking. Some hotels may require additional verification or deposits."
        },
        {
          question: "Do you offer mobile check-in?",
          answer: "Many hotels offer mobile check-in through their apps or websites. Check with your specific hotel for available digital services."
        },
        {
          question: "What if I have problems during my stay?",
          answer: "Contact the hotel's front desk first for immediate assistance. For booking-related issues, our customer support team is available 24/7 to help resolve problems."
        }
      ]
    },
    account: {
      title: "Account & Rewards",
      icon: Users,
      questions: [
        {
          question: "Do I need an account to book?",
          answer: "No, you can book as a guest. However, creating an account lets you save preferences, track bookings, earn rewards, and manage reservations easily."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page and enter your email. We'll send you a secure link to create a new password."
        },
        {
          question: "Do you have a loyalty program?",
          answer: "Yes, our BookMyStay Rewards program offers points for every booking, exclusive deals, and member-only rates. Join for free in your account settings."
        },
        {
          question: "Can I save my favorite hotels?",
          answer: "Yes, you can save hotels to your favorites list for easy rebooking. Look for the heart icon on hotel pages and search results."
        },
        {
          question: "How do I update my profile information?",
          answer: "Log into your account and visit the 'Profile' section to update personal information, travel preferences, and notification settings."
        }
      ]
    }
  };

  const allCategories = Object.keys(faqData) as Array<keyof typeof faqData>;

  const getFilteredQuestions = (category?: keyof typeof faqData) => {
    const categories = category ? [category] : allCategories;
    const results: Array<{ category: string; question: string; answer: string; categoryTitle: string }> = [];

    categories.forEach(cat => {
      faqData[cat].questions.forEach(q => {
        if (searchQuery === "" || 
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            category: cat,
            question: q.question,
            answer: q.answer,
            categoryTitle: faqData[cat].title
          });
        }
      });
    });

    return results;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Quick answers to common questions about booking and staying with us</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 backdrop-blur-sm bg-card/95 border-border/50">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2">
                {getFilteredQuestions().length} results found for "{searchQuery}"
              </p>
            )}
          </CardContent>
        </Card>

        {/* FAQ Content */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            {allCategories.map(category => {
              const IconComponent = faqData[category].icon;
              return (
                <TabsTrigger key={category} value={category} className="flex items-center gap-1">
                  <IconComponent className="h-3 w-3" />
                  <span className="hidden sm:inline">{faqData[category].title.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="all">
            <Card className="backdrop-blur-sm bg-card/95 border-border/50">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {getFilteredQuestions().map((item, index) => (
                    <AccordionItem key={index} value={`all-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-2">
                          {item.question}
                          <Badge variant="outline" className="text-xs">
                            {item.categoryTitle}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                {searchQuery && getFilteredQuestions().length === 0 && (
                  <div className="text-center py-8">
                    <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try different keywords or browse our categories
                    </p>
                    <Button variant="outline" onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {allCategories.map(category => {
            const IconComponent = faqData[category].icon;
            return (
              <TabsContent key={category} value={category}>
                <Card className="backdrop-blur-sm bg-card/95 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                      {faqData[category].title}
                      <Badge variant="secondary">
                        {getFilteredQuestions(category).length} questions
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {getFilteredQuestions(category).map((item, index) => (
                        <AccordionItem key={index} value={`${category}-${index}`}>
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
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Contact Support */}
        <Card className="mt-8 backdrop-blur-sm bg-card/95 border-border/50">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Still need help?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is here to help 24/7.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/help">Visit Help Center</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;