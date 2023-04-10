import axios from 'axios';
import NavbarCustom from './components/NavbarCustom';
export default function printcard({data}){
    return(
        <>
        <NavbarCustom/>
        print
        <ul>
            <li><p>name:{data.name}</p></li>
            <li><p>nid:{data.nid}</p></li>
            <li><p>phoneNumber:{data.phoneNumber}</p></li>
            <li><p>email:{data.email}</p></li>
            <li><p>address:{data.address}</p></li>
            <li><p>bloodGroup:{data.bloodGroup}</p></li>
            <li><p>age:{data.age}</p></li>
            <li><p>gender:{data.gender}</p></li>
            <li><p>familyMembers:{data.familyMembers}</p></li>
            <li><p>maritalStatus:{data.maritalStatus}</p></li>
            <li><p>jobDes:{data.jobDes}</p></li>
            <li><p>postoffice:{data.postoffice}</p></li>
  
        </ul>
        </>
    )
}
export async function getServerSideProps(){
    const res =await axios.get('http://localhost:3000/citizen/printIDCard')
    const data=res.data;
    console.log(data)
    return{props:{data}}
}