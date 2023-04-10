import axios from 'axios';
import { useRouter } from 'next/router'
export default function bio({data}){
  
    const router = useRouter()
function handleClick() {
  
  if ( router.back()) {
   
  } else {
    // Handle the case where there is no previous page
  }
}
    return (
        <>
        Messages
        <ul>
           
                
            <li><p>address:{data.address}</p></li>
            <li><p>bloodGroup:{data.bloodGroup}</p></li>
            <li><p>age:{data.age}</p></li>
            <li><p>gender:{data.gender}</p></li>
            <li><p>familyMembers:{data.familyMembers}</p></li>
            <li><p>maritalStatus:{data.maritalStatus}</p></li>
            <li><p>jobDes:{data.jobDes}</p></li>
            <li><p>postoffice:{data.postoffice}</p></li>
                
            
        </ul>
        <button type="button" onClick={handleClick}>Back</button>
        </>
    )
}
 
export async function getServerSideProps(){
  
    const res=await axios.get('http://localhost:3000/citizen/getBio')
    const data=res.data;
    console.log(data)
    return{props:{data}}
}