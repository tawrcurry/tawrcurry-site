
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <header className="flex items-center justify-between bg-white p-4 shadow-md px-6 md:px-24 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Image src="/TawrcurryLogoFinal_13.png" alt="TawrCurry Logo" width={120} height={60} />
          <h1 className="text-2xl font-bold text-yellow-700 tracking-wide">TawrCurry</h1>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <a href="#story" className="hover:text-yellow-600 transition">Our Story</a>
          <a href="#menu" className="hover:text-yellow-600 transition">Menu</a>
          <a href="#gallery" className="hover:text-yellow-600 transition">Gallery</a>
          <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
        </nav>
      </header>

      <main className="mt-10 px-6 md:px-24 space-y-20">
        <section className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-4">
            Discover the Soul of Bengali Street Food
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Straight from the nostalgic streets of West Bengal to your plate in Canada — experience the flavors of home, handcrafted with love.
          </p>
        </section>

        <section id="story" className="bg-yellow-50 p-8 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold text-yellow-700 mb-6">Our Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            TawrCurry is more than just a kitchen — it's the memory of a little girl from a small town in West Bengal, who used to walk hand-in-hand with her grandfather to sweet shops filled with the aroma of fresh rasgullas and mishti doi.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            After moving away, the longing for those flavors turned into a passion for cooking. What began as an attempt to recreate childhood memories has now become a mission — to bring authentic Bengali soul food to every heart craving comfort.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At TawrCurry, every dish is made from scratch with the love, patience, and purity found in a grandmother’s kitchen. For us, food is not just about taste — it's about emotion, heritage, and the joy of sharing culture one bite at a time.
          </p>
        </section>

        <section id="menu">
          <h3 className="text-3xl font-bold text-yellow-700 mb-6">Signature Street Dishes</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Phuchka (Pani Puri)",
                desc: "Crispy puris filled with spicy tamarind water and mashed potatoes.",
              },
              {
                name: "Kathi Roll",
                desc: "Spiced vegetables wrapped in paratha, a street-side staple from Kolkata.",
              },
              {
                name: "Ghugni Chaat",
                desc: "Curried white peas topped with chopped onions, tomatoes, and tamarind chutney.",
              },
            ].map((dish, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-yellow-700 mb-2">{dish.name}</h4>
                <p className="text-gray-600">{dish.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery">
          <h3 className="text-3xl font-bold text-yellow-700 mb-6">Visual Taste: Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-100 h-40 rounded-xl shadow-md" />
            ))}
          </div>
        </section>

        <section id="contact" className="text-center bg-gray-100 p-8 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold text-yellow-700 mb-4">Contact Us</h3>
          <p className="text-lg">📍 102 Pierella Drive, Belle River, Ontario N8L0Z3</p>
          <p className="text-lg">📞 +1 519-567-4152</p>
          <p className="text-lg">📧 tawrcurry@gmail.com</p>
        </section>
      </main>

      <footer className="mt-20 py-6 bg-yellow-200 text-center text-sm text-yellow-900">
        &copy; {new Date().getFullYear()} TawrCurry. Crafted with love and spices.
      </footer>
    </div>
  );
}
