
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <header className="bg-yellow-300 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-yellow-900">TawrCurry</h1>
          <nav className="space-x-6 text-yellow-900 font-semibold text-lg">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/sweets">Sweets</Link>
            <Link href="/thali">Thali</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-800 mb-4">Our Menu</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          This page is under construction. We're cooking up something delicious. Stay tuned!
        </p>
      </main>

      <footer className="bg-yellow-300 text-yellow-900 text-center py-6">
        <p>&copy; {new Date().getFullYear()} TawrCurry. All rights reserved.</p>
      </footer>
    </div>
  );
}
