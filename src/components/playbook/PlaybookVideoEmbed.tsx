import type { PlaybookVideo } from "@/data/playbook-content";

interface Props {
  videos: PlaybookVideo[];
}

export default function PlaybookVideoEmbed({ videos }: Props) {
  return (
    <div
      className={`mt-8 mb-2 grid gap-5 ${
        videos.length === 1
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {videos.map((video, i) => (
        <figure key={i}>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-dark-500">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
          </div>
          {video.caption && (
            <figcaption className="mt-2.5 text-xs text-gray-400 text-center leading-relaxed">
              {video.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
