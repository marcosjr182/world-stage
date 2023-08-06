const SETTINGS = {
  youtube: (embedId: string) => ({
    width: "853",
    height: "480",
    src: `https://www.youtube.com/embed/${embedId}`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
  }),
};

type VideoProps = {
  title: string;
  embedId: string;
  platform: "youtube";
};

export function Video({ platform, title, embedId }: VideoProps) {
  const generateIframeProps = SETTINGS[platform];
  const iframeProps = generateIframeProps(embedId);

  return (
    <div className="video-responsive">
      <iframe {...iframeProps} title={title} />
    </div>
  );
}
