import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image src="/TawrcurryLogoFinal_13.png" alt="TawrCurry Logo" width={120} height={60} />
            <h1 className="text-2xl font-bold text-yellow-700 ml-4">TawrCurry</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#tiffin" className="text-gray-700 hover:text-yellow-600">Tiffin Service</a>
            <a href="#menu" className="text-gray-700 hover:text-yellow-600">Menu</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-600">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-50 text-center py-12">
        <h2 className="text-4xl font-extrabold text-yellow-800 mb-4">Welcome to TawrCurry!</h2>
        <p className="text-lg text-gray-600">Takeout | Delivery | Catering | Tiffin Service</p>
        <p className="text-lg text-gray-600 mt-2">Call/Text: +1 519-567-4152</p>
      </section>

      {/* Tiffin Service Section */}
      <section id="tiffin" className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-yellow-700 mb-6 text-center">Tiffin Service</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Healthy and Balanced Meals Delivered for free!
        </p>
        <div className="flex justify-center mt-6">
          <a href="#" className="bg-yellow-700 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">Order Tiffin Service</a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-yellow-700 mb-6 text-center">Our Menu</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Biryani & More!", link: "#" },
              { name: "Thali", link: "#" },
              { name: "Starters/Snacks", link: "#" },
              { name: "Rolls & Wraps", link: "#" },
              { name: "Momo & Soup", link: "#" },
              { name: "Veg Curries", link: "#" },
              { name: "Non-Veg Curries", link: "#" },
              { name: "Sweets", link: "#" },
            ].map((item, index) => (
              <a key={index} href={item.link} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
                <h4 className="text-xl font-semibold text-yellow-700">{item.name}</h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-yellow-700 mb-6 text-center">Contact Us</h3>
        <div className="text-center">
          <p className="text-lg">📍 102 Pierella Drive, Belle River, Ontario N8L0Z3</p>
          <p className="text-lg">📞 +1 519-567-4152</p>
          <p className="text-lg">📧 tawrcurry@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-200 text-center text-sm text-yellow-900 py-4">
        &copy; {new Date().getFullYear()} TawrCurry. Crafted with love and spices.
      </footer>
    </div>
  );
}
