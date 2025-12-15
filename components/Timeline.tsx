import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Clock } from 'lucide-react';

const TimelineItem = ({ time, title, isHighlight = false }: { time: string, title: string, isHighlight?: boolean }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    {/* Dot */}
    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${isHighlight ? 'bg-sage border-sage' : 'bg-white border-gold'} z-10 -translate-x-[9px]`}></div>
    
    <div className={`${isHighlight ? 'text-sage' : 'text-gray-400'} font-bold text-sm mb-1 font-sans`}>
      {time}
    </div>
    <div className={`font-serif text-xl ${isHighlight ? 'text-sage font-semibold' : 'text-dark'}`}>
      {title}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <SectionWrapper>
        <div className="text-center mb-8">
          <h3 className="font-serif text-3xl text-sage uppercase tracking-wide">Chương Trình</h3>
          <div className="w-10 h-[1px] bg-gold mx-auto mt-4 mb-6"></div>
          
          <div className="bg-sand/50 p-4 rounded-lg inline-block text-sm text-gray-600 leading-relaxed max-w-xs">
            <span className="font-bold block mb-1 text-sage">Điểm tập trung</span>
            96 Võ Thành Trang, P. Bảy Hiền,<br/>TP. Hồ Chí Minh
            <div className="mt-2 text-xs text-gray-400 flex items-center justify-center gap-1">
                <Clock size={12} />
                <span>Xuất phát: 7:30 Sáng</span>
            </div>
          </div>
        </div>

        <div className="max-w-sm mx-auto">
          {/* Day 1 */}
          <div className="relative border-l border-gold/30 ml-2">
            <div className="bg-sage text-white text-xs font-bold uppercase tracking-widest py-1 px-4 inline-block mb-8 -ml-6 shadow-sm rounded-r-md">
              Ngày 31/12/2025
            </div>

            <TimelineItem time="08:00" title="Xuất phát đi Phan Thiết" />
            <TimelineItem time="12:00" title="Tập trung tại Phan Thiết" />
            <TimelineItem time="12:30" title="Ăn trưa" />
            <TimelineItem time="14:00" title="Nhận phòng & Nghỉ ngơi" />
            <TimelineItem time="15:30" title="Đón khách" />
            <TimelineItem time="16:00 - 17:00" title="LỄ CƯỚI" isHighlight />
            <TimelineItem time="17:30" title="TIỆC CƯỚI" isHighlight />
          </div>

          {/* Day 2 */}
          <div className="relative border-l border-gold/30 ml-2 mt-8">
             <div className="bg-gold text-white text-xs font-bold uppercase tracking-widest py-1 px-4 inline-block mb-8 -ml-6 shadow-sm rounded-r-md">
              Ngày hôm sau
            </div>

            <TimelineItem time="07:30" title="Ăn sáng" />
            <TimelineItem time="10:00" title="Check-out" />
            <TimelineItem time="13:30" title="Trở về TP.HCM" />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Timeline;