
import React from "react";
import Image from "next/image";
// Logo is served from public directory directly

export default function Home() {
  return (
    <div className="font-sans text-gray-800 animate-fade-in">
      <header className="flex items-center justify-between bg-yellow-50 p-4 shadow-md px-6 md:px-24 sticky top-0 z-50">
        <div className="flex items-center gap-3">
         
         <Image src="/TawrcurryLogoFinal_13.png" alt="TawrCurry Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold text-yellow-700 tracking-wide">TawrCurry</h1>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium text-yellow-900">
          <a href="#story" className="hover:text-yellow-600 transition">Our Story</a>
          <a href="#menu" className="hover:text-yellow-600 transition">Menu</a>
          <a href="#gallery" className="hover:text-yellow-600 transition">Gallery</a>
          <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
        </nav>
      </header>

      <section className="bg-yellow-100 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4 animate-bounce">Welcome to TawrCurry</h2>
        <p className="text-xl mb-6">Authentic Bengali & Canadian Flavours, Straight from the Heart</p>
        <button className="text-lg px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-xl shadow transition">
          View Menu
        </button>
      </section>

      <section id="story" className="py-16 px-6 md:px-24 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-yellow-700">Our Story</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 bg-yellow-50 p-6 rounded-2xl shadow-md">
          <p className="mb-4">
            TawrCurry is more than just a kitchen — it’s a heartfelt journey back to a small town in West Bengal,
            where a I once walked hand-in-hand with my grandfather to the local sweet shops.
          </p>
          <p className="mb-4">
            After moving away from home, I missed those flavors. Cooking became my way of holding onto that warmth,
            and over time, my passion grew into a purpose.
          </p>
          <p className="mb-4">
            Every dish at TawrCurry is made from scratch — with patience, love, and the same care I saw in my mother and grandmother’s kitchen.
          </p>
          <p>
            For me, it’s not just about food — it’s about heritage, emotion, and creating an experience that brings
            people closer to Bengali culture, one bite at a time.
          </p>
        </div>
      </section>

      <section id="menu" className="py-16 bg-gray-50 px-6 md:px-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Signature Dishes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Shorshe Ilishhhh", desc: "Hilsa fish in mustard gravy" },
            { name: "Kosha Mangsho", desc: "Slow-cooked spicy mutton curry" },
            { name: "Chingri Malai Curry", desc: "Prawns simmered in coconut cream" },
          ].map((dish, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-yellow-700">{dish.name}</h3>
              <p>{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="py-16 bg-yellow-50 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-yellow-700">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white h-40 rounded-xl shadow-md" />
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-100 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-700">Contact Us</h2>
        <p className="text-lg mb-2">📍 102 Pierella Drive , Belle River , Ontario N8L0Z3</p>
        <p className="text-lg mb-2">📞 +15195674152</p>
        <p className="text-lg">📧 tawrcurry@gmail.com</p>
      </section>

      <footer className="py-6 bg-yellow-200 text-center text-sm text-yellow-900">
        &copy; {new Date().getFullYear()} TawrCurry. Crafted with love and spices.
      </footer>
    </div>
  );
}
