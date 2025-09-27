import { MenuItem } from '@/components/MenuItem';
import { MenuItem as MenuItemType } from '@/store/cartStore';

const Drinks = () => {
  const cocktails: MenuItemType[] = [
    { id: 'long-island', name: 'Long Island', price: 8, category: 'cocktails', description: 'Classic Long Island Iced Tea with premium spirits' },
    { id: 'mojito', name: 'Mojito', price: 7, category: 'cocktails', description: 'Fresh mint mojito with white rum and lime' },
    { id: 'classic-martini', name: 'Classic Martini', price: 9, category: 'cocktails', description: 'Elegant gin or vodka martini, dry or dirty' },
    { id: 'passion-fruit', name: 'Passion Fruit', price: 7.5, category: 'cocktails', description: 'Tropical passion fruit cocktail with vodka' },
    { id: 'daiquiri', name: 'Daiquiri', price: 7, category: 'cocktails', description: 'Classic rum daiquiri with fresh lime juice' },
    { id: 'tequila-sunrise', name: 'Tequila Sunrise', price: 7.5, category: 'cocktails', description: 'Beautiful layered tequila cocktail with grenadine' },
    { id: 'champagne', name: 'Champagne', price: 12, category: 'cocktails', description: 'Premium champagne selection' },
    { id: 'holiday', name: 'Holiday', price: 8.5, category: 'cocktails', description: 'Special seasonal holiday cocktail' },
    { id: 'whiskey-sour', name: 'Whiskey Sour', price: 8, category: 'cocktails', description: 'Classic whiskey sour with fresh lemon and egg white' },
  ];

  const mocktails: MenuItemType[] = [
    { id: 'blue-pina-colada', name: 'Blue Pina Colada', price: 5.5, category: 'mocktails', description: 'Tropical blue coconut and pineapple blend' },
    { id: 'bubble-signature', name: 'Bubble Signature', price: 6, category: 'mocktails', description: 'House special bubble drink with fresh fruits' },
    { id: 'kiwi-fizz', name: 'Kiwi Fizz', price: 5, category: 'mocktails', description: 'Refreshing kiwi and sparkling water cocktail' },
    { id: 'wavy', name: 'Wavy', price: 5.5, category: 'mocktails', description: 'Layered fruit mocktail with tropical flavors' },
    { id: 'cinnamon-mimosa', name: 'Cinnamon Mimosa', price: 6, category: 'mocktails', description: 'Sparkling apple cider with cinnamon and orange' },
    { id: 'mimosa', name: 'Mimosa', price: 5, category: 'mocktails', description: 'Classic sparkling orange juice mocktail' },
    { id: 'whipped-cream-mimosa', name: 'Whipped Cream Mimosa', price: 6.5, category: 'mocktails', description: 'Indulgent mimosa topped with fresh whipped cream' },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              Drinks Menu
            </h1>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              Complement your meal with our carefully crafted cocktails and refreshing mocktails. 
              Perfect beverages to enhance your Nigerian dining experience.
            </p>
          </div>

          {/* Cocktails Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                Premium Cocktails
              </h2>
              <p className="font-body text-muted-foreground">
                Expertly mixed with premium spirits and fresh ingredients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cocktails.map((item) => (
                <MenuItem key={item.id} item={item} showDescription />
              ))}
            </div>
          </section>

          {/* Mocktails Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                Refreshing Mocktails
              </h2>
              <p className="font-body text-muted-foreground">
                Non-alcoholic beverages bursting with flavor and creativity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mocktails.map((item) => (
                <MenuItem key={item.id} item={item} showDescription />
              ))}
            </div>
          </section>

          {/* Drink Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              Why Choose Our Drinks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-4xl mb-4">🍹</div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Fresh Ingredients</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Made with fresh fruits and premium mixers
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-4xl mb-4">🥃</div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Premium Spirits</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Top-shelf liquors and quality ingredients
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Expert Mixing</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Professionally crafted by skilled mixologists
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-heading font-semibold mb-2 text-primary">Creative Presentation</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Beautiful garnishes and artistic presentation
                </p>
              </div>
            </div>
          </section>

          {/* Perfect Pairings */}
          <section className="bg-secondary/10 p-8 rounded-lg border border-secondary/20">
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary text-center">
              Perfect Drink Pairings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary">With Spicy Foods</h3>
                <p className="text-sm text-muted-foreground">
                  Try our Kiwi Fizz or Mojito to cool down the heat from peppered dishes
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary">With Pastries</h3>
                <p className="text-sm text-muted-foreground">
                  Classic Mimosa or Champagne complement our meat pies perfectly
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary">For Celebrations</h3>
                <p className="text-sm text-muted-foreground">
                  Holiday cocktail or Champagne for special occasions and events
                </p>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default Drinks;