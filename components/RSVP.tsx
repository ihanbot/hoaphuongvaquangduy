import React from 'react';
import SectionWrapper from './SectionWrapper';

const RSVP: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <SectionWrapper>
        <div className="text-center mb-10">
          <h3 className="font-serif text-3xl text-sage uppercase tracking-wide">Xác Nhận Tham Dự</h3>
          <div className="w-10 h-[1px] bg-gold mx-auto mt-4"></div>
        </div>

        <form 
          action="https://formspree.io/f/xzznqdzo" 
          method="POST" 
          className="max-w-sm mx-auto space-y-5"
        >
          <InputField label="Họ và tên" name="Tên" required />
          <InputField label="Số điện thoại" name="SĐT" type="tel" required />
          <InputField label="Người đi cùng" name="Người đi cùng" />
          
          <div className="grid grid-cols-2 gap-4">
             <InputField label="Số người lớn" name="Số người lớn" type="number" min={0} />
             <InputField label="Số trẻ em" name="Số trẻ em" type="number" min={0} />
          </div>

          <div>
             <label className="block text-xs uppercase tracking-widest text-sage font-bold mb-2">
                Chiều cao & tuổi của trẻ em
            </label>
            <textarea 
                name="Chiều cao & tuổi trẻ em"
                placeholder="Ví dụ: Bé A – 110cm – 4 tuổi"
                className="w-full p-3 bg-sand border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm rounded-md h-24 resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-sage text-white font-bold tracking-widest text-sm uppercase hover:bg-sage/90 transition-colors shadow-lg rounded-sm mt-4"
          >
            Gửi Xác Nhận
          </button>
        </form>
      </SectionWrapper>
    </section>
  );
};

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    min?: number;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", required = false, min }) => (
    <div>
        <label className="block text-xs uppercase tracking-widest text-sage font-bold mb-2">
            {label} {required && <span className="text-red-400">*</span>}
        </label>
        <input 
            type={type} 
            name={name} 
            required={required}
            min={min}
            className="w-full p-3 bg-sand border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm rounded-md"
        />
    </div>
);

export default RSVP;