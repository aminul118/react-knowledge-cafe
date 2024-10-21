import PropTypes from "prop-types";

export default function Blog({ blog }) {
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
    <div>
      <img className="rounded-lg" src={cover} alt={`Cover picture of the tittle ${title}`} />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} Min read</span>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p>
        {hashtags.map((hashtag,idx) => (
          <span key={idx}>
            <a href="">#{hashtag}</a>
          </span>
        ))}
      </p>
    </div>
  );
}
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
