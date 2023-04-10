import MyLayout from "./component/layout";
import Link from "next/link";
import Header from "./component/header";

export default function singIn() {
  return (
    <>
      <MyLayout title="Sign In" />
      <h3><center>Sign In</center></h3>
      <form>
        <div>
        <label>Username : </label> <br></br>
        <input type="email" placeholder="enter your email"></input><br></br>
        <label>Password : </label><br></br>
        <input type="password" placeholder="enter your password"></input><br></br>
        <Link href="../doctor/forgotPassword">Forgot Password ?</Link><br></br>
        <button type="submit" placeholder="Submit">Submit</button>
        </div>
        
      </form>
   </>
  );
}