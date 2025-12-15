import React from 'react';
import SectionWrapper from './SectionWrapper';
import { MapPin } from 'lucide-react';

const Venue: React.FC = () => {
  return (
    <section className="bg-sand py-12 px-6">
      <SectionWrapper>
        <div className="text-center mb-8 relative">
          <h3 className="font-serif text-3xl text-sage uppercase tracking-wide">Lễ Cưới & Tiệc</h3>
          <div className="w-10 h-[1px] bg-gold mx-auto mt-4"></div>
        </div>

        <div className="bg-white p-2 rounded-xl shadow-card mb-8 rotate-1">
          <div className="overflow-hidden rounded-lg aspect-[4/3]">
            <img 
              src="venue.jpg" 
              alt="Aloha Beach Club" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-sage font-bold">Địa điểm</span>
          </div>
          
          <h2 className="font-serif text-3xl text-sage mb-2">Aloha Beach Club</h2>
          <p className="text-gray-600 mb-8 font-light">Novaworld Phan Thiết</p>

          <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto relative">
             {/* Divider Line */}
            <div className="absolute top-1/2 left-1/2 w-[1px] h-full bg-gray-200 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="text-center">
              <span className="block text-xs uppercase tracking-widest text-gold mb-2 font-bold">Lễ Cưới</span>
              <div className="font-serif text-3xl text-dark">16:00</div>
            </div>
            <div className="text-center">
              <span className="block text-xs uppercase tracking-widest text-gold mb-2 font-bold">Tiệc Cưới</span>
              <div className="font-serif text-3xl text-dark">17:30</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Venue;