import styles from './LoginPage.module.css';
import { Apple, Facebook, Eye, EyeOff } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.topHeader}>
          <span className={styles.icon}>🌿</span>
          <span className={styles.brand}>420 EXPRESS</span>
        </header>

        <div className={styles.leaf}>🍁</div>

        <h1 className={styles.title}>420 EXPRESS</h1>
        <h2 className={styles.subtitle}>Sign In</h2>

        <form className={styles.form}>
          <input type="text" placeholder="Username or Email" className={styles.input} />

          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={styles.input}
            />
            <div className={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </div>
          </div>

          <div className={styles.forgotRow}>
            <label className={styles.remember}>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className={styles.forgot}>Forgot Password?</a>
          </div>

          <div className={styles.or}>or</div>

          <div className={styles.social}>
            <button type="button" className={styles.socialBtn}><Apple size={20} /></button>
            <button type="button" className={styles.socialBtn}><FaGoogle size={20} /></button>
            <button type="button" className={styles.socialBtn}><Facebook size={20} /></button>
          </div>

          <button type="submit" className={styles.signInBtn}>Sign in</button>
        </form>

        <p className={styles.signup}>
          Don’t have an account? <Link to="#">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
