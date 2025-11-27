import RsvpForm from "../../components/RsvpForm";

export default function Rsvp() {
  return (
    <main className="py-16 max-w-md mx-auto">
    <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-(--primary) text-center ">
        RSVP
      </h2>
      <p className="text-center text-gray-600 ">
        This is strictly for Guests joining{" "}
        <span className="font-semibold text-(--primary)">virtually</span>.
      </p>
    </div>
      <RsvpForm />
    </main>
  );
}
