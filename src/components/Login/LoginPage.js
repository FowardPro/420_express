import styles from './LoginPage.module.css';
import { Facebook, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LeafImg from '../../assets/leaf.png';
import AppleImg from '../../assets/apple.png';
import GoogleImg from '../../assets/google.png';
import Footer from '../Footer/Footer';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.page}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.topHeader}>
            <span className={styles.icon}>🌿</span>
            <span className={styles.brand}>420 EXPRESS</span>
          </header>

          {/* Leaf image */}
          <img src={LeafImg} alt="Leaf Logo" className={styles.leaf} />

          {/* Title */}
          <h1 className={styles.title}>420 EXPRESS</h1>
          <h2 className={styles.subtitle}>Sign In</h2>

          {/* Form */}
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Username or Email"
              className={styles.input}
            />

            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={styles.input}
              />
              <div
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </div>
            </div>

            {/* Options */}
            <div className={styles.forgotRow}>
              <label className={styles.remember}>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className={styles.forgot}>Forgot Password?</a>
            </div>

            <div className={styles.or}>OR</div>

            {/* Social login */}
            <div className={styles.social}>
              <button type="button" className={styles.socialBtn}>
                <img src={AppleImg} alt="Apple" className={styles.socialIcon} />
              </button>
              <button type="button" className={styles.socialBtn}>
                <img src={GoogleImg} alt="Google" className={styles.socialIcon} />
              </button>
              <button type="button" className={styles.socialBtn}>
                <Facebook size={28} />
              </button>
            </div>

            <button type="submit" className={styles.signInBtn}>Sign in</button>
          </form>

          <p className={styles.signup}>
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>

          {/* Inline footer */}
          <footer className={styles.inlineFooter}>
            <p>© {new Date().getFullYear()} FowardPro. All rights reserved.</p>
          </footer>
        </div>
      </div>

      {/* Global site footer */}
      <Footer />
    </div>
  );
}
