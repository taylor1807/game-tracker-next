import { db } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function DeleteGameButton({ gameId }) {
  async function handleDelete(formData) {
    "use server";

    const gameId = formData.get("gameId");

    try {
      // console.log("deleting", gameId);
      await db.query("DELETE FROM games_week08 WHERE id = $1", [gameId]);

      // console.log("deleted");
    } catch (error) {
      // console.error(error);
    }
    revalidatePath("/games");
    redirect("/games");
  }
  // added value as to make sure the gameId in question was prefilled as the input was going to be hidden
  return (
    <form action={handleDelete}>
      <input type="hidden" name="gameId" value={gameId} />
      <button
        type="submit"
        className="text-red-500 bg-black-700 hover:bg-green-600 px-4 py-2 border border-green-500 rounded"
      >
        Delete Game
      </button>
    </form>
  );
}
//this one gave me a bit of a headache trying to get "use client" and "use server" in the correct places, i knew the SQL to delete a game, i tried adding a button to the page, but got errors regarding client/server each time, i left it for a while and decided to make a component to call in instead after more troubleshooting (and googling) i decided on a form consisting of a button which i could insert
