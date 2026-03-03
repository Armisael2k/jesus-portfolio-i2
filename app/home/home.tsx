export function Welcome() {
  return (
    <main className="mocha bg-ctp-base min-h-screen">
      <div className="backdrop-blur-sm py-6">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-stretch gap-1">
            <div className="text-ctp-red  text-2xl leading-none">JL</div>
            <div className="w-2.5 my-0.5 bg-ctp-text animate-console-pulse" />
          </div>
          <div className="text-ctp-text flex gap-18">
            <div>home</div>
            <div>projects</div>
            <div>contact</div>
          </div>
        </div>
      </div>
    </main>
  );
}
