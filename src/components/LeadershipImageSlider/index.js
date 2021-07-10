import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  LeftArrowBtn,
  RightArrowBtn,
} from "./LeadershipImageSlider";

const LeadershipImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [hasLeft, setHasLeft] = useState(false);
  const [hasRight, setHasRight] = useState(false);

  useEffect(() => {
    // if there is a left
    if (images[index - 1]) {
      setHasLeft(true);
    } else {
      setHasLeft(false);
    }

    // if there is a right
    if (images[index + 1]) {
      setHasRight(true);
    } else {
      setHasRight(false);
    }
  }, [images, index]);

  const toggleLeft = () => {
    let nextIndex = index - 1;
    if (nextIndex >= 0) {
      setIndex(nextIndex);
    }
  };

  const toggleRight = () => {
    let nextIndex = index + 1;
    if (nextIndex < images.length) {
      setIndex(nextIndex);
    }
  };

  return (
    <>
      <Container>
        {/* Left Button */}
        {hasLeft && <LeftArrowBtn onClick={toggleLeft}>{"<"}</LeftArrowBtn>}

        {/* Image */}
        <Image src={images[index]}></Image>

        {/* Right Button */}
        {hasRight && <RightArrowBtn onClick={toggleRight}>{">"}</RightArrowBtn>}
      </Container>
    </>
  );
};

export default LeadershipImageSlider;
