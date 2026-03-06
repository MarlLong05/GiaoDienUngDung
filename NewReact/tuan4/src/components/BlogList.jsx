import { Link } from "react-router-dom";

function BlogList() {
  const blogs = [
    { id: 1, title: "React Basic" },
    { id: 2, title: "React Router Guide" },
    { id: 3, title: "Hooks Overview" }
  ];

  return (
    <div>
      <h2>Blog List</h2>

      {blogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            {blog.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;