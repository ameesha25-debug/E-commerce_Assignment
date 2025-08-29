"use client";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";

export default function Header() {
  const items = useCartStore((s) => s.items);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${search}`); // Replace with real search logic
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition">
          MyShop
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-1 max-w-xl w-full md:mx-6"
        >
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {/* Navigation Links & Cart */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link href="/cart" className="hover:text-blue-600 transition">
            Cart ({items.length})
          </Link>
        </nav>
      </div>
    </header>
  );
}
