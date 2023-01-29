import Link from 'next/link'
import styles from './Navbar.module.css';

export const Navbar = () => (
    <nav className={styles.conteiner}>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/english'>English grammar</Link></li>
            <li><Link href='/projects'>Projects</Link></li>
        </ul>
        <hr />
    </nav>
);
