import { db } from "@/utilities/db";
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

    redirect("/games");
  }

  return (
    <form action={handleDelete} style={{ marginTop: "20px" }}>
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
//this one gave me a bit of a headache trying to get "use client" and "use server" in the correct places, i knew the SQL to delete a game, i tried adding a button to the page, but got errors regarding client/server each time, i left it for a while and decided to make a component to call in instead after more troubleshooting i managed to find the best way was with a form entry (stack overflow i love you).
