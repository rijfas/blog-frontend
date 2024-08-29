import { useParams } from "react-router-dom";

export default function Update() {
  const { id } = useParams();

  return (
    <form>
      <h1>Update Blog {id}</h1>
      <label htmlFor='title'>Title</label>
      <br />
      <input type='text' />
      <br />
      <label htmlFor='content'>Content</label>
      <br />
      <textarea name='content'></textarea>
      <br />
      <input type='submit' value='Create' />
    </form>
  );
}
