import { useEffect, useState } from "react";

export const useCatAnimation = (isPlaying: boolean) => {
  const [showCat, setShowCat] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      setShowCat(true);
    } else {
      setShowCat(false);
    }
  }, [isPlaying]);

  return { showCat };
};
