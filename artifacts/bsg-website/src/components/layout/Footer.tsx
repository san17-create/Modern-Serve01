import { Link } from "wouter";
import { Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/bsg-logo.png`}
                alt="BSG Logo"
                className="h-12 w-12 object-contain hover:scale-105 transition-all duration-300"
              />
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Born to Serve Group
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                  Reg No. 2050
                </p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed text-sm">
              "One Passion, Rise of Great Nation"<br />
              A voluntary youth organization dedicated to the upliftment of society through education, guidance, and continuous service.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/funding" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Funding & Donations
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Join the Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a href="mailto:rajachowdari@gmail.com" className="hover:text-primary transition-colors break-all">
                  rajachowdari@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a href="mailto:borntoservebsbc@gmail.com" className="hover:text-primary transition-colors break-all">
                  borntoservebsbc@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Born to Serve Group. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-destructive fill-destructive" /> by Volunteers
          </p>
        </div>
      </div>
    </footer>
  );
}
