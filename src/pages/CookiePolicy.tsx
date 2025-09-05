import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and provide information to website owners about 
                how users interact with their sites.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies for several purposes to enhance your booking experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To remember your preferences and settings</li>
                <li>To keep you logged in during your session</li>
                <li>To remember items in your booking cart</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To provide personalized hotel recommendations</li>
                <li>To improve our website's functionality and performance</li>
                <li>To show you relevant advertisements</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation, access to secure areas, and booking functionality. The website cannot function 
                    properly without these cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies collect information about how visitors use our website, such as which pages are 
                    visited most often. This data helps us improve how our website works and optimize the user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies allow the website to remember choices you make (such as your user name, language, 
                    or region) and provide enhanced, more personal features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Targeting/Advertising Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are used to deliver advertisements more relevant to you and your interests. They 
                    may also be used to limit the number of times you see an advertisement and measure the effectiveness 
                    of advertising campaigns.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We work with third-party service providers who may place cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Google Analytics:</strong> To analyze website usage and performance</li>
                <li><strong>Payment Processors:</strong> To process secure transactions</li>
                <li><strong>Hotel Booking Partners:</strong> To provide real-time availability and pricing</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and login functionality</li>
                <li><strong>Advertising Networks:</strong> To display relevant advertisements</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Consent Banner:</strong> Use our cookie consent tool when you first visit our site</li>
                <li><strong>Opt-out Links:</strong> Many third-party services provide opt-out mechanisms</li>
                <li><strong>Private/Incognito Browsing:</strong> Use private browsing mode to prevent cookies from being stored</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that disabling certain cookies may limit your ability to use some features of our website, 
                such as booking hotels or accessing your account.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are stored for different periods depending on their purpose:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-24 months)</li>
                <li><strong>Analytics Cookies:</strong> Usually retained for 24 months</li>
                <li><strong>Advertising Cookies:</strong> Typically retained for 12 months</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any significant changes by posting 
                the updated policy on our website with a new "Last updated" date.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> privacy@hotelapp.com</p>
                <p><strong>Phone:</strong> 1-800-HOTELS-1</p>
                <p><strong>Address:</strong> 123 Hotel Street, Travel City, TC 12345</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default CookiePolicy;