import MyLayout from "./component/layout";
import Header from "./component/header";

export default function registration() {
  return (
    <>
      <MyLayout title="Registration" />
      <h3><center>Registration</center></h3>
      <form>
      <label>Name : </label> <br></br>
      <input type="text-box" placeholder="enter your name"></input><br></br>
      <label>Age : </label> <br></br>
      <input type="text-box" placeholder="enter your age"></input><br></br>
      <label>College Name : </label> <br></br>
      <input type="text-box" placeholder="enter your college name"></input><br></br>
      <label>Specialist : </label> <br></br>
      <input type="text-box" placeholder="enter your Speciality"></input><br></br>
      <label>Email : </label> <br></br>
      <input type="email" placeholder="enter your email"></input><br></br>
      <label>Password : </label> <br></br>
      <input type="password" placeholder="enter your password"></input><br></br>
      <label>Upload Photo: </label> <br></br>
      <input type="file"/><br></br> <br></br>
      <button type="submit" placeholder="Submit">Submit</button>
      </form>
    </>
  );
}