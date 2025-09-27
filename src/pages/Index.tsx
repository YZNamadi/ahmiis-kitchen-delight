import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Ahmiis Kitchen
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 max-w-2xl mx-auto">
            Where tradition meets taste. Authentic Nigerian pastries and catering, 
            blending tradition with modern flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold px-8 py-3"
            >
              <Link to="/menu">Explore Menu</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-body font-semibold px-8 py-3"
            >
              <Link to="/catering">Catering Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary">
              About Our Kitchen
            </h2>
            <p className="text-lg font-body text-foreground mb-8 leading-relaxed">
              At Ahmiis Kitchen, we believe food is more than nourishment – it's memory, culture, 
              and joy on a plate. Born out of a passion for authentic Nigerian flavors, we bring 
              freshly made pastries and catering delights that carry the warmth of home and the 
              richness of tradition.
            </p>
            <Button asChild variant="outline" size="lg" className="font-body">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Popular Items
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Taste the authentic flavors of Nigeria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary">Meat Pie</h3>
              <p className="font-body text-muted-foreground mb-2">£2.00</p>
              <p className="font-body text-sm">Flaky pastry filled with seasoned meat and vegetables</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary">Puff Puff</h3>
              <p className="font-body text-muted-foreground mb-2">£0.50</p>
              <p className="font-body text-sm">Sweet golden dough balls, perfect for any occasion</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary">Chicken Wings</h3>
              <p className="font-body text-muted-foreground mb-2">£10.00</p>
              <p className="font-body text-sm">Perfectly spiced and grilled to perfection</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-body">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ordering Info */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Easy Ordering
          </h2>
          <p className="text-lg font-body mb-8 max-w-2xl mx-auto">
            Order Monday-Wednesday for delivery Thursday-Saturday. 
            All orders processed via WhatsApp for quick and personal service.
          </p>
          <Button 
            asChild 
            variant="secondary" 
            size="lg" 
            className="font-body font-semibold"
          >
            <a href="https://wa.me/447469644339" target="_blank" rel="noopener noreferrer">
              Contact via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
