'use client';
import { useLanguageContext } from '@/context/LanguageContext';

export function Footer() {
  const { language, setLanguage, t, tArray} = useLanguageContext();

  return (
    <footer className="bg-[#004175] text-white p-6">
      <div className="max-w-[1920px] mx-auto">
        <h3 className="text-xl font-semibold">{t('footer.contact.title') as string}</h3>
        <p className="text-sm">{t('hotel.phone') as string}</p>
        <p className="text-sm">{t('hotel.email') as string}</p>
        <div className="mt-4">
          <a
            href={t('hotel.whatsapp') as string}
            className="text-sm text-white hover:underline"
          >
            📞 {t('hotel.phone') as string}
          </a>
          <br />
          <a
            href="mailto:contato@hotelditalia.com"
            className="text-sm text-white hover:underline"
          >
            ✉️ {t('hotel.email') as string}
          </a>
        </div>
      </div>
    </footer>
  );
}
