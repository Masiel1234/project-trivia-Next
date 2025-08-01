import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = { images: {
    domains: ['cdn.myanimelist.net'],

},};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);