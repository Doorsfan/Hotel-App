import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Calendar, MapPin, Users, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Cancellation = () => {
  const [step, setStep] = useState<'lookup' | 'details' | 'cancelled'>('lookup');
  const [isLoading, setIsLoading] = useState(false);
  const [reservation, setReservation] = useState<any>(null);
  const { toast } = useToast();

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Mock reservation data
      setReservation({
        confirmationNumber: 'BMS-2024-001234',
        hotelName: 'Grand Plaza Hotel',
        location: 'New York, NY',
        checkIn: '2024-03-15',
        checkOut: '2024-03-18',
        guests: 2,
        roomType: 'Deluxe King Room',
        totalAmount: 459.97,
        cancellationDeadline: '2024-03-14',
        refundAmount: 459.97
      });
      setStep('details');
    }, 1000);
  };

  const handleCancellation = async () => {
    setIsLoading(true);
    
    // Simulate cancellation process
    setTimeout(() => {
      setIsLoading(false);
      setStep('cancelled');
      toast({
        title: "Reservation cancelled successfully",
        description: "A confirmation email has been sent to you.",
      });
    }, 1500);
  };

  if (step === 'cancelled') {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="mb-6">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <Card className="backdrop-blur-sm bg-card/95 border-border/50 text-center">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-2">Cancellation Confirmed</h1>
              <p className="text-muted-foreground mb-6">
                Your reservation has been successfully cancelled.
              </p>
              
              <div className="bg-muted/50 p-4 rounded-lg mb-6 text-left">
                <h3 className="font-semibold mb-2">Cancellation Details:</h3>
                <p className="text-sm">Confirmation: {reservation?.confirmationNumber}</p>
                <p className="text-sm">Refund Amount: ${reservation?.refundAmount}</p>
                <p className="text-sm">Processing Time: 3-5 business days</p>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link to="/hotels">Book Another Stay</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/">Return to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Cancel Reservation</h1>
          <p className="text-muted-foreground">Manage your existing hotel bookings</p>
        </div>

        {step === 'lookup' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lookup Form */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-sm bg-card/95 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Find Your Reservation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLookup} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="confirmationNumber">Confirmation Number</Label>
                      <Input 
                        id="confirmationNumber" 
                        placeholder="BMS-2024-001234" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Searching..." : "Find Reservation"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Cancellation Policy */}
            <div>
              <Card className="backdrop-blur-sm bg-card/95 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Cancellation Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-600 mb-1">Free Cancellation</h4>
                    <p className="text-muted-foreground">Cancel up to 24 hours before check-in for a full refund</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-1">Late Cancellation</h4>
                    <p className="text-muted-foreground">Within 24 hours: 50% refund</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-red-600 mb-1">No-Show</h4>
                    <p className="text-muted-foreground">No refund for no-shows</p>
                  </div>

                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-1">Refund Timeline</h4>
                    <p className="text-muted-foreground">Refunds are processed within 3-5 business days</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {step === 'details' && reservation && (
          <div className="space-y-6">
            {/* Reservation Details */}
            <Card className="backdrop-blur-sm bg-card/95 border-border/50">
              <CardHeader>
                <CardTitle>Reservation Details</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {reservation.confirmationNumber}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">{reservation.hotelName}</h3>
                        <p className="text-sm text-muted-foreground">{reservation.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Check-in: {reservation.checkIn}</p>
                        <p className="text-sm text-muted-foreground">Check-out: {reservation.checkOut}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{reservation.guests} Guests</p>
                        <p className="text-sm text-muted-foreground">{reservation.roomType}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Total: ${reservation.totalAmount}</p>
                        <p className="text-sm text-muted-foreground">Refund: ${reservation.refundAmount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Warning */}
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Cancelling this reservation will result in a full refund of ${reservation.refundAmount}. 
                This action cannot be undone. The refund will be processed to your original payment method within 3-5 business days.
              </AlertDescription>
            </Alert>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => setStep('lookup')}>
                Go Back
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleCancellation}
                disabled={isLoading}
              >
                {isLoading ? "Cancelling..." : "Cancel Reservation"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cancellation;