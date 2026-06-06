function VideoSection() {

  return (
    <section className="video-section">
      <h2 className="video-title">How Planetary Data Helps Us Understand Space</h2>
      <video
        controls
        autoPlay
        muted
        loop
        width="600"
      >
        <source src="./space-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default VideoSection;