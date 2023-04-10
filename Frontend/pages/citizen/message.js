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
            {data.map(item=>(
                <>
                <li key={item.id}><p>{item.id}</p></li>
                <li key={item.senderMail}>Sender:<p>{item.senderMail}</p></li>
                <li key={item.message}>Message:<p>{item.message}</p></li>
                <li key={item.receiverMail}>Receiver:<p>{item.receiverMail}</p></li>
                </>
            ))}
        </ul>
        <button type="button" onClick={handleClick}>Back</button>
        </>
    )
}
 
export async function getServerSideProps({query}){
    const info=query.add;
    const res=await axios.get('http://localhost:3000/citizen/mailbox?add='+info)
    const data=res.data;
    console.log(data)
    return{props:{data}}
}