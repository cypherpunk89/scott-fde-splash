import { useRef, useState, type MouseEvent } from "react";

import { trackEvent } from "../analytics";
import { alexAvatarUrl, alexIntroVideoUrl } from "../alexConfig";

export default function AlexAssistant() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  function resetToMutedLoop() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.currentTime = 0;
    video.loop = true;
    setAudioEnabled(false);

    void video.play().catch(() => {
      // If autoplay is blocked after resetting, keep the control state muted.
    });
  }

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
      resetToMutedLoop();
      trackEvent("ask_alex_audio_toggle", {
        source: "floating_button",
        state: "muted",
      });
      return;
    }

    video.pause();
    video.currentTime = 0;
  video.loop = false;
    video.muted = false;
    video.volume = 0.85;

    video
      .play()
      .then(() => {
        setAudioEnabled(true);
        trackEvent("ask_alex_audio_toggle", {
          source: "floating_button",
          state: "playing_from_start_with_sound",
        });
      })
      .catch(() => {
        video.muted = true;
        setAudioEnabled(false);
      });
  }

  function handleAudioEnded() {
    resetToMutedLoop();
    trackEvent("ask_alex_audio_toggle", {
      source: "floating_button",
      state: "auto_muted_after_one_run",
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
            loop={!audioEnabled}
            muted={!audioEnabled}
            playsInline
            preload="metadata"
            poster={alexAvatarUrl}
            onEnded={handleAudioEnded}
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