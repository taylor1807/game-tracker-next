import { db } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function CommentsForm({ gameId }) {
  async function handleSubmit(formData) {
    "use server";
    const { comment, name } = Object.fromEntries(formData);
    try {
      // console.log("adding" gameId);
      await db.query(
        "INSERT INTO comments_week08 (game_id, comment, name) VALUES ($1, $2, $3)",
        [gameId, comment, name]
      );

      // console.log("added");
    } catch (error) {
      // console.error(error);
    }
    revalidatePath(`/games/${gameId}/comments`);
    redirect(`/games/${gameId}/comments`);
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input
        className="bg-black text-green-500 p-2 w-full border border-green-600"
        name="name"
        placeholder="Enter Your Name"
        required
      />
      <textarea
        className="bg-black text-green-500 p-2 w-full border border-green-600"
        name="comment"
        placeholder="Enter A Comment"
        required
      />
      <button
        className="bg-green-700 text-black px-4 py-2 rounded border border-green-500 hover:bg-green-600"
        type="submit"
      >
        Submit Comment
      </button>
    </form>
  );
}
