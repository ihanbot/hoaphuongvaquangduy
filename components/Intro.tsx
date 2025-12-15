import React from 'react';
import SectionWrapper from './SectionWrapper';

const Intro: React.FC = () => {
  return (
    <section className="bg-paper py-16 px-8 text-center relative">
       {/* Paper Edge Visual Trick */}
       <div className="absolute top-0 left-0 w-full h-16 -mt-8 bg-gradient-to-t from-paper to-transparent opacity-100" />
       
      <SectionWrapper>
        <h2 className="font-serif italic text-4xl text-sage mb-6">Wedding Day</h2>
        
        <div className="bg-[#fdfbf7] p-8 border-l-2 border-gold my-8 mx-auto max-w-sm">
          <p className="font-serif italic text-dark/80 text-lg leading-relaxed">
            "Trở thành khoảnh khắc chúng ta ghi nhớ.<br />
            Chúng tôi trân trọng mời bạn đến chung vui và chứng kiến khoảnh khắc hai chúng tôi chính thức về chung một hành trình."
          </p>
        </div>

        <div className="space-y-4 font-sans font-light text-dark">
          <p className="uppercase tracking-widest text-xs text-sage">Trân trọng kính mời</p>
          <p className="font-medium text-xl">Gia đình và bạn bè thân yêu</p>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            Sự hiện diện của bạn là niềm vinh hạnh lớn trong ngày trọng đại của chúng tôi.
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Intro;