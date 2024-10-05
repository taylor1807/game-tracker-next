import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-green-500 p-6">
      <h1 className="text-6xl font-bold mb-4 text-center">
        Welcome To My Page About Some Of the Top Trending Games At The Moment
      </h1>
      <p className="text-2xl mb-8 text-center">
        Each Game has its own dedicated page with details about it, where you
        can share your thoughts and feelings.
      </p>
      <Link
        href="/games"
        className="text-4xl px-8 py-4 bg-green-700 hover:bg-green-600 text-black border border-green-500 rounded-lg"
      >
        Begin
      </Link>
    </div>
  );
}
