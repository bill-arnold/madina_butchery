
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Hello Madina Butchery, I would like to place an order for fresh meat.");
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
        Order via WhatsApp
      </span>
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.962 8.962 0 01-4.415-1.178l-.317-.189-3.272.858.873-3.19-.207-.33a8.976 8.976 0 01-1.378-4.711c0-4.953 4.03-8.983 8.984-8.983 2.403 0 4.662.937 6.36 2.634a8.916 8.916 0 012.635 6.35c0 4.954-4.03 8.984-8.984 8.984m0-19.664C6.914 0 2.228 4.686 2.228 10.435c0 1.838.48 3.633 1.39 5.244L0 24l8.421-2.21c1.583.863 3.364 1.317 5.177 1.317 5.751 0 10.437-4.686 10.437-10.435 0-2.787-1.085-5.405-3.056-7.376A10.373 10.373 0 0013.651 0z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
