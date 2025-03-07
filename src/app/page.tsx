// app/page.tsx
export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Welcome to My Next.js App 🚀</h1>
      <p className="mt-4 text-gray-700">{post.title}</p>
    </main>
  );
}
