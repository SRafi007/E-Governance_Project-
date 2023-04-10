import axios from "axios"
import NavbarCustom from "./components/NavbarCustom";

export default function feedback({data}){
    return(
        <>
        feedback
        <NavbarCustom/>
        <ul>
            {data.map(item=>(
                <>
                <li >Date:<p>{item.date}</p></li>
                <li >citizen Id:<p>{item.citizenId}</p></li>
                <li >feedback:<p>{item.feedback}</p></li>
                </>
            ))}
        </ul>
        </>
    )
}
export async function getServerSideProps(){
    const res=await axios.get('http://localhost:3000/citizen/displayFeedback')
    const data=await res.data;
    console.log(data);
    return{props:{data}}
}