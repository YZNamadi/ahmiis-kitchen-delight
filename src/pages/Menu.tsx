import { MenuItem } from '@/components/MenuItem';
import { MenuItem as MenuItemType } from '@/store/cartStore';

const Menu = () => {
  const pastries: MenuItemType[] = [
    { id: 'chicken-pie', name: 'Chicken Pie', price: 2, category: 'pastries', description: 'Flaky pastry filled with seasoned chicken', imageUrl: '/images/chicken-pie.jpg', imageAlt: 'Chicken pie with flaky crust' },
    { id: 'meat-pie', name: 'Meat Pie', price: 2, category: 'pastries', description: 'Classic Nigerian meat pie with beef filling', imageUrl: '/images/meat-pie.jpg', imageAlt: 'Golden empanada on plate' },
    { id: 'fish-pie', name: 'Fish Pie', price: 2, category: 'pastries', description: 'Fresh fish in golden pastry crust', imageUrl: '/images/fish-pie.jpg', imageAlt: 'Fish pie with golden crust' },
    { id: 'beef-suya-pie', name: 'Beef Suya Pie', price: 3, category: 'pastries', description: 'Spicy suya-flavored beef pie', imageUrl: '/images/beef-suya-pie.jpg', imageAlt: 'Suya-spiced beef hand pie' },
    { id: 'double-delight-pie', name: 'Double Delight Pie', price: 3.2, category: 'pastries', description: 'Two delicious fillings in one pie', imageUrl: '/images/double-delight-pie.jpg', imageAlt: 'Two-flavor Nigerian hand pie' },
    { id: 'puff-puff', name: 'Puff Puff', price: 0.5, category: 'pastries', description: 'Sweet Nigerian doughnuts', imageUrl: '/images/puff-puff.jpg', imageAlt: 'Puff-puff doughnut balls' },
    { id: 'samosa', name: 'Samosa', price: 1.5, category: 'pastries', description: 'Crispy triangular pastries with savory filling', imageUrl: 'https://images.pexels.com/photos/14883757/pexels-photo-14883757.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80', imageAlt: 'Crispy samosas' },
    { id: 'spring-rolls', name: 'Spring Rolls', price: 1.5, category: 'pastries', description: 'Crispy vegetable spring rolls', imageUrl: 'https://images.pexels.com/photos/3569706/pexels-photo-3569706.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80', imageAlt: 'Golden spring rolls' },
    { id: 'sausages', name: 'Sausages', price: 2, category: 'pastries', description: 'Seasoned Nigerian-style sausages', imageUrl: '/images/sausages.jpg', imageAlt: 'Nigerian-style sausages' },
    { id: 'banana-bread', name: 'Banana Bread', price: 15, category: 'pastries', description: 'Moist and flavorful banana bread loaf', imageUrl: 'https://images.pexels.com/photos/5419302/pexels-photo-5419302.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80', imageAlt: 'Banana bread loaf' },
    { id: 'sausage-bread-rolls', name: 'Sausage Bread Rolls', price: 3, category: 'pastries', description: 'Soft bread rolls with sausage filling', imageUrl: '/images/sausage-bread-rolls.jpg', imageAlt: 'Nigerian sausage bread rolls' },
    { id: 'nigerian-loaf-cakes', name: 'Nigerian Loaf Cakes', price: 16, category: 'pastries', description: 'Traditional Nigerian cake loaf', imageUrl: '/images/nigerian-loaf-cakes.jpg', imageAlt: 'Nigerian-style loaf cakes selection' },
    { id: 'prawn-roll', name: 'Prawn Roll', price: 2, category: 'pastries', description: 'Delicious prawn-filled pastry roll', imageUrl: '/images/prawn-roll.jpg', imageAlt: 'Golden prawn roll pastry' },
  ];

  const proteins: MenuItemType[] = [
    { id: 'chicken-wings', name: 'Chicken Wings', price: 10, category: 'proteins', description: 'Perfectly spiced grilled chicken wings', imageUrl: 'https://images.pexels.com/photos/32067295/pexels-photo-32067295.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80', imageAlt: 'Grilled chicken wings' },
    { id: 'peppered-beef', name: 'Peppered Beef', price: 15, category: 'proteins', description: 'Spicy peppered beef strips', imageUrl: '/images/peppered-beef.jpg', imageAlt: 'Peppered beef with bell peppers' },
    { id: 'gizdodo', name: 'Gizdodo', price: 24, category: 'proteins', description: 'Gizzard and plantain in peppered sauce', imageUrl: '/images/gizdodo.jpg', imageAlt: 'Gizdodo (gizzard & plantain stir-fry)' },
    { id: 'peppered-ponmo', name: 'Peppered Ponmo', price: 15, category: 'proteins', description: 'Spicy cow skin delicacy', imageUrl: '/images/peppered-ponmo.jpg', imageAlt: 'Peppered cow skin (ponmo)' },
    { id: 'isi-ewu', name: 'Isi Ewu', price: 25, category: 'proteins', description: 'Traditional goat head delicacy', imageUrl: '/images/isi-ewu.jpg', imageAlt: 'Isi Ewu (goat head in spicy sauce)' },
    { id: 'nkwobi', name: 'Nkwobi', price: 20, category: 'proteins', description: 'Spiced cow foot delicacy', imageUrl: '/images/nkwobi.jpg', imageAlt: 'Nkwobi (spicy cow foot)' },
  ];

  const cravings: MenuItemType[] = [
    { id: 'shawarma', name: 'Shawarma', price: 10, category: 'cravings', description: 'Delicious wrapped shawarma with fresh ingredients', imageUrl: '/images/shawarma.jpg', imageAlt: 'Finished shawarma wrap' },
    { id: 'peppered-beef-craving', name: 'Peppered Beef', price: 25, category: 'cravings', description: 'Large portion of spicy peppered beef', imageUrl: '/images/peppered-beef.jpg', imageAlt: 'Large peppered beef stir-fry' },
    { id: 'barbecue-fish', name: 'Barbecue Fish', price: 25, category: 'cravings', description: 'Grilled fish with barbecue seasoning', imageUrl: '/images/barbecue-fish.jpg', imageAlt: 'Whole grilled fish with vegetables' },
    { id: 'peppered-gizzard', name: 'Peppered Gizzard', price: 15, category: 'cravings', description: 'Spicy gizzard in pepper sauce', imageUrl: '/images/peppered-gizzard.jpg', imageAlt: 'Spicy chicken dish' },
    { id: 'peppered-snail', name: 'Peppered Snail', price: 20, category: 'cravings', description: 'Tender snail in spicy pepper sauce', imageUrl: '/images/peppered-snail.jpg', imageAlt: 'Peppered snail in spicy sauce' },
  ];

  return (
    <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              Our Menu
            </h1>
            <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
              Authentic Nigerian pastries and proteins made fresh with traditional recipes
            </p>
          </div>

          {/* Pastries Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              Pastries & Snacks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pastries.map((item) => (
                <MenuItem key={item.id} item={item} showDescription />
              ))}
            </div>
          </section>

          {/* Proteins Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              Proteins
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proteins.map((item) => (
                <MenuItem key={item.id} item={item} showDescription />
              ))}
            </div>
          </section>

          {/* Cravings Section */}
          <section>
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">
              Cravings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cravings.map((item) => (
                <MenuItem key={item.id} item={item} showDescription />
              ))}
            </div>
          </section>

          {/* Ordering Info */}
          <div className="mt-16 bg-secondary/10 p-8 rounded-lg text-center border border-secondary/20">
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
              Ordering Information
            </h3>
            <p className="font-body text-foreground mb-4">
              <strong>Booking Window:</strong> Monday - Wednesday<br/>
              <strong>Delivery Days:</strong> Thursday - Saturday<br/>
              <strong>Cut-off:</strong> Orders placed by Wednesday served Thursday-Saturday
            </p>
            <p className="font-body text-muted-foreground text-sm">
              All items are made fresh to order. Contact us via WhatsApp for any special requests.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;