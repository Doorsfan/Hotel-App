import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-trust bg-clip-text text-transparent">
              LuxStay
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/hotels" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Hotels
            </Link>
            <Link 
              href="/destinations" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Destinations
            </Link>
            <Link 
              href="/deals" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Deals
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button variant="default" className="bg-gradient-to-r from-primary to-trust hover:from-primary-hover hover:to-primary shadow-soft" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;