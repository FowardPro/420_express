import styles from './WelcomeSection.module.css';
import { CheckCircle, MapPin, ArrowRight } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.tag}>🌿 Fast, Secure Delivery</span>
        <h1 className={styles.heading}>
          Premium Cannabis,<br />
          <span className={styles.highlight}>Delivered</span> to<br />
          Your Door
        </h1>
        <p className={styles.description}>
          Experience discrete, secure cannabis delivery with real-time tracking and exclusive deals from premium partners.
        </p>
        <div className={styles.buttons}>
          <button className={styles.orderBtn}>Order Now</button>
          <button className={styles.trackBtn}>Track Delivery</button>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <CheckCircle size={18} className={styles.icon} />
            <span>Secure & Discrete</span>
          </div>
          <div className={styles.feature}>
            <CheckCircle size={18} className={styles.icon} />
            <span>Fast Delivery</span>
          </div>
          <div className={styles.feature}>
            <CheckCircle size={18} className={styles.icon} />
            <span>Live Tracking</span>
          </div>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className={styles.imageContainer}>
        <div className={styles.mockup}>
          <div className={styles.mockupHeader}>
            <div className={styles.circle}></div>
            <span className={styles.mockupTitle}>420 Express</span>
            <div className={styles.dot}></div>
          </div>

          <div className={styles.sectionBox}>
            <span className={styles.deliveringTo}>Delivering to</span>
            <div className={styles.location}>
              <MapPin size={14} />
              <span>Cape Town, South Africa</span>
            </div>
          </div>

          <div className={styles.sectionBox}>
            <span>Popular Stores</span>
          </div>

          <div className={styles.sectionRow}>
            <div className={styles.sectionSmallBox}>Flowers</div>
            <div className={styles.sectionSmallBox}>Edibles</div>
          </div>

          <button className={styles.trackOrderBtn}>
            Track Order <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
