  <section className="bg-yellow-100 py-16 text-center">
    <h2 className="text-5xl font-bold mb-4">Welcome to TawrCurry</h2>
    <p className="text-xl mb-6">Authentic Bengali Flavours, Straight from the Heart</p>
    <button className="text-lg px-6 py-2 bg-yellow-300 hover:bg-yellow-400 transition rounded-xl">View Menu</button>
  </section>

  <section id="story" className="py-12 px-6 md:px-24 text-center bg-white">
    <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
    <p className="max-w-2xl mx-auto text-lg leading-relaxed">
      TawrCurry is more than just a kitchen — it’s a heartfelt journey back to a small town in West Bengal, where a little girl once walked hand-in-hand with her grandfather to the local sweet shops. The smell of fresh rasgullas, the warmth of those walks, and the joy of shared laughter left a lasting imprint on her heart.
      <br /><br />
      After moving away from home, she often found herself longing for those comforting flavors. In her quest to recreate them, cooking slowly became her passion — a way to reconnect with her roots and relive cherished memories.
      <br /><br />
      At TawrCurry, every dish is made from scratch — with love, patience, and the same care she felt watching her grandmother cook. For her, this isn’t just a business. It’s a celebration of tradition, identity, and emotion.
      <br /><br />
      Through TawrCurry, she invites you to experience the richness of Bengali cuisine — not just as food, but as a story. A story of home, of warmth, of heritage. And for her, the true reward is not profit, but the smile on your face after that very first bite.
    </p>
  </section>

  <section id="menu" className="py-12 bg-gray-50 px-6 md:px-24">
    <h2 className="text-3xl font-semibold text-center mb-10">Signature Dishes</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "Shorshe Ilish", desc: "Hilsa fish in mustard gravy" },
        { name: "Kosha Mangsho", desc: "Slow-cooked spicy mutton curry" },
        { name: "Chingri Malai Curry", desc: "Prawns simmered in coconut cream" },
      ].map((dish, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
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
    <button className="text-lg px-6 py-2 bg-yellow-300 hover:bg-yellow-400 transition rounded-xl">Full Menu</button>
  </section>

  <section id="gallery" className="py-12 bg-yellow-50 px-6 md:px-24">
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

  <section id="contact" className="py-12 bg-gray-100 px-6 md:px-24 text-center">
    <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
    <p className="text-lg mb-2">📍 123 Curry Lane, Kolkata Town</p>
    <p className="text-lg mb-2">📞 +91-9876543210</p>
    <p className="text-lg">📧 hello@tawrcurry.com</p>
  </section>

  <footer className="py-6 bg-yellow-200 text-center text-sm">
    &copy; {new Date().getFullYear()} TawrCurry. Crafted with love and spices.
  </footer>
</div>
