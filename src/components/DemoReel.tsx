export default function DemoReel() {
  return (
    <div className="flex justify-center">
      <iframe
        className="aspect-video w-full sm:max-w-7xl sm:px-10"
        src="https://www.youtube.com/embed/kp3xrWf9zz8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
