import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void; 
  loading: boolean;    
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, loading }) => {
  return (
    <button disabled={loading} className={css.loadBtn} onClick={onClick}>
      {loading ? "Loading" : "Load more"}
    </button>
  );
};

export default LoadMoreBtn;