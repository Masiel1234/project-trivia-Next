import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'es','fr','zh', 'jp'],
  defaultLocale: 'en'
});