import axios from 'axios';
import { useRouter } from 'next/router'
export default function message({data}){
  
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
           
                
                <li key={data.id}><p>{data.issue}</p></li>
                <li key={data.des}><p>des:{data.des}</p></li>
                <li key={data.status}><p>status:{data.status}</p></li>
                <li key={data.addedTime}><p>addedTime:{data.addedTime}</p></li>
                
            
        </ul>
        <button type="button" onClick={handleClick}>Back</button>
        </>
    )
}
 
export async function getServerSideProps(){
  
    const res=await axios.get('http://localhost:3000/citizen/myMedicalData')
    const data=res.data;
    console.log(data)
    return{props:{data}}
}