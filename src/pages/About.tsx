import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, MapPin, Users, Award, Star, Heart, ArrowLeft } from "lucide-react";


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-foreground">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Hotel className="h-8 w-8 text-luxury" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-luxury bg-clip-text text-transparent">
              LuxeStay
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-luxury bg-clip-text text-transparent">
            About LuxeStay
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2018, we've been dedicated to connecting travelers with extraordinary accommodations 
            and creating unforgettable experiences around the globe.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded by a team of passionate travelers, LuxeStay was born from the belief that every 
                journey deserves exceptional accommodation. We started with a simple mission: to make 
                luxury travel accessible and unforgettable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we partner with over 10,000 premium hotels worldwide, from boutique hideaways 
                to grand luxury resorts, ensuring every stay exceeds expectations.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-primary/5 to-luxury/5 border-luxury/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-luxury mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">Partner Hotels</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-luxury mb-2">500K+</div>
                    <div className="text-sm text-muted-foreground">Happy Guests</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-luxury mb-2">180+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-luxury mb-2">4.9</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-luxury/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-luxury" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We curate only the finest accommodations, ensuring every property meets our 
                  rigorous standards for luxury and comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Passion</h3>
                <p className="text-muted-foreground">
                  Our love for travel drives everything we do. We're not just booking agents - 
                  we're fellow adventurers creating magical experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Community</h3>
                <p className="text-muted-foreground">
                  We believe in building lasting relationships with our guests and hotel partners, 
                  creating a global community of luxury travel enthusiasts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the LuxeStay community and discover a world of extraordinary accommodations 
            waiting to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                Start Exploring
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;