import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>🌿</div>
        <span className={styles.logoText}>420 Express</span>
      </div>

      {/* Navigation */}
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/stores" className={styles.navLink}>Stores</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
      </nav>

      {/* Actions */}
      <div className={styles.actions}>
        <ShoppingCart size={18} className={styles.icon} />
        <User size={18} className={styles.icon} />
        <Link to="/login" className={styles.signIn}>Sign in</Link>
        <button className={styles.signUpBtn}>Sign Up</button>
      </div>
    </header>
  );
}
