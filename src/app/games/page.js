import { db } from "@/utilities/db";
import Link from "next/link";

export const metadata = {
  title: "Games List",
  description: "A simple game post app with comments",
};

export default async function GamePage({ searchParams }) {
  const games = (await db.query(`SELECT * FROM games_week08`)).rows;

  const sorted = games.sort((a, b) => {
    if (searchParams.sortBy === "asc") {
      return a.title.localeCompare(b.title);
    } else if (searchParams.sortBy === "desc") {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="min-h-screen bg-black text-green-500 p-8">
      <div className="mb-6 flex justify-center space-x-4">
        <Link
          href="/games?sortBy=asc"
          className="bg-green-700 hover:bg-green-600 px-4 py-2 border border-green-500 rounded"
        >
          Sort Ascending
        </Link>
        <Link
          href="/games?sortBy=desc"
          className="bg-green-700 hover:bg-green-600 px-4 py-2 border border-green-500 rounded"
        >
          Sort Descending
        </Link>
        <Link
          href="/games"
          className="bg-green-700 hover:bg-green-600 px-4 py-2 border border-green-500 rounded"
        >
          Remove Sort
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center mb-6">My Game List</h1>
      <Link
        href="/games/addGame"
        className="block text-center mb-8 bg-green-700 hover:bg-green-600 text-black px-6 py-3 border border-green-500 rounded-lg"
      >
        Add New Game
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sorted.map((game) => (
          <div
            key={game.id}
            className="border border-green-500 p-6 bg-black text-center rounded"
          >
            <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
            <Link
              href={`/games/${game.id}`}
              className="text-green-400 hover:shadow-[0_0_10px_3px_rgba(0,255,0,0.5)] transition-shadow duration-300"
            >
              View Game Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
