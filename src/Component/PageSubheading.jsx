"use client";

/**
 * Page subheading - white, equal size across the website.
 */
export default function PageSubheading({ children, className = "" }) {
  return (
    <p className={`page-subheading text-white text-center max-w-2xl mx-auto ${className}`}>
      {children}
    </p>
  );
}
