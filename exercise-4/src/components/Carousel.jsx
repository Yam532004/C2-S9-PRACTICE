import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImage, setCurrentImage] = useState(0);

  /* You will need to hanle the click on left and right button */
  const iconL = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  const iconR = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };
  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={iconL} />
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        className="slide"
      />
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={iconR} />
    </div>
  );
};
