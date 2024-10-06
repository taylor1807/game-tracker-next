import { db } from "@/utilities/db";
import Link from "next/link";
import DeleteGameButton from "@/components/DeleteGameButton";

export async function generateMetadata({ params }) {
  const game = (
    await db.query("SELECT * FROM games_week08 WHERE id = $1", [params.id])
  ).rows[0];
  return {
    title: `${game.title} info`,
    description: `Learn more about ${game.title}, and add some comments.`,
  };
}

export default async function SingleGamePage({ params }) {
  const game = (
    await db.query("SELECT * FROM games_week08 WHERE id = $1", [params.id])
  ).rows[0];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 p-8">
      <div className="border border-green-500 p-8 bg-black rounded-lg max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">{game.title}</h1>
        <p className="text-lg mb-4 text-center">
          Release Year: {game.release_year}
        </p>
        <p className="mb-6 text-center">{game.description}</p>

        <div className="flex justify-center space-x-4 mb-6">
          <Link
            href={`/games/${game.id}/comments`}
            className="bg-green-700 hover:bg-green-600 px-4 py-2 border border-green-500 rounded"
          >
            View Comments
          </Link>
        </div>

        <DeleteGameButton gameId={game.id} />
      </div>
    </div>
  );
}
