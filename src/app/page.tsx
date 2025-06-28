import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Combined Hero & Product Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-skin-light via-sakura-light to-skin-warm">
        <div className="absolute inset-0 bg-black/3"></div>
        <div className="relative z-10 px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Brand & Product Info */}
            <div className="text-center lg:text-left">
              <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-6">
                KIRARA
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">
                Nourish your skin with the gentle touch of sakura
              </p>
              <div className="w-24 h-px bg-sakura mx-auto lg:mx-0 mb-8"></div>
              
              <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
                Signature Body Lotion
              </h2>
              
              <p className="text-lg mb-8 leading-relaxed">
                Immerse yourself in the delicate fragrance of cherry blossoms with our 
                premium body lotion. Enriched with natural moisturizers and sakura extract, 
                it provides long-lasting hydration while leaving your skin with a subtle, 
                elegant scent.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-sakura rounded-full"></div>
                  <span>Deeply hydrating formula</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-sakura rounded-full"></div>
                  <span>Natural sakura extract</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-sakura rounded-full"></div>
                  <span>Suitable for all skin types</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-sakura rounded-full"></div>
                  <span>Elegant, long-lasting fragrance</span>
                </div>
              </div>
            </div>

            {/* Right Side - Product Image */}
            <div className="relative flex items-center justify-center">
              {/* Blurred/Blended Background Image */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <Image
                  src="/kirara-lotion.jpeg"
                  alt="Kirara Signature Body Lotion Blurred Background"
                  width={900}
                  height={900}
                  className="w-[90%] h-[90%] object-cover blur-2xl opacity-60 scale-110"
                  aria-hidden="true"
                  draggable="false"
                />
              </div>
              {/* Main Product Image */}
              <div className="relative aspect-square rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-sakura-light to-skin-warm z-10 w-[420px] h-[420px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
                <Image
                  src="/kirara-lotion.jpeg"
                  alt="Kirara Signature Body Lotion"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 text-center bg-sakura-dark text-white">
        <p className="text-sm text-sakura-light">
          2025 Kirara
        </p>
      </footer>
    </div>
  );
}
