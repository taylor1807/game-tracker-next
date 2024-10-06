import { db } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const game = (
    await db.query("SELECT * FROM games_week08 WHERE id = $1", [params.id])
  ).rows[0];
  return {
    title: `Edit comments for ${game.title}`,
    description: `Edit your thoughts and feelings for ${game.title}.`,
  };
}

export default async function EditPage({ params }) {
  const { id: gameId, commentId } = params;
  const comment = await db.query(
    `SELECT * FROM comments_week08 WHERE id = $1`,
    [commentId]
  );

  const currentComment = comment.rows[0];

  async function handleSubmit(formData) {
    "use server";
    const { comment: updatedComment, name: updatedName } =
      Object.fromEntries(formData);
    await db.query(
      `UPDATE comments_week08 SET comment = $1, name = $2 WHERE id = $3;`,
      [updatedComment, updatedName, commentId]
    );

    revalidatePath(`/games/${gameId}/comments`);
    redirect(`/games/${gameId}/comments`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 p-8">
      <div className="border border-green-500 p-8 bg-black rounded-lg max-w-3xl w-full">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Edit The Comment
        </h2>
        <form action={handleSubmit} async>
          <input
            className="bg-black text-green-500 p-2 w-full border border-green-600"
            name="name"
            defaultValue={currentComment.name}
            placeholder="Enter Your Name"
            required
          />
          <textarea
            className="bg-black text-green-500 p-2 w-full border border-green-600"
            name="comment"
            defaultValue={currentComment.comment}
            placeholder="update your comment"
            maxLength={100}
            required
          />
          <button
            className="bg-green-700 text-black px-4 py-2 rounded border border-green-500 hover:bg-green-600"
            type="submit"
          >
            Update Comment
          </button>
        </form>
      </div>
    </div>
  );
}
