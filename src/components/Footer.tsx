import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">DJOCO</h3>
            <p className="text-gray-300 mb-4">
              Votre snack préféré à Ouarzazate. Nous servons les meilleurs plats avec des ingrédients frais et de qualité.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock size={20} className="text-orange-500" />
              <div>
                <p>Lun - Sam: 11h00 - 23h00</p>
                <p>Dim: 12h00 - 22h00</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+212611114639" className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors">
                <Phone size={20} />
                <span>+212 611 11 4639</span>
              </a>
              <a href="mailto:contact@djoco.com" className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors">
                <Mail size={20} />
                <span>contact@djoco.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} />
                <span>Av. Al-Maghreb Al-Arabi, Ouarzazate 45000</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Notre Location</h3>
            <div className="h-48 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                title="DJOCO Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.7728304893353!2d-6.916111684885696!3d30.919737681576675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU1JzExLjEiTiA2wrA1NCc1OC4wIlc!5e0!3m2!1sen!2sma!4v1600000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} @Abdellm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;