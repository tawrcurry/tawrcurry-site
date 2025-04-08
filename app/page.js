
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="bg-yellow-300 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/TawrcurryLogoFinal_13.png" alt="Logo" width={60} height={60} />
            <h1 className="text-2xl font-bold text-yellow-900">TawrCurry</h1>
          </div>
          <nav className="space-x-6 text-yellow-900 font-semibold text-lg">
            <Link href="/menu">Menu</Link>
            <Link href="/sweets">Sweets</Link>
            <Link href="/thali">Thali</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-50 text-center py-12">
        <h2 className="text-4xl font-bold text-yellow-800 mb-4">Welcome to TawrCurry</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Experience the warmth of Bengal through every dish — handcrafted and home-style.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-semibold text-yellow-800 mb-8 text-center">Our Flavours</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'GujiyaImage_1.png',
            'MalpuaImage.png',
            'ThaliImage1.png',
            'ThaliImage2.png',
            'ThaliImage3.png',
            'ThaliImage4.png',
            'ThaliImage5.png',
            'ThaliImage6.png',
            'ThaliImage7.png',
          ].map((src, idx) => (
            <div key={idx} className="rounded overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image src={`/${src}`} alt={`Dish ${idx + 1}`} width={600} height={400} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-300 text-yellow-900 text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} TawrCurry. All rights reserved.</p>
      </footer>
    </div>
  );
}
