const BookmarkButton = ({ bookmarked, onBookmark }) => (
  <button onClick={onBookmark}>
    <i className={`fa fa-bookmark${bookmarked ? " active" : ""}`} />
  </button>
);

export default BookmarkButton;
