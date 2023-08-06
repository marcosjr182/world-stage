import backgroundImage from "../assets/concert-audience.jpg";

export function WelcomeBanner() {
  return (
    <div className="hero min-w-screen mb-5" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content font-bold text-2xl text-center text-accent-content antialiased md:subpixel-antialiased">
        <div className="my-10">
          <span>It's time to see what the world sounds like</span>
        </div>
      </div>
    </div>
  );
}
