import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

type ImageItem = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  slug: string;
};

type ImageGalleryProps = {
  items: ImageItem[];
  onImageClick: (url: string) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.list}>
      {items.map(({ id, urls, slug }) => (
        <li key={id} className={css.item}>
          <ImageCard imgUrl={urls.small} imgDesc={slug} onclick={onImageClick} largeUrl={urls.regular} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;