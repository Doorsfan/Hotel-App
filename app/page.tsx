import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hotel } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-luxury/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Hotel className="h-12 w-12 text-luxury" />
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-luxury bg-clip-text text-transparent">
            LuxeStay
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Discover Your Perfect Stay
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of travelers who trust LuxeStay to find extraordinary hotels and create unforgettable memories around the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Link href="/destinations">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
              Explore Destinations
            </Button>
          </Link>
          <Link href="/hotels">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
              View Hotels
            </Button>
          </Link>
          <Link href="/deals">
            <Button variant="destructive" size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
              View Deals
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
              Create Account
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
              Sign In
            </Button>
          </Link>
        </div>
        
        <div className="text-center">
          <Link href="/about" className="text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline">
            Learn more about LuxeStay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;