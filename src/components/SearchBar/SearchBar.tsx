import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { FC, FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = (
      form.elements.namedItem("topic") as HTMLInputElement
    ).value.trim();
    if (!topic) {
      toast.error("Please enter something to search for!");
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <FaSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
