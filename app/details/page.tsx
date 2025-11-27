
export default function Details() {
  return (
    <main className="py-16 max-w-2xl mx-auto text-center px-4">
      
      <h2 className="text-3xl font-bold text-(--primary) text-center mb-8">
        Wedding Details
      </h2>

      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Date:</span> 13th December, 2025
        </p>

        <p className="text-lg text-gray-700">
          <span className="font-semibold">Venue:</span> Josco Event Centre, Oko
          Road, Ejigbo, Osun State
        </p>

            <div className="h-px bg-gray-200 w-24 mx-auto my-10" />

      <p className="text-gray-500 italic">
        “We can’t wait to celebrate this special day with you.”
      </p>
      </div>
    </main>
  );
}

