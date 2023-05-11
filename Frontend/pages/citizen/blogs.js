import styles from '../../styles/citizen/blogs.module.css'
import Navbar from './components/CustomNavbar'
import SessionCheck from './components/sessionCheck';
import Footer from './components/Footer';

//import img1 from '../../public/image/citizen/cover1'
const  blogs=()=>{
    return(
        <>
        <SessionCheck/>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.card}>
              <span>Tips for you Healt</span>
              <p></p>
            

       
            </div>

        </div>
        <Footer/>
        </>
    )
}
export default blogs;