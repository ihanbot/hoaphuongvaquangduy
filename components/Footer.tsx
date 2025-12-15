import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sage text-white py-16 px-6 text-center">
      <SectionWrapper>
        <h2 className="font-serif text-5xl mb-6">Thank You</h2>
        <p className="text-white/80 font-light mb-10 max-w-xs mx-auto">
          Một ngày trọng đại sẽ không trọn vẹn nếu thiếu sự hiện diện của bạn.
        </p>
        
        <div className="border-t border-white/20 pt-8 max-w-xs mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.2em] opacity-70 mb-2">Liên hệ hỗ trợ</p>
          <p className="text-xl font-medium mb-4">Ms Hân</p>
          <a 
            href="tel:0896108138" 
            className="inline-flex items-center gap-2 px-6 py-2 border border-white/40 text-sm hover:bg-white hover:text-sage transition-all rounded-full"
          >
            <Phone size={14} />
            0896 108 138
          </a>
        </div>

        <p className="font-serif italic text-lg opacity-60">
          Hoa Phượng & Quang Duy
        </p>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;