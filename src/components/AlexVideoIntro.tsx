import { alexAvatarUrl, alexIntroVideoUrl } from "../alexConfig";

export default function AlexVideoIntro() {
  return (
    <section className="alexVideoIntro" aria-labelledby="alex-video-title">
      <div className="alexVideoCard">
        <div className="alexVideoCopy">
          <p className="alexVideoEyebrow">Alex intro video</p>
          <h2 id="alex-video-title">Meet Alex</h2>
          <p>
            Alex is Scott Jewett&apos;s AI assistant for exploring his Forward
            Deployed Engineer background, including field deployments, military
            communications, infrastructure work, AI projects, and real-world
            product execution.
          </p>
          <p className="alexVideoNote">
            Preview Alex&apos;s intro here before launching the assistant.
          </p>
        </div>

        <div className="alexVideoFrame">
          <video
            className="alexVideoPlayer"
            controls
            preload="metadata"
            poster={alexAvatarUrl}
          >
            <source src={alexIntroVideoUrl} type="video/mp4" />
            Your browser does not support embedded video playback.
          </video>
          <div className="alexVideoFallback" aria-hidden="true">
            <img src={alexAvatarUrl} alt="" />
            <div>
              <strong>Intro video placeholder</strong>
              <span>Expected file: public/alex-fde-intro.mp4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}