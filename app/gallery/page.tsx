import GalleryCarousel from "../../components/GalleryCarousel";

export default function Gallery() {
  return (
    <main className="py-10 lg:py-16">
      <h2 className="text-3xl font-bold text-(--primary) text-center mb-8 md:mb-0 lg:mb-8">Our Pictures</h2>
      <GalleryCarousel />
    </main>
  );
}
