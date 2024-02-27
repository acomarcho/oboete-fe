export default function Home() {
  return (
    <div className="bg-hero-background bg-cover bg-bottom">
      <div className="max-w-wrapper mx-auto">
        <div className="px-8 py-16">
          <h1 className="text-4xl font-bold text-white">覚えて (Oboete)</h1>
          <p className="text-base text-blue-100 mt-4 max-w-[30ch]">
            Always remember, with the power of simplicity and spaced repetition.
          </p>
          <a
            href="/register"
            className="inline-block mt-12 bg-blue-200 text-blue-950 px-4 py-2 font-bold rounded-md transition-all hover:bg-blue-300 hover:cursor-pointer"
          >
            Start remembering, now!
          </a>
        </div>
      </div>
    </div>
  );
}
