export function VideoDemo() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">See it in Action</h2>
      <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden glow-border">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Io9HT3D5wgU?rel=0"
          title="Relaycode Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}