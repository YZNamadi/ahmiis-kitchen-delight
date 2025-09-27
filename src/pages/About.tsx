const About = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            About Ahmiis Kitchen
          </h1>
          <p className="text-xl font-body text-muted-foreground">
            Where tradition meets taste
          </p>
        </div>

          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Our Story
              </h2>
              <p className="font-body text-foreground leading-relaxed">
                At Ahmiis Kitchen, we believe food is more than nourishment – it's memory, culture, 
                and joy on a plate. Born out of a passion for authentic Nigerian flavors, we bring 
                freshly made pastries and catering delights that carry the warmth of home and the 
                richness of tradition.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Our Philosophy
              </h2>
              <p className="font-body text-foreground leading-relaxed">
                Ahmiis Kitchen started with a vision to share the rich, bold flavors of Nigerian 
                cuisine with the world. Driven by our commitment to authenticity and quality, 
                every dish is infused with tradition while embracing modern techniques. We're 
                committed to quality and creating memorable experiences with every bite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                  Quality Ingredients
                </h3>
                <p className="font-body text-foreground">
                  We source the finest ingredients to ensure every pastry and dish meets 
                  our high standards of taste and authenticity.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                  Traditional Recipes
                </h3>
                <p className="font-body text-foreground">
                  Our recipes are rooted in Nigerian culinary traditions, passed down 
                  and perfected to bring you authentic flavors.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                  Fresh Daily
                </h3>
                <p className="font-body text-foreground">
                  Everything is made fresh to order, ensuring you receive the highest 
                  quality pastries and dishes every time.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                  Personal Service
                </h3>
                <p className="font-body text-foreground">
                  We believe in personal connections and provide attentive service 
                  to make your experience special.
                </p>
              </div>
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg text-center border border-secondary/20">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Based in Huddersfield
              </h2>
              <p className="font-body text-foreground mb-4">
                Proudly serving the Huddersfield community and surrounding areas with 
                authentic Nigerian cuisine and exceptional catering services.
              </p>
              <div className="text-secondary font-body font-semibold">
                <p>📍 Huddersfield, United Kingdom</p>
                <p>📞 +44 7469 644339</p>
                <p>✉️ amiiskitchen88@gmail.com</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;