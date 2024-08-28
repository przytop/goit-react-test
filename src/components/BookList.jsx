import PropTypes from "prop-types";

export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};
