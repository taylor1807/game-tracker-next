// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-center">
      <div className="p-6">
        <h1 className="text-5xl font-bold text-green-500 mb-4">
          404 - Not Found
        </h1>
        <p className="text-green-300 mb-6">
          You Should not be here, follow the link below to start again.
        </p>
        <Link
          href="/"
          className="bg-green-700 text-black px-4 py-2 rounded border border-green-500 hover:bg-green-600"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
