import { Image, ImageProps } from "@chakra-ui/react";

import Meh from "../assets/meh.png";
import ThumbsUp from "../assets/thumbs-up.png";
import BullsEye from "../assets/bulls-eye.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh" },
    4: { src: ThumbsUp, alt: "recommended" },
    5: { src: BullsEye, alt: "exceptional" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
