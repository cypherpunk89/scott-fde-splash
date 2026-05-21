import { useRef, useState, type MouseEvent } from "react";

import { trackEvent } from "../analytics";
import { alexAvatarUrl, alexIntroVideoUrl } from "../alexConfig";

export default function AlexAssistant() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  function handleClick() {
    trackEvent("ask_alex_cta_click", {
      source: "floating_button",
      destination: "/alex",
    });
  }

  function handleAudioToggle(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (audioEnabled) {
      video.muted = true;
      setAudioEnabled(false);
      trackEvent("ask_alex_audio_toggle", {
        source: "floating_button",
        state: "muted",
      });
      return;
    }

    video.pause();
    video.currentTime = 0;
    video.muted = false;
    video.volume = 0.85;

    video
      .play()
      .then(() => {
        setAudioEnabled(true);
        trackEvent("ask_alex_audio_toggle", {
          source: "floating_button",
          state: "playing_with_sound",
        });
      })
      .catch(() => {
        video.muted = true;
        setAudioEnabled(false);
      });
  }

  return (
    <div className="alexAssistantDock">
      <button
        type="button"
        className="alexAudioToggle"
        aria-pressed={audioEnabled}
        onClick={handleAudioToggle}
      >
        {audioEnabled ? "Mute sound" : "Enable sound"}
      </button>

      <a
        className="alexButton"
        href="/alex"
        aria-label="Ask Alex"
        onClick={handleClick}
      >
        <div className="alexAvatarWrap" aria-hidden="true">
          <video
            ref={videoRef}
            className="alexAvatarVideo"
            autoPlay
            loop
            muted={!audioEnabled}
            playsInline
            preload="metadata"
            poster={alexAvatarUrl}
          >
            <source src={alexIntroVideoUrl} type="video/mp4" />
          </video>
        </div>
        <div>
          <strong>Ask Alex</strong>
          <small>Scott’s FDE assistant</small>
        </div>
      </a>
    </div>
  );
}