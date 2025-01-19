import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ imageInfo }) => {
  const { src, alt } = imageInfo;
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className="w-full h-full object-cover"
    />
  );
};

export default MyImage;
