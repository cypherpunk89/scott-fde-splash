import { scottIntroVideoUrl } from "../alexConfig";

export default function ScottVideoIntro() {
  return (
    <section className="alexVideoIntro" aria-labelledby="scott-video-title">
      <div className="alexVideoCard">
        <div className="alexVideoFrame">
          <video className="alexVideoPlayer" controls preload="metadata">
            <source src={scottIntroVideoUrl} type="video/mp4" />
            Your browser does not support embedded video playback.
          </video>
        </div>

        <div className="alexVideoCopy">
          <p className="alexVideoEyebrow">Scott intro video</p>
          <h2 id="scott-video-title">Say hello to Scott.</h2>
          <p>
            Get a direct look at Scott&apos;s field communications, network
            support, and client-facing deployment background before you launch
            Alex.
          </p>
          <p className="alexVideoNote">
            Preview Scott&apos;s intro here in the same format as the Alex card,
            with the video leading and the copy alongside it.
          </p>
        </div>
      </div>
    </section>
  );
}