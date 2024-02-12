import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li >
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>

                <li>
                    
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>My projects costs</span>  &copy; 2024 By Daniel Rocha
            </p>

        </footer>

    );
}

export default Footer