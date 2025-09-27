import { Layout } from '@/components/Layout';
import { MenuItem } from '@/components/MenuItem';
import { MenuItem as MenuItemType } from '@/store/cartStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Chops = () => {
  const chopsPackages: MenuItemType[] = [
    {
      id: 'fundamental-chops',
      name: 'Fundamental Package',
      price: 25,
      category: 'chops',
      description: '15pcs Puff Puff • 3 Meat Pies • 7 Beef Samosa • 7 Veg Spring Rolls • 5 Chicken Wings'
    },
    {
      id: 'deluxe-chops',
      name: 'Deluxe Package',
      price: 50,
      category: 'chops',
      description: '30pcs Puff Puff • 6 Meat Pies • 14 Beef Samosa • 14 Veg Spring Rolls • 10 Chicken Wings'
    },
    {
      id: 'premium-chops',
      name: 'Premium Package',
      price: 100,
      category: 'chops',
      description: '60pcs Puff Puff • 9 Meat Pies • 25 Beef Samosa • 25 Veg Spring Rolls • 10 Chicken Kebabs • 20 Chicken Wings'
    }
  ];

  const packageDetails = [
    {
      name: 'Fundamental',
      price: '£25',
      items: [
        '15pcs Puff Puff',
        '3 Meat Pies',
        '7 Beef Samosa',
        '7 Veg Spring Rolls',
        '5 Chicken Wings'
      ],
      ideal: 'Perfect for small gatherings or personal treats'
    },
    {
      name: 'Deluxe',
      price: '£50',
      items: [
        '30pcs Puff Puff',
        '6 Meat Pies',
        '14 Beef Samosa',
        '14 Veg Spring Rolls',
        '10 Chicken Wings'
      ],
      ideal: 'Great for medium-sized parties or office events'
    },
    {
      name: 'Premium',
      price: '£100',
      items: [
        '60pcs Puff Puff',
        '9 Meat Pies',
        '25 Beef Samosa',
        '25 Veg Spring Rolls',
        '10 Chicken Kebabs',
        '20 Chicken Wings'
      ],
      ideal: 'Perfect for large gatherings and celebrations'
    }
  ];

  return (
    <Layout>
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              Chops Menu
            </h1>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              Curated packages of our most popular Nigerian snacks and pastries. 
              Perfect for parties, events, or when you want to try a variety of our delicious offerings.
            </p>
          </div>

          {/* Quick Add Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {chopsPackages.map((pkg) => (
              <MenuItem key={pkg.id} item={pkg} showDescription />
            ))}
          </div>

          {/* Detailed Package Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              Package Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packageDetails.map((pkg, index) => (
                <Card key={index} className="h-full border-2 hover:border-secondary/50 transition-colors duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="font-heading text-2xl text-primary">
                      {pkg.name}
                    </CardTitle>
                    <CardDescription className="font-body text-2xl text-secondary font-bold">
                      {pkg.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-body font-semibold mb-2 text-primary">Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center font-body text-sm">
                            <span className="text-secondary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="font-body text-sm text-muted-foreground italic">
                        {pkg.ideal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What Makes Our Chops Special */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              What Makes Our Chops Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-4xl mb-4">🥟</div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Fresh Made</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Every item is freshly prepared to order
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-4xl mb-4">🌶️</div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Authentic Spices</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Traditional Nigerian seasoning and flavors
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Perfect Portions</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Carefully curated quantities for optimal variety
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Great Value</h3>
                <p className="font-body text-sm text-muted-foreground">
                  More variety and savings compared to individual items
                </p>
              </div>
            </div>
          </div>

          {/* Ordering Information */}
          <div className="bg-secondary/10 p-8 rounded-lg text-center border border-secondary/20">
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
              Chops Menu Ordering
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Booking Window</h4>
                <p className="text-muted-foreground">Monday - Wednesday</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Delivery Days</h4>
                <p className="text-muted-foreground">Thursday - Saturday</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Cut-off Time</h4>
                <p className="text-muted-foreground">Orders by Wednesday for Thu-Sat delivery</p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4">
              All chops packages are made fresh to order and perfect for sharing!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chops;