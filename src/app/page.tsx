import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-prior-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-prior-white/90 backdrop-blur-md border-b border-prior-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center h-16 sm:h-20">
            <h1 className="display-heading text-2xl sm:text-3xl md:text-4xl text-prior-dark">
              KIRARA
            </h1>
          </div>
        </div>
      </nav>

      {/* Hero Section - Prior World inspired */}
      <section className="relative min-h-screen bg-prior-white pt-16 sm:pt-20">
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
          {/* Hero Header */}
          <div className="pt-20 sm:pt-24 lg:pt-32 pb-16 lg:pb-20 text-center">
            <div className="w-24 sm:w-32 lg:w-40 h-px bg-prior-dark mx-auto mb-12 lg:mb-16"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side - Product Image */}
            <div className="relative flex items-center justify-center order-1 lg:order-1 mb-16 lg:mb-0">
              {/* Subtle background texture */}
              <div className="absolute inset-0 bg-prior-light opacity-20 rounded-3xl transform scale-110"></div>
              
              {/* Main Product Image */}
              <div className="relative aspect-square rounded-3xl shadow-xl overflow-hidden bg-prior-white z-10 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] lg:w-[580px] lg:h-[580px] xl:w-[640px] xl:h-[640px] flex items-center justify-center transform hover:scale-105 transition-transform duration-700 ease-out">
                <Image
                  src="/kirara-lotion.jpeg"
                  alt="Kirara Signature Body Lotion"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              <h2 className="display-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 lg:mb-12 text-prior-dark leading-tight">
                Signature Body Lotion
              </h2>
              
              <p className="body-text text-lg sm:text-xl md:text-2xl mb-12 lg:mb-16 text-prior-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Immerse yourself in the delicate fragrance of cherry blossoms with our 
                premium body lotion. Enriched with natural moisturizers and sakura extract, 
                it provides long-lasting hydration while leaving your skin with a subtle, 
                elegant scent.
              </p>
              
              <a 
                href="https://shopee.co.id/Kirara-Tone-Brightening-Lotion-New-FORMULA-Green-Caviar-Extract-100-ml-i.1535422870.42600156189" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-prior text-sm sm:text-base inline-flex items-center space-x-3 px-8 py-4 hover:bg-prior-dark hover:text-prior-white transition-all duration-300 ease-out"
              >
                <span>Shop Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Footer - Prior World inspired */}
      <footer className="py-16 sm:py-20 text-center bg-prior-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <p className="body-text text-sm sm:text-base text-prior-light mb-4">
            © 2025 Kirara. Crafted with elegance and care.
          </p>
          <a 
            href="https://www.instagram.com/kirara_beautycare/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="body-text text-sm sm:text-base text-prior-light hover:text-prior-dark transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <span>Follow us on Instagram</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
