import React from "react";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <section className="bg-yellow-100 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to TawrCurry</h1>
        <p className="text-xl mb-6">Authentic Bengali Flavours, Straight from the Heart</p>
        <button className="text-lg px-6 py-2 bg-yellow-300 rounded-xl">View Menu</button>
      </section>

      <section className="py-12 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="max-w-2xl mx-auto text-lg">
          TawrCurry is a culinary journey into the rich heritage of Bengali cuisine. We bring
          to you flavors passed down generations, from comforting home-cooked meals to
          festive specialties.
        </p>
      </section>

      <section className="py-12 bg-gray-50 px-6 md:px-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Signature Dishes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Shorshe Ilish", desc: "Hilsa fish in mustard gravy" },
            { name: "Kosha Mangsho", desc: "Slow-cooked spicy mutton curry" },
            { name: "Chingri Malai Curry", desc: "Prawns simmered in coconut cream" },
          ].map((dish, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p>{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">Explore Our Menu</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          From street food favorites to traditional thalis – dive into the diverse world of Bengali flavors.
        </p>
        <button className="text-lg px-6 py-2 bg-yellow-300 rounded-xl">Full Menu</button>
      </section>

      <section className="py-12 bg-yellow-50 px-6 md:px-24">
        <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white h-40 rounded-xl shadow-md" />
          ))}
        </div>
      </section>

      <section className="py-12 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="mb-2">“Absolutely loved the authenticity! Reminded me of home.”</p>
            <span className="font-semibold">– Priya D.</span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="mb-2">“Best Bengali food in town. The kosha mangsho is to die for.”</p>
            <span className="font-semibold">– Arjun M.</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-lg mb-2">📍 123 Curry Lane, Kolkata Town</p>
        <p className="text-lg mb-2">📞 +91-9876543210</p>
        <p className="text-lg">📧 hello@tawrcurry.com</p>
      </section>

      <footer className="py-6 bg-yellow-200 text-center text-sm">
        &copy; {new Date().getFullYear()} TawrCurry. Crafted with love and spices.
      </footer>
    </div>
  );
}
