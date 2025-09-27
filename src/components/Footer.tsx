import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-4">Ahmiis Kitchen</h2>
            <p className="font-body text-primary-foreground/80 mb-4">
              Where tradition meets taste.
            </p>
            <p className="font-body text-primary-foreground/80 text-sm">
              Bringing authentic Nigerian flavors to Huddersfield with premium pastries and catering services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block font-body text-primary-foreground/80 hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link to="/menu" className="block font-body text-primary-foreground/80 hover:text-secondary transition-colors">
                Menu
              </Link>
              <Link to="/catering" className="block font-body text-primary-foreground/80 hover:text-secondary transition-colors">
                Catering
              </Link>
              <Link to="/chops" className="block font-body text-primary-foreground/80 hover:text-secondary transition-colors">
                Chops Menu
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-2 font-body text-primary-foreground/80">
              <p>Huddersfield, United Kingdom</p>
              <p>+44 7469 644339</p>
              <p>amiiskitchen88@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://instagram.com/ahmiis_kitchenuk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://tiktok.com/@ahmiis_kitchenuk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-body text-primary-foreground/60 text-sm">
            © 2024 Ahmiis Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};