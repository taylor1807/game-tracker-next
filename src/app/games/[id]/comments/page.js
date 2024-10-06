import { db } from "@/utilities/db";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const game = (
    await db.query("SELECT * FROM games_week08 WHERE id = $1", [params.id])
  ).rows[0];
  return {
    title: `Comments for ${game.title}`,
    description: `Add your thoughts and feelings for ${game.title}.`,
  };
}

export default async function CommentsPage({ params }) {
  const comment = await db.query(
    `SELECT * FROM comments_week08 WHERE game_id = $1`,
    [params.id]
  );
  return (
    <div className="flex items-center justify-center bg-black text-green-500 p-8">
      <div>
        {comment.rows.length > 0 ? (
          comment.rows.map((comment) => (
            <div
              key={comment.id}
              className="flex items-center justify-center bg-black text-green-500 p-8"
            >
              <div className="border border-green-500 p-8 bg-black rounded-lg max-w-3xl w-full">
                <h3 className="text-4xl font-bold mb-4 text-center">
                  {comment.name}
                </h3>
                <p className="mb-6 text-center">{comment.comment}</p>
                <Link
                  className="mb-6 text-center"
                  href={`/games/${params.id}/comments/${comment.id}/edit`}
                >
                  Edit Comment
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="mb-6 text-center">
            No Comments as of yet, feel free to add one.
          </p>
        )}
        <Link
          className="text-3xl px-8 py-4 bg-green-700 hover:bg-green-600 text-black border border-green-500 rounded-lg mt-8"
          href={`/games/${params.id}/comments/form`}
        >
          Add a new Comment
        </Link>
      </div>
    </div>
  );
}
