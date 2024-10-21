import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

export default function Blog({ blog, handleBookMark }) {
  const {
    title,
    cover,
    author,
    posted_date,
    author_img,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="rounded-lg w-full mb-8"
        src={cover}
        alt={`Cover picture of the tittle ${title}`}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 mb-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} Min read</span>
          <button
            onClick={() => handleBookMark(blog)}
            className="ml-2 text-blue-500"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p>
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>
            <a href=""> #{hashtag}</a>
          </span>
        ))}
      </p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func.isRequired,
};
