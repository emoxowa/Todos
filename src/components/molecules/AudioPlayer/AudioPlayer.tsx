import { Button } from "antd";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import audioFile from "assets/my-audio.mp3";
import { CatImage1, CatImage2 } from "./StyledAudioPlayer";
import { useAudioPlayer, useCatAnimation } from "hooks";

export const AudioPlayer = (): JSX.Element => {
  const { isPlaying, toggleAudio, audioRef } = useAudioPlayer();

  const { showCat } = useCatAnimation(isPlaying);

  return (
    <div style={{ position: "relative" }}>
      <audio ref={audioRef} src={audioFile} />

      <Button
        type="primary"
        shape="circle"
        icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        onClick={toggleAudio}
        size="large"
      />

      {showCat && (
        <CatImage1
          src="https://media.tenor.com/kQA86PqyXZQAAAAi/small-dancing-white-cat-dance-funny.gif"
          alt="Cat"
        />
      )}

      {showCat && (
        <CatImage2
          src="https://media.tenor.com/AOdrE-TKs7cAAAAi/dancing-cat-cat-dance.gif"
          alt="Cat"
        />
      )}
    </div>
  );
};
