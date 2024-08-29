export default function Create() {
  return (
    <form>
      <h1>Create</h1>
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
