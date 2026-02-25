"use client";

/**
 * Creative page heading - same size across the website.
 * Use for main page titles (e.g. "Contact Us", "Graphic Design").
 */
export default function PageHeading({ children, className = "" }) {
  return (
    <h1
      className={`page-heading relative inline-block text-center font-bold text-white ${className}`}
    >
      <span className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-white/60" />
      {children}
      <span className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-white/60" />
    </h1>
  );
}
