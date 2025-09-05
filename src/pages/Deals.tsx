import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Star, Tag, Users, Percent } from "lucide-react";

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "Early Bird Special",
      description: "Book 30 days in advance and save up to 25%",
      discount: "25% OFF",
      hotel: "The Grand Palace Resort",
      location: "Bali, Indonesia",
      originalPrice: 320,
      discountPrice: 240,
      rating: 4.9,
      reviews: 2847,
      validUntil: "Dec 31, 2024",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Breakfast Included", "Spa Access", "Airport Transfer"],
      badge: "Limited Time"
    },
    {
      id: 2,
      title: "Weekend Getaway",
      description: "Perfect for short escapes with premium amenities",
      discount: "30% OFF",
      hotel: "Azure Boutique Hotel",
      location: "Santorini, Greece",
      originalPrice: 280,
      discountPrice: 196,
      rating: 4.8,
      reviews: 1923,
      validUntil: "Jan 15, 2025",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Ocean View", "Free WiFi", "Pool Access"],
      badge: "Most Popular"
    },
    {
      id: 3,
      title: "Family Package",
      description: "Special rates for families with children under 12",
      discount: "20% OFF",
      hotel: "Mountain View Lodge",
      location: "Aspen, Colorado",
      originalPrice: 450,
      discountPrice: 360,
      rating: 4.7,
      reviews: 1456,
      validUntil: "Mar 30, 2025",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Kids Club", "Family Rooms", "Ski Pass Included"],
      badge: "Family Friendly"
    },
    {
      id: 4,
      title: "Last Minute Deal",
      description: "Book within 48 hours for instant savings",
      discount: "40% OFF",
      hotel: "City Center Executive",
      location: "New York, USA",
      originalPrice: 380,
      discountPrice: 228,
      rating: 4.6,
      reviews: 3241,
      validUntil: "Next 48 Hours",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Business Center", "Gym Access", "City Views"],
      badge: "Flash Sale"
    },
    {
      id: 5,
      title: "Honeymoon Special",
      description: "Romantic getaway with luxury amenities for couples",
      discount: "35% OFF",
      hotel: "Paradise Island Resort",
      location: "Maldives",
      originalPrice: 650,
      discountPrice: 422,
      rating: 4.9,
      reviews: 1876,
      validUntil: "Feb 14, 2025",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Private Beach", "Couples Spa", "Sunset Dining"],
      badge: "Romantic"
    },
    {
      id: 6,
      title: "Extended Stay",
      description: "Stay 7+ nights and enjoy significant savings",
      discount: "28% OFF",
      hotel: "Urban Luxury Suites",
      location: "Tokyo, Japan",
      originalPrice: 220,
      discountPrice: 158,
      rating: 4.8,
      reviews: 2134,
      validUntil: "Jun 30, 2025",
      image: "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Kitchenette", "Weekly Cleaning", "Metro Access"],
      badge: "Long Stay"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Limited Time":
        return "destructive";
      case "Most Popular":
        return "default";
      case "Flash Sale":
        return "destructive";
      case "Romantic":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-luxury text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Tag className="h-8 w-8 mr-3 text-luxury-light" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Exclusive Deals & Offers
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover amazing savings on luxury accommodations worldwide. Limited-time offers for unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.hotel}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={getBadgeVariant(deal.badge)} className="font-semibold">
                    {deal.badge}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-destructive text-destructive-foreground font-bold text-lg px-3 py-1">
                    {deal.discount}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {deal.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {deal.description}
                </CardDescription>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{deal.hotel}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{deal.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{deal.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({deal.reviews} reviews)</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">${deal.discountPrice}</span>
                      <span className="text-lg text-muted-foreground line-through">${deal.originalPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">per night</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Valid until</span>
                    </div>
                    <p className="font-medium">{deal.validUntil}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Included:</p>
                  <div className="flex flex-wrap gap-2">
                    {deal.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full" size="lg">
                  Book This Deal
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            These exclusive deals are available for a limited time. Book now to secure your perfect getaway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hotels">
              <Button size="lg" className="px-8">
                Browse All Hotels
              </Button>
            </Link>
            <Link to="/destinations">
              <Button variant="outline" size="lg" className="px-8">
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;