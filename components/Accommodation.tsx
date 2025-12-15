import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Home } from 'lucide-react';

const Accommodation: React.FC = () => {
  return (
    <section className="bg-sand py-16 px-6">
      <SectionWrapper>
        {/* Accommodation Card */}
        <div className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 text-center mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-sage"></div>
            <div className="flex justify-center mb-4 text-gold">
                <Home className="w-6 h-6" />
            </div>
          <h3 className="font-serif text-2xl text-sage mb-4">Lưu Trú</h3>
          <p className="font-bold text-lg text-sage mb-2">Villa LFP</p>
          <p className="text-gray-600 font-light">Khu Biệt thự Florida<br />Novaworld Phan Thiết</p>
        </div>

        {/* Notes */}
        <div>
          <h4 className="text-center font-sans text-xs uppercase tracking-[0.2em] mb-8 text-gray-500">Lưu Ý Nhỏ</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <NoteItem icon="👗" text="Trang phục thoải mái" />
            <NoteItem icon="👡" text="Ưu tiên giày thấp/sandal" />
            <NoteItem icon="❌" text="Không yêu cầu Dress Code" />
            <NoteItem icon="🛺" text="Xe điện: 08:00 - 18:00" />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

const NoteItem = ({ icon, text }: { icon: string, text: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center justify-center gap-2 border border-transparent hover:border-gold/30 transition-colors">
    <span className="text-2xl">{icon}</span>
    <span className="text-xs font-medium text-gray-600">{text}</span>
  </div>
);

export default Accommodation;