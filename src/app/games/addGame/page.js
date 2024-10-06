import AddGameForm from "@/components/AddGameForm";
import Link from "next/link";

export const metadata = {
  title: "Add A New Game",
  description: "A simple game post app with comments",
};

export default function AddGamePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 p-8">
      <AddGameForm />
    </div>
  );
}
