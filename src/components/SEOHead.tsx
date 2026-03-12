import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  ogUrl = 'https://RestoreFlex.com',
  ogType = 'website',
}) => {
  useEffect(() => {
    document.title = `${title} | RestoreFlex Physiotherapy`;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', `${title} | RestoreFlex Physiotherapy`, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:url', ogUrl, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', `${title} | RestoreFlex Physiotherapy`);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
  }, [title, description, ogImage, ogUrl, ogType]);

  return null;
};

export default SEOHead;
