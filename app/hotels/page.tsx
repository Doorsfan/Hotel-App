import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Utensils, Dumbbell } from "lucide-react";

export default function HotelsPage() {
  const hotels = [
    {
      id: 1,
      name: "The Grand Palace Hotel",
      location: "New York City, NY",
      rating: 4.8,
      reviews: 2847,
      price: 299,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["wifi", "parking", "restaurant", "gym"],
      description: "Luxury hotel in the heart of Manhattan with stunning city views."
    },
    {
      id: 2,
      name: "Oceanview Resort & Spa",
      location: "Miami Beach, FL",
      rating: 4.6,
      reviews: 1923,
      price: 189,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["wifi", "restaurant", "gym"],
      description: "Beachfront resort with world-class spa and dining facilities."
    },
    {
      id: 3,
      name: "Mountain Lodge Retreat",
      location: "Aspen, CO",
      rating: 4.7,
      reviews: 1456,
      price: 245,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["wifi", "parking", "restaurant"],
      description: "Cozy mountain retreat with breathtaking alpine views."
    },
    {
      id: 4,
      name: "Downtown Business Hotel",
      location: "Chicago, IL",
      rating: 4.4,
      reviews: 3421,
      price: 159,
      image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["wifi", "parking", "gym"],
      description: "Modern business hotel with premium amenities and conference facilities."
    },
    {
      id: 5,
      name: "Historic Boutique Inn",
      location: "Charleston, SC",
      rating: 4.9,
      reviews: 876,
      price: 225,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["wifi", "restaurant"],
      description: "Charming historic inn with Southern hospitality and fine dining."
    },
    {
      id: 6,
      name: "Desert Oasis Resort",
      location: "Scottsdale, AZ",
      rating: 4.5,
      reviews: 2134,
      price: 199,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["wifi", "parking", "restaurant", "gym"],
      description: "Luxury desert resort with golf course and spa facilities."
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="h-4 w-4" />;
      case "parking": return <Car className="h-4 w-4" />;
      case "restaurant": return <Utensils className="h-4 w-4" />;
      case "gym": return <Dumbbell className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Premium Hotels
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Discover exceptional accommodations across the most desirable destinations
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-luxury text-luxury-foreground">
                    ${hotel.price}/night
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{hotel.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {hotel.location}
                  </CardDescription>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-luxury text-luxury" />
                      <span className="font-semibold">{hotel.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({hotel.reviews} reviews)
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {hotel.description}
                  </p>
                  
                  <div className="flex gap-3">
                    {hotel.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-muted"
                        title={amenity}
                      >
                        {getAmenityIcon(amenity)}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
