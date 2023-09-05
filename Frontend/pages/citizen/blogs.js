import styles from '../../styles/citizen/blogs.module.css'
import Navbar from './components/CustomNavbar'
import SessionCheck from './components/sessionCheck';
import Footer from './components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';

//import img1 from '../../public/image/citizen/cover1'
const  blogs=({data})=>{
    const router = useRouter();
    const  backRoute=()=>{
        router.back();
      };
    return(
        <>
        <SessionCheck/>
        <Navbar/>
        <div className="flex justify-between p-4 bg-gradient-to-r from-yellow-100 to-green-100 border-b border-gray-300 hover:bg-gray-700">
    <button onClick={backRoute}
                        class="flex flex-row text-center  space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold rounded-tr-lg rounded-bl-lg  hover:bg-green-800 md:w-auto md:inline md:mt-0 md:ml-4 bg-red-100 hover:bg-green-200 focus:bg-green-800 focus:outline-none focus:shadow-outline">
                        Back

                    </button>
                   
        
    </div>
         

    <div className="flex justify-center w-full bg-gradient-to-r from-yellow-100 to-green-100  ">
    
      <div className="grid grid-cols-1 flex justify-between px-2 sm:grid-cols-2 md:grid-cols-3 gap-4  rounded-lg ">
        {data.map((item)=>(
        
        <div className="flex items-center p-4 rounded-mg border-b border-gray-300 bg-gradient-to-br from-gray-500 to-green-500 hover:bg-gray-700">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-400"></div>
          <div className="ml-4">
            <p className="font-semibold">Doctor</p>
            <p className="text-white font-bold">{item.blogtitle}</p>
            <p className="text-white font-bold">{item.blogpost}</p>
          </div>
        </div>  
        ))}     
      </div>
    </div>
        <Footer/>
        </>
    )
}
export default blogs;
  export async function getServerSideProps() {
   
          const response = await axios.get('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/allblogs');
          const data = await response.data;
        
      return { props: { data } }
      }