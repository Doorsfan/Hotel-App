import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, Star } from "lucide-react";

export default function DestinationsPage() {
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "The City of Light offers romance, art, and culinary excellence in every corner.",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hotels: 245,
      avgPrice: 289,
      bestTime: "Apr - Oct",
      rating: 4.8,
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River", "Champs-Élysées"]
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "A mesmerizing blend of ultra-modern technology and ancient traditions.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hotels: 189,
      avgPrice: 245,
      bestTime: "Mar - May",
      rating: 4.7,
      highlights: ["Tokyo Tower", "Shibuya Crossing", "Senso-ji Temple", "Imperial Palace"]
    },
    {
      id: 3,
      name: "New York City, USA",
      description: "The city that never sleeps, where dreams come to life in towering skyscrapers.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hotels: 356,
      avgPrice: 329,
      bestTime: "Apr - Jun",
      rating: 4.6,
      highlights: ["Times Square", "Central Park", "Statue of Liberty", "Broadway"]
    },
    {
      id: 4,
      name: "London, England",
      description: "Royal heritage meets modern sophistication in this timeless global capital.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hotels: 278,
      avgPrice: 267,
      bestTime: "May - Sep",
      rating: 4.5,
      highlights: ["Big Ben", "Tower Bridge", "British Museum", "Buckingham Palace"]
    },
    {
      id: 5,
      name: "Dubai, UAE",
      description: "A futuristic oasis where luxury and innovation create extraordinary experiences.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hotels: 167,
      avgPrice: 398,
      bestTime: "Nov - Mar",
      rating: 4.9,
      highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Burj Al Arab"]
    },
    {
      id: 6,
      name: "Santorini, Greece",
      description: "Whitewashed villages perched on volcanic cliffs overlooking azure seas.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hotels: 92,
      avgPrice: 234,
      bestTime: "Apr - Oct",
      rating: 4.8,
      highlights: ["Oia Sunset", "Blue Domes", "Red Beach", "Fira Town"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Discover Amazing Destinations
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Explore the world's most captivating destinations and find your perfect luxury getaway
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-luxury text-luxury-foreground">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {destination.rating}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary">
                      From ${destination.avgPrice}/night
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-luxury" />
                    {destination.name}
                  </CardTitle>
                  <CardDescription>
                    {destination.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{destination.hotels} hotels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Top Attractions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {destination.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{destination.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    Explore Hotels
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect luxury vacation with our curated selection of premium hotels and resorts.
          </p>
          <Button size="lg" variant="outline" className="px-8">
            Plan Your Trip
          </Button>
        </div>
      </section>
    </div>
  );
}
