'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Alert className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> Please read these terms carefully before using our services. 
            By using BookMyStay, you agree to be bound by these terms and conditions.
          </AlertDescription>
        </Alert>

        <Card className="backdrop-blur-sm bg-card/95 border-border/50">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Scale className="h-5 w-5" />
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using the BookMyStay website and mobile applications (collectively, the "Service"), 
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service. 
                  These terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BookMyStay operates as an online platform that connects travelers with accommodation providers. 
                  We facilitate bookings but do not own, operate, or control the hotels and accommodations listed on our platform.
                </p>
                <p>
                  Our service includes but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Hotel search and comparison tools</li>
                  <li>Online booking and reservation management</li>
                  <li>Customer support services</li>
                  <li>Travel-related information and reviews</li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>As a user of our Service, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information during registration and booking</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept all risks of unauthorized access to information and registration data</li>
                  <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                  <li>Not attempt to gain unauthorized access to our systems or networks</li>
                  <li>Not use the Service to transmit any harmful, offensive, or illegal content</li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Booking Terms and Conditions</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="font-medium text-foreground mb-2">4.1 Booking Process</h3>
                <p>
                  When you make a booking through our Service, you enter into a direct contractual relationship 
                  with the accommodation provider. We act as an intermediary to facilitate this transaction.
                </p>
                
                <h3 className="font-medium text-foreground mb-2">4.2 Payment</h3>
                <p>
                  Payment for bookings may be collected by us on behalf of the accommodation provider or 
                  directly by the provider. Payment terms vary by property and will be clearly indicated 
                  during the booking process.
                </p>
                
                <h3 className="font-medium text-foreground mb-2">4.3 Cancellation and Modifications</h3>
                <p>
                  Cancellation and modification policies are set by individual accommodation providers. 
                  These policies are displayed during booking and in your confirmation email. 
                  Changes to bookings are subject to availability and may incur fees.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Privacy and Data Protection</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is 
                  governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  By using our Service, you consent to the collection, use, and sharing of your information 
                  as described in our Privacy Policy.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> Please review our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    for detailed information about how we handle your data.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BookMyStay acts as an intermediary between you and accommodation providers. 
                  We are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>The quality, safety, or legality of accommodations listed</li>
                  <li>The truth or accuracy of listings, reviews, or other content</li>
                  <li>The performance or conduct of accommodation providers</li>
                  <li>Any personal injury, property damage, or other harm during your stay</li>
                  <li>Any disputes between you and accommodation providers</li>
                </ul>
                <p>
                  Our total liability for any claims arising from your use of the Service shall not exceed 
                  the total amount paid by you for the specific booking in question.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Service and its original content, features, and functionality are and will remain 
                  the exclusive property of BookMyStay and its licensors. The Service is protected by 
                  copyright, trademark, and other laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works, publicly display, 
                  or exploit any copyrighted material without our express written permission.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Prohibited Uses</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You may not use our Service:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may terminate or suspend your account and bar access to the Service immediately, 
                  without prior notice or liability, under our sole discretion, for any reason whatsoever 
                  including but not limited to a breach of the Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will cease immediately. 
                  If you wish to terminate your account, you may simply discontinue using the Service.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Dispute Resolution</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Any disputes arising from your use of the Service will be resolved through binding arbitration 
                  rather than in court, except that you may assert claims in small claims court if your claims qualify.
                </p>
                <p>
                  These Terms and any disputes will be governed by and construed in accordance with the laws 
                  of the jurisdiction in which BookMyStay is incorporated.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p>
                  Your continued use of the Service after any such changes constitutes your acceptance 
                  of the new Terms of Service.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@bookmystay.com</p>
                  <p><strong>Phone:</strong> 1-800-LEGAL-US</p>
                  <p><strong>Address:</strong> 123 Legal Street, Suite 200, City, State 12345</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </section>

            <Separator />

            <section className="text-center">
              <p className="text-sm text-muted-foreground">
                By using BookMyStay, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
              <div className="mt-4 flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/signup">Accept & Sign Up</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;