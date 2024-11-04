import css from './ImageCard.module.css';

type ImageCardProps = {
  largeUrl: string;
  imgUrl: string;
  imgDesc: string;
  onclick: (url: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ largeUrl, imgUrl, imgDesc, onclick }) => {
  const handleClick = () => {
    onclick(largeUrl);
  };

  return (
    <div className={css.wrap}>
      <img className={css.image} src={imgUrl} alt={imgDesc} onClick={handleClick} />
    </div>
  );
};

export default ImageCard;