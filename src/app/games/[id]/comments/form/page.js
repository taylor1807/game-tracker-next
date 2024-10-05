import CommentsForm from "@/components/CommentsForm";

export default function FormPage({ params }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 p-8">
      <CommentsForm gameId={params.id} />
    </div>
  );
}
