import axios from 'axios';
import { useRouter } from 'next/router'
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/CustomNavbar';
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
        <SessionCheck/>
        <CustomNavbar/>
        
        <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center">
      <div className="max-w-md w-full  bg-white shadow-md rounded-md ">
        <div className="text-xl w-md font-bold p-4 border-b border-green-200">
          {data[0].name}'s History <button className="flex flex-row text-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 ml-auto bg-green-500 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline" type="button" onClick={handleClick}>Back</button>

        </div>
        <div className="px-4 py-2  overflow-y-auto">
          {data[0].history.map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.375 3.854c.3-.305.7-.475 1.125-.475.425 0 .825.17 1.125.475l6.375 6.333c.3.305.5.71.5 1.142s-.2.837-.5 1.142l-6.375 6.333c-.3.305-.7.475-1.125.475-.425 0-.825-.17-1.125-.475-.3-.305-.5-.71-.5-1.142 0-.432.2-.837.5-1.142l5.25-5.222H3.25c-.553 0-1-.448-1-1s.447-1 1-1h10.25l-5.25-5.222c-.3-.305-.5-.71-.5-1.142 0-.432.2-.837.5-1.142z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{item.des}</div>
                <div className="text-xs text-gray-500">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        
        </>
    )
}
 
export async function getServerSideProps({query}){
    const info=query.id;
    
    const res=await axios.get('http://localhost:3000/citizen/history/'+info)
    const data=res.data;
    console.log(data)
    return{props:{data}}
}