import { Link, useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  return (
    <div>
      <h1>Blog Title {id}</h1>
      <Link to='/'>Back</Link>
    </div>
  );
}
