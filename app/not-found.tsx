export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600">The page you’re looking for does not exist.</p>
    </main>
  );
}
