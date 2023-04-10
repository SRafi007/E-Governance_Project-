import MyLayout from "./component/layout";
import Header from "./component/header";

export default function createBlog() {
  return (
    <>
      <MyLayout title="Create Blog" />
      <h3><center>Create Blog</center></h3>
      <form>
        <div>
        <label>Blog Title : </label> <br></br>
        <input type="text" placeholder="write your blog title"></input><br></br>
        <label>Write New Blog Content: </label> <br></br>
        <textarea type="textarea" placeholder="write your blog Content"></textarea><br></br>

        <button type="submit" placeholder="Post">Post</button>
        </div>
        
      </form>
   </>
  );
}