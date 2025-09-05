const Footer = () => {
  return (
    <footer className="bg-elegant text-elegant-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-luxury to-secondary bg-clip-text text-transparent">
              LuxStay
            </h3>
            <p className="text-elegant-foreground/80 mb-4 max-w-md">
              Discover extraordinary accommodations around the world. From luxury resorts to boutique hotels, 
              we help you find the perfect stay for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-elegant-foreground/60 hover:text-luxury transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-elegant-foreground/60 hover:text-luxury transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.295-.877-.804-1.384-1.884-1.384-3.089 0-1.205.507-2.285 1.384-3.089.878-.805 2.029-1.295 3.326-1.295 1.297 0 2.448.49 3.326 1.295.877.804 1.384 1.884 1.384 3.089 0 1.205-.507 2.285-1.384 3.089-.878.805-2.029 1.295-3.326 1.295zm7.718-9.23H14.71c-.118-.382-.431-.686-.813-.686s-.695.304-.813.686H11.63c-.434 0-.789.355-.789.789v1.578c0 .434.355.789.789.789h1.454c.118.382.431.686.813.686s.695-.304.813-.686h1.457c.434 0 .789-.355.789-.789v-1.578c0-.434-.355-.789-.789-.789z"/>
                </svg>
              </a>
              <a href="#" className="text-elegant-foreground/60 hover:text-luxury transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-elegant-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-elegant-foreground/80 hover:text-luxury transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-elegant-foreground/80 hover:text-luxury transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-elegant-foreground/80 hover:text-luxury transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-elegant-foreground/80 hover:text-luxury transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-elegant-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-elegant-foreground/80 hover:text-luxury transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-elegant-foreground/80 hover:text-luxury transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/booking-help" className="text-elegant-foreground/80 hover:text-luxury transition-colors duration-200">
                  Booking Help
                </a>
              </li>
              <li>
                <a href="/cancellation" className="text-elegant-foreground/80 hover:text-luxury transition-colors duration-200">
                  Cancellation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-elegant-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-elegant-foreground/60 text-sm">
            © 2024 LuxStay. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-elegant-foreground/60 hover:text-luxury transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="/privacy-policy" className="text-elegant-foreground/60 hover:text-luxury transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-elegant-foreground/60 hover:text-luxury transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;