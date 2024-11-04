import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

type SearchBarProps = {
  onSearch: (topic: string) => void;
};

const initialValues = {
  topic: "",
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (values: { topic: string }) => {
    if (values.topic.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSearch(values.topic);
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSearch}>
        <Form className={css.form}>
          <Field
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;