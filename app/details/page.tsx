import Image from "next/image";

export default function Details() {
  return (
    <main className="py-16 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-(--primary) mb-6">Wedding Details</h2>
      <p className="mb-2 text-gray-600">Date: 25th December 2025</p>
      <p className="mb-6 text-gray-600">Venue: Sunset Gardens, Lagos</p>
      <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden shadow-lg">
        <Image src="/images/venue.jpg" alt="Venue" fill className="object-cover" />
      </div>
      <p className="text-gray-500">Map coming soon...</p>
    </main>
  );
}
