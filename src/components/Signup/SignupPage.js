import styles from './SignupPage.module.css';
import { Eye, EyeOff, UploadCloud } from 'lucide-react';
import { useState } from 'react';
import LeafImg from '../../assets/leaf.png';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.icon}>🌿</span>
          <span className={styles.brand}>420 EXPRESS</span>
        </header>

        <img src={LeafImg} alt="Leaf Logo" className={styles.leaf} />

        <button className={styles.roleBtn}>Customer</button>

        <h1 className={styles.title}>Register as customer</h1>
        <p className={styles.subtitle}>Join the 420 fam — Add personal details</p>

        <form className={styles.form}>
          <input type="text" placeholder="Full Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="date" placeholder="Birthdate" className={styles.input} />

          <div className={styles.passwordWrapper}>
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" className={styles.input} />
            <div className={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </div>
          </div>

          <div className={styles.passwordWrapper}>
            <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" className={styles.input} />
            <div className={styles.eyeIcon} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </div>
          </div>

          {/* Upload area */}
          <div className={styles.uploadCard}>
            <UploadCloud size={32} className={styles.uploadIcon} />
            <p className={styles.uploadText}>Upload a selfie for identity verification</p>
            <input type="file" id="fileUpload" className={styles.fileInput} />
            <label htmlFor="fileUpload" className={styles.uploadBtn}>Select Photo</label>
            <p className={styles.uploadNote}>This will be used for ID verification during delivery</p>
          </div>

          <button type="submit" className={styles.submitBtn}>Let’s Roll</button>
        </form>

        <p className={styles.loginPrompt}>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
