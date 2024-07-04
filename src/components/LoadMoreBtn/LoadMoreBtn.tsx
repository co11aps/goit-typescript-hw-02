import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProp {
  onLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProp> = ({ onLoadMore }) => {
  return (
    <button className={css.btn} onClick={onLoadMore}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
