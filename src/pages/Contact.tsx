import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              Contact Us
            </h1>
            <p className="text-xl font-body text-muted-foreground">
              Get in touch with us for orders, catering inquiries, or any questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  Get In Touch
                </CardTitle>
                <CardDescription className="font-body">
                  We'd love to hear from you. Here's how you can reach us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-primary">WhatsApp</h3>
                    <p className="font-body text-muted-foreground">+44 7469 644339</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Preferred method for orders
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-primary">Phone</h3>
                    <p className="font-body text-muted-foreground">+44 7469 644339</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Call for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-primary">Email</h3>
                    <p className="font-body text-muted-foreground">amiiskitchen88@gmail.com</p>
                    <p className="font-body text-sm text-muted-foreground">
                      For general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-primary">Location</h3>
                    <p className="font-body text-muted-foreground">Huddersfield, United Kingdom</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Serving Huddersfield and surrounding areas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours & Ordering */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  Business Hours
                </CardTitle>
                <CardDescription className="font-body">
                  Our ordering schedule and availability
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-body font-semibold mb-3 text-primary">Main Menu Orders</h3>
                  <div className="space-y-2 font-body text-sm">
                    <div className="flex justify-between">
                      <span>Booking Window:</span>
                      <span className="text-secondary font-semibold">Mon - Wed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Days:</span>
                      <span className="text-secondary font-semibold">Thu - Sat</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cut-off:</span>
                      <span className="text-secondary font-semibold">Wednesday</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-body font-semibold mb-3 text-primary">Chops Menu</h3>
                  <div className="space-y-2 font-body text-sm">
                    <div className="flex justify-between">
                      <span>Booking Window:</span>
                      <span className="text-secondary font-semibold">Mon - Wed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Days:</span>
                      <span className="text-secondary font-semibold">Thu - Sat</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-body font-semibold mb-3 text-primary">Catering Services</h3>
                  <div className="space-y-2 font-body text-sm">
                    <div className="flex justify-between">
                      <span>Booking:</span>
                      <span className="text-secondary font-semibold">Anytime</span>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Advanced booking recommended for events
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-body text-sm text-muted-foreground">
                    <strong>Note:</strong> All orders are processed via WhatsApp for personalized service and quick communication.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media & Quick Actions */}
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-primary">
                Follow Us
              </h2>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://instagram.com/ahmiis_kitchenuk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 font-body text-primary hover:text-secondary transition-colors"
                >
                  <span className="text-2xl">📷</span>
                  <span>@ahmiis_kitchenuk</span>
                </a>
                <a 
                  href="https://tiktok.com/@ahmiis_kitchenuk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 font-body text-primary hover:text-secondary transition-colors"
                >
                  <span className="text-2xl">🎵</span>
                  <span>@ahmiis_kitchenuk</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold"
              >
                <a href="https://wa.me/447469644339?text=Hello! I'd like to place an order." target="_blank" rel="noopener noreferrer">
                  Order via WhatsApp
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-body"
              >
                <a href="mailto:amiiskitchen88@gmail.com">
                  Send Email
                </a>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;