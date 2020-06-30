import React from "react";

const QuotesBox = () => {
  return (
    <div>
      <div className="quote-text-container">
        <p className="quote-text">
          <strong>"</strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          facilisis quam et pulvinar luctus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse vitae vestibulum risus.
          Vestibulum ultricies posuere turpis sed condimentum. In nec justo et
          nulla facilisis imperdiet. Morbi condimentum scelerisque risus, et
          lacinia turpis fringilla at. Proin eget.
          <strong>"</strong>
        </p>
        <p className="quote-author"> - Author</p>
      </div>
      <div className="next-button">
        <input
          id="nextid"
          type="button"
          value="New quote"
          onClick={() => console.log("clicked")}
        />
      </div>
    </div>
  );
};

export default QuotesBox;
