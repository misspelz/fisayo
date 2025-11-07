import GalleryCarousel from "../../components/GalleryCarousel";

export default function Gallery() {
  return (
    <main className="py-16">
      <h2 className="text-3xl font-bold text-(--primary) text-center mb-8">Pictures</h2>
      <GalleryCarousel />
    </main>
  );
}
