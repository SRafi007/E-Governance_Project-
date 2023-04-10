import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function MyLayout(props) {
  return (
    <>
      <Header title={props.title} />

      <nav>
        <div style={{ backgroundColor: "blue" }}>
          <Link href="/doctor"> Home &nbsp;</Link>
          <Link href="../doctor/aboutDoctor"> About&nbsp;</Link>
          <Link href="../doctor/blog">  Blog&nbsp;</Link>
          <Link href="../doctor/signIn"> Login&nbsp;</Link>
          <Link href="../doctor/signUp"> Registration&nbsp;</Link>
          <Link href="../doctor/createBlog">BlogPost</Link>
        </div>
      </nav>

      <main></main>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        &copy;2023 - E-Governance. All Rights Reserved
      </div>
    </>
  );
}
