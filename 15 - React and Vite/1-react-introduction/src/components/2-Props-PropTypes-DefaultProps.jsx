// CamelCase
import PropTypes from "prop-types";

// props (properties)
// props is an object
// share data between components
// if data is string use ""
// if different data type use {}

function Book() {
  return (
    <>
      <BookCard
        title="Atomic Habits"
        author="James Clear"
        rating={4.8}
        isAvailable={true}
      ></BookCard>
      <BookCard
        title="Rich Dad Poor Dad"
        author="Robert Kiyosaki"
        rating={4.8}
        isAvailable={false}
      ></BookCard>
      <BookCard
        title="The Laws of Human Nature"
        author="Robert Greene"
        rating={4.6}
        isAvailable={true}
      ></BookCard>
      <BookCard></BookCard>
    </>
  );
}

function BookCard(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Rating: {props.rating}</p>
      <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
  isAvailable: PropTypes.bool,
};

// defaultProps: set default values for props
BookCard.defaultProps = {
  title: "No Title",
  author: "No Author",
  rating: 0.0,
  isAvailable: false,
};
// propTypes: Ensure that passed value is of the correct data types.

export default Book;
