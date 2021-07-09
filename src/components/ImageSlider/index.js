import React, { useEffect, useState } from "react";
import { Container, Image, LeftArrowBtn, RightArrowBtn } from "./ImageSlider";

const ImageSlider = ({ images, isOdd }) => {
  const [index, setIndex] = useState(0);
  const [hasLeft, setHasLeft] = useState(false);
  const [hasRight, setHasRight] = useState(false);

  useEffect(() => {
    // check if there is a left
    if (images[index - 1]) {
      setHasLeft(true);
    } else {
      setHasLeft(false);
    }

    // check if there is a right
    if (images[index + 1]) {
      setHasRight(true);
    } else {
      setHasRight(false);
    }
  }, [images, index]);

  // toggle to the left
  const toggleLeft = () => {
    setIndex(index - 1);
  };

  // toggle to the right
  const toggleRight = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <Container isOdd={isOdd}>
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

export default ImageSlider;
