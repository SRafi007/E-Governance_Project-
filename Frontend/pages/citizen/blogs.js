import styles from '../../styles/citizen/blogs.module.css'
import Navbar from '../citizen/components/NavbarCustom'
import Image from 'next/image'
//import img1 from '../../public/image/citizen/cover1'
const  blogs=()=>{
    return(
        <>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.card}>
              <span>Tips for you Healt</span>
              <p></p>
            /

       
            </div>

        </div>
        </>
    )
}
export default blogs;