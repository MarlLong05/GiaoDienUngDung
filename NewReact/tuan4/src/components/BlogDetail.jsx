import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();

  return (
    <div>
      <h3>Blog Detail</h3>
      <p>Blog ID: {id}</p>
    </div>
  );
}

export default BlogDetail;