import MyLayout from "./component/layout";
import Header from "./component/header";

export default function aboutDoctor() {
  const abouts = ["Name : Rasel Ahmed","Age : 23","Specialist : Cardiologist","CollegeName: Dhaka Medical College"];
  return (
    <>
      <MyLayout title="About" />
      <h3> About</h3>
      <ul>
        {abouts.map((about) => (
          <li key={about}>{about}</li>
        ))}
      </ul>
    </>
  );
}