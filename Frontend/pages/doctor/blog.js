import MyLayout from "./component/layout";
import Link from "next/link";
import Header from "./component/header";

export default function blog() {
  const bloglists = ["Daily exercise helps to avoid incoming disease"];
  return (
    <>
      <MyLayout title="Blog" />
      <h3> Blogs</h3>
      
      <ul>
        {bloglists.map((blog) => (
          <li key={blog}>{blog}</li>
        ))}
      </ul>

      
    </>
  );
}
