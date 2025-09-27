import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Catering = () => {
  const cateringPackages = [
    {
      name: 'Basic Package',
      description: '7 options (from £350, 10 guests)',
      features: [
        'Selection of 7 menu items',
        'Minimum 10 guests',
        'Basic presentation',
        'Standard delivery'
      ]
    },
    {
      name: 'Deluxe Package',
      description: '11 options (from £485, 10 guests)',
      features: [
        'Selection of 11 menu items',
        'Minimum 10 guests', 
        'Enhanced presentation',
        'Priority delivery',
        'Serving utensils included'
      ]
    },
    {
      name: 'Premium Package',
      description: '15 options (from £625, 10 guests)',
      features: [
        'Selection of 15 menu items',
        'Minimum 10 guests',
        'Premium presentation',
        'White-glove delivery',
        'Complete serving setup',
        'Decorative plating',
        'Personal consultation'
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              Catering Services
            </h1>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              Make your events memorable with authentic Nigerian cuisine. From intimate gatherings 
              to large celebrations, we bring the taste of tradition to your special occasions.
            </p>
          </div>

          {/* Catering Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cateringPackages.map((pkg, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl text-primary">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="font-body text-lg text-secondary font-semibold">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-body">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-secondary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-secondary">1</span>
                </div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Contact Us</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Reach out via WhatsApp with your event details
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-secondary">2</span>
                </div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Plan Menu</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Choose your package and customize your menu
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-secondary">3</span>
                </div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Confirm Order</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Finalize details and secure your booking
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-secondary">4</span>
                </div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Enjoy</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Fresh delivery and exceptional service
                </p>
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              Perfect for Any Event
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Birthday Parties',
                'Corporate Events',
                'Weddings',
                'Family Gatherings',
                'Cultural Events',
                'Office Meetings',
                'Graduation Parties',
                'Holiday Celebrations'
              ].map((event) => (
                <div key={event} className="bg-secondary/10 p-4 rounded-lg text-center border border-secondary/20">
                  <span className="font-body font-medium text-primary">{event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Info */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Book Your Event?
            </h2>
            <p className="font-body text-lg mb-6 max-w-2xl mx-auto">
              Catering orders can be placed anytime. Contact us via WhatsApp with your event 
              details and preferred menu for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="secondary" 
                size="lg" 
                className="font-body font-semibold"
              >
                <a href="https://wa.me/447469644339?text=Hello! I'm interested in catering services for my event." target="_blank" rel="noopener noreferrer">
                  Get Quote via WhatsApp
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-body"
              >
                <a href="tel:+447469644339">
                  Call Us: +44 7469 644339
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catering;