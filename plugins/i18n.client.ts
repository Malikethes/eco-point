export default defineNuxtPlugin((nuxtApp) => {
  const i18n = nuxtApp.$i18n as { setLocale: (locale: string) => void };
  
  if (import.meta.client) {
    const savedLocale = localStorage.getItem('locale');
    
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'pl')) {
      i18n.setLocale(savedLocale);
    }
  }
});
