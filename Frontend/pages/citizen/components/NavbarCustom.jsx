import Link from 'next/link';
import styles from '../../../styles/citizen/Navbar.module.css';
import Image from 'next/image'
import axios from 'axios';

const NavbarCustom = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/citizen" passHref>
          
            
            <span>E governance</span>
          
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/citizen/profile" passHref>
           Profile
          </Link>
        </li>
        <li className={styles.dropdown}>
          <Link href="/" passHref>
            Services
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/service1" passHref>
                Service 1
              </Link>
            </li>
            <li>
              <Link href="/service2" passHref>
                Service 2
              </Link>
            </li>
            <li>
              <Link href="/service3" passHref>
                Service 3
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/company" passHref>
            Campagin
          </Link>
        </li>
        <li>
          <Link href="/citizen/blogs" passHref>
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/citizen/aboutus" passHref>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/citizen/feedback" passHref>
            feedback
          </Link>
        </li>
        <li>
          <Link href="/citizen/signin" passHref>
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCustom;
