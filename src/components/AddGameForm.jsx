import { db } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function AddGameForm() {
  async function handleSubmit(formData) {
    "use server";

    const { title, description, release_year } = Object.fromEntries(formData);
    try {
      // console.log("adding", title;
      await db.query(
        `INSERT INTO games_week08 (title, description, release_year) VALUES ($1, $2, $3)`,
        [title, description, release_year]
      );

      // console.log("added");
    } catch (error) {
      // console.error(error);
    }
    revalidatePath("/games");
    redirect("/games");
  }

  return (
    <div>
      <Link
        className="text-green-400 hover:shadow-[0_0_10px_3px_rgba(0,255,0,0.5)] transition-shadow duration-300"
        href={"/games"}
      >
        Return to Games
      </Link>
      <h1 className="text-4xl font-bold mb-4 text-center"> Add A New Game</h1>
      <form action={handleSubmit}>
        <input
          className="bg-black text-green-500 p-2 w-full border border-green-600"
          name="title"
          type="text"
          placeholder="Enter Title Of The Game"
          required
        />
        <textarea
          className="bg-black text-green-500 p-2 w-full border border-green-600"
          name="description"
          placeholder="Enter a short description of the game"
        />
        <input
          className="bg-black text-green-500 p-2 w-full border border-green-600"
          name="release year"
          type="text"
          placeholder="enter year of release eg. 2024"
          required
        />
        <button
          className="bg-green-700 text-black px-4 py-2 rounded border border-green-500 hover:bg-green-600"
          type="submit"
        >
          Add Game
        </button>
      </form>
    </div>
  );
}
