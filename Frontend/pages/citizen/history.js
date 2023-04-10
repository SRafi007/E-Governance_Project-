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
        Your History<button type="button" onClick={handleClick}>Back</button>
        <ul>
            {data.map(item=>(
                <>
                <li key={item.name}><p>{item.name}</p></li>
                {item.history.map(his=>(
                    <>
                    <li key={his.des}><p>activity:{his.des}</p></li>
                    <li key={his.time}><p>time:{his.time}</p></li>
                    <li key={his.citizenId}><p>your Id:{his.citizenId}</p></li>
                    </>
                ))}
                </>
            ))}
        </ul>
        
        </>
    )
}
 
export async function getServerSideProps({query}){
    const info=query.id;
    
    const res=await axios.get('http://localhost:3000/citizen/history/2')
    const data=res.data;
    console.log(data)
    return{props:{data}}
}