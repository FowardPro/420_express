import styles from './Footer.module.css';
import {
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* Brand Info */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🌿</span>
            <span className={styles.logoText}>420 Express</span>
          </div>
          <p className={styles.description}>
            Premium cannabis delivery service bringing quality products directly to your door with security, discretion, and style.
          </p>
          <div className={styles.social}>
            <Instagram size={16} />
            <Twitter size={16} />
            <Facebook size={16} />
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.links}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Partner Stores</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Become a Driver</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Legal</h4>
          <ul className={styles.links}>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Compliance</a></li>
            <li><a href="#">Age Verification</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Newsletter</h4>
          <p className={styles.newsDescription}>
            Subscribe to get updates on new products and special promotions.
          </p>
          <div className={styles.newsForm}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.input}
            />
            <button className={styles.submitBtn}>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
