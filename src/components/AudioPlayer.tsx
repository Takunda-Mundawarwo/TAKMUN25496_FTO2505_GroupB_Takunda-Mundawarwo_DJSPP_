import BackIcon from "../assets/back.svg";
import ForwardIcon from "../assets/forward.svg";
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
import "../styles/AudioPlayer.css";
import { useAudioStore } from "../hooks/useAudio";
import { formatTime } from "../utils/formatTime";
import { useEffect } from "react";

/**
 * The global audio player component
 *
 * @returns {JSX.Element} - The audio Player
 */

export default function AudioPlayer() {
  const source = useAudioStore((state) => state.source);
  const currentTime = useAudioStore((state) => state.currentTime);
  const duration = useAudioStore((state) => state.duration);
  const isPlaying = useAudioStore((state) => state.isPlaying);
  const togglePlay = useAudioStore((state) => state.togglePlay);
  const forwardTen = useAudioStore((state) => state.forwardTen);
  const replayTen = useAudioStore((state) => state.replayTen);
  const seek = useAudioStore((state) => state.seek);

  if (!source) return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--range-width",
      `${(currentTime / duration) * 100}%`,
    );
  }, [currentTime, duration]);

  return (
    <div className="audioPlayer glass">
      <div className="audioEpisode">
        <img src={source.image} alt={`${source.title} cover Image`} />
        <div className="audioDetails">
          <h4>{source.title}</h4>
          <p>{source.showTitle}</p>
        </div>
      </div>

      <div className="audioWrapper">
        <div className="audioControls">
          <img
            src={BackIcon}
            alt="Rewind 10 seconds"
            onClick={() => replayTen()}
          />
          <img
            src={isPlaying ? PauseIcon : PlayIcon}
            alt={isPlaying ? "Pause Audio Playback" : "Play Audio"}
            onClick={togglePlay}
          />
          <img
            src={ForwardIcon}
            alt="Fast Forward 30s"
            onClick={() => forwardTen()}
          />
        </div>
        <div className="progressBar">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            className="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => {
              seek(Number(e.target.value));
            }}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
