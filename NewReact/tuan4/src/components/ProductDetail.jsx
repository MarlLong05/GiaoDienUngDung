import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h3>Product Detail</h3>
      <p>Bánh ngày tết:  {id}</p>
    </div>
  );
}