interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({ 
  title = "The Cozy Corner | Your Sanctuary for Hand-Picked Literature", 
  description = "Discover a curated selection of books at The Cozy Corner. We offer hand-picked recommendations, a warm community, and a quiet space for readers.",
  canonical = "https://thecozycorner.com",
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
}: SEOProps) {
  const fullTitle = title.includes("The Cozy Corner") ? title : `${title} | The Cozy Corner`;

  return (
    <>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Google Search Console Verification Placeholder */}
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
    </>
  );
}
