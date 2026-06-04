import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A global component that dynamically manages SEO tags for all pages,
 * including all 20 courses and their special subroutes (playground, compiler, reference, resources, etc.).
 */
const GlobalSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const siteUrl = 'https://techinmystyle.com';
    const defaultTitle = 'Tech In My Style — Learn Programming & Web Development';
    const defaultDescription = 'Tech In My Style offers free programming courses in HTML, CSS, JavaScript, Python, Java, C, AI, Machine Learning, Deep Learning, NLP, Data Science, DSA, System Design, and Full Stack Development. Learn to code the smart way.';
    const defaultKeywords = 'programming courses, learn to code, HTML tutorial, CSS tutorial, JavaScript course, Python programming, Java course, machine learning, deep learning, NLP, data science, DSA, system design, full stack development, tech education India';
    const defaultOgImage = 'https://techinmystyle.com/favicon.png';

    // Parse location path to determine SEO properties
    const pathname = location.pathname.replace(/\/$/, ""); // Strip trailing slash

    let finalTitle = defaultTitle;
    let finalDescription = defaultDescription;
    let finalKeywords = defaultKeywords;

    // Helper to format path segment to capitalized text
    const formatSegment = (str) => {
      if (!str) return '';
      return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    // 1. Static Routes
    if (pathname === '' || pathname === '/' || pathname === '/home') {
      finalTitle = defaultTitle;
      finalDescription = defaultDescription;
      finalKeywords = defaultKeywords;
    } else if (pathname === '/courses') {
      finalTitle = 'All Free Programming Courses — Tech In My Style';
      finalDescription = 'Explore our collection of 20+ free, interactive programming and tech courses. Learn HTML, CSS, JS, Python, AI, Machine Learning, DSA, System Design, and more.';
      finalKeywords = 'free coding courses, learn programming, web development courses, python courses, machine learning tutorial, system design, dsa course';
    } else if (pathname === '/about-us') {
      finalTitle = 'About Our Team & Mission — Tech In My Style';
      finalDescription = 'Meet the passionate team behind Tech In My Style: G Rama Krishna Prasad (UI/UX Architect), Rameez Basha Shaik (Technical Lead), Syed Asadullah (Developer & Course Designer), and others. We make tech education free and accessible to all.';
      finalKeywords = 'about us, tech in my style founder, G Rama Krishna Prasad, Rama Krishna Prasad, Rameez Basha, Syed Asadullah, tech education mission';
    } else if (pathname === '/stay-connected') {
      finalTitle = 'Stay Connected & Community — Tech In My Style';
      finalDescription = 'Connect with the Tech In My Style community. Follow us on Instagram, YouTube, Telegram, and WhatsApp to get the latest tech news, resources, and updates.';
      finalKeywords = 'stay connected, tech community, join telegram, follow instagram, youtube channel, whatsapp channel, contact us';
    } else if (pathname === '/feedback') {
      finalTitle = 'Feedback Center & Support — Tech In My Style';
      finalDescription = 'We love to hear from you. Send us your feedback, bug reports, and suggestions to help us improve the Tech In My Style learning experience.';
      finalKeywords = 'feedback, user suggestions, bug reports, support, contact us, feedback form';
    } else if (pathname === '/privacy-policy') {
      finalTitle = 'Privacy Policy — Tech In My Style';
      finalDescription = 'Read the Privacy Policy for Tech In My Style. Learn how we handle your data, cookies, and user privacy on our free coding platform.';
      finalKeywords = 'privacy policy, user data privacy, cookies policy, tech in my style';
    } else if (pathname === '/terms-and-conditions') {
      finalTitle = 'Terms and Conditions — Tech In My Style';
      finalDescription = 'Read the Terms and Conditions of using the Tech In My Style website. Understand the terms, rules, and guidelines for our free learning platform.';
      finalKeywords = 'terms and conditions, user agreement, website terms, usage rules';
    } else if (pathname === '/disclaimer') {
      finalTitle = 'Disclaimer — Tech In My Style';
      finalDescription = 'Disclaimer statement for Tech In My Style. Important legal information regarding content accuracy, external links, and educational purposes.';
      finalKeywords = 'disclaimer, legal notice, content accuracy, educational disclaimer';
    } else {
      // 2. Dynamic Course Routes (e.g. /html-course/resources)
      const parts = pathname.split('/').filter(Boolean);
      if (parts.length > 0) {
        const courseSegment = parts[0];

        // Course segment mappings
        const courseMap = {
          'html-course': 'HTML',
          'css-course': 'CSS',
          'js-basic-course': 'JavaScript Basics',
          'javascript-basic-course': 'JavaScript Basics',
          'js-int-course': 'JavaScript Intermediate',
          'javascript-int-course': 'JavaScript Intermediate',
          'js-adv-course': 'JavaScript Advanced',
          'javascript-adv-course': 'JavaScript Advanced',
          'java-course': 'Java',
          'c-course': 'C Programming',
          'python-course': 'Python',
          'ai-course': 'Artificial Intelligence',
          'dl-course': 'Deep Learning',
          'ml-course': 'Machine Learning',
          'dsc-course': 'Data Science',
          'dsa-course': 'Data Structures & Algorithms',
          'nlp-course': 'Natural Language Processing',
          'os-course': 'Operating Systems',
          'system-design-course': 'System Design',
          'database-course': 'Database & SQL',
          'genai-course': 'Generative AI',
          'fullstack-python-course': 'Full Stack Python',
          'fullstack-java-platform-course': 'Full Stack Java',
        };

        const courseName = courseMap[courseSegment];
        if (courseName) {
          if (parts.length === 1) {
            // Course Home Page
            finalTitle = `${courseName} Course — Learn ${courseName} in My Style`;
            finalDescription = `Master ${courseName} from beginner to advanced concepts with our free interactive course. Includes interactive lessons, code compilers, resources, and live exercises.`;
            finalKeywords = `${courseName}, learn ${courseName}, ${courseName} course, ${courseName} tutorial, tech in my style, html in my style, ${courseName} in my style`;
          } else {
            // Course Sub-Pages (special tabs)
            const subSegment = parts[1];

            // Sub-page mappings
            const subMap = {
              'reference': 'Reference & Documentation',
              'resources': 'Learning Resources & Notes',
              'compiler': 'Interactive Live Playground',
              'playground': 'Interactive Live Playground',
              'connect': 'Let\'s Connect & Community',
              'contact': 'Contact & Support',
              'topics': 'Syllabus Topics',
              'tasks': 'Hands-on Coding Tasks',
              'tag': 'Tag Reference Guide',
              'property': 'Property Reference Guide',
            };

            const subName = subMap[subSegment] || formatSegment(subSegment);

            // Detailed page tags (e.g. /html-course/tag/div)
            let detail = '';
            if (parts.length > 2) {
              detail = decodeURIComponent(parts[2]).toUpperCase();
            }

            const pageLabel = detail ? `${courseName} ${detail} ${subName}` : `${courseName} ${subName}`;
            finalTitle = `${pageLabel} — Tech In My Style`;
            finalDescription = `Explore the ${pageLabel} in our free ${courseName} course. Learn to code using our live browser compiler and detailed reference guides.`;
            finalKeywords = `${courseName} ${subSegment}, ${courseName} ${detail || ''}, learn ${courseName}, ${courseName} playground, online compiler`;
          }
        }
      }
    }

    // Update head DOM elements
    document.title = finalTitle;

    const setMetaTag = (attributeName, attributeValue, contentValue) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (meta) {
        meta.setAttribute('content', contentValue);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        meta.setAttribute('content', contentValue);
        document.head.appendChild(meta);
      }
    };

    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'keywords', finalKeywords);

    // Canonical link
    const finalCanonical = `${siteUrl}${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', finalCanonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', finalCanonical);
      document.head.appendChild(canonicalLink);
    }

    // Open Graph
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:image', defaultOgImage);

    // Twitter Cards
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', defaultOgImage);

  }, [location.pathname]);

  return null;
};

export default GlobalSEO;
