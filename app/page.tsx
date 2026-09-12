export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <iframe
        title="Arena FPS"
        src="/game.html"
        className="h-screen w-full border-0"
        allow="pointer-lock"
      />
    </main>
  )
}

