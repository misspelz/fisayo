import Timeline from "../../components/Timeline";
import Watchword from "../../components/Watchword";

export default function Story() {
  return (
    <main className="py-16 max-w-3xl mx-auto text-center">
      <Watchword />
      <h2 className="text-3xl font-bold text-(--primary) mb-6">Our Story</h2>
      <p className="text-gray-600 mb-8">From college friends to soulmates ❤️</p>
      <Timeline />
    </main>
  );
}
