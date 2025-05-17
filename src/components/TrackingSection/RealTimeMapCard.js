import styles from './RealTimeMapCard.module.css';
import { Shield } from 'lucide-react';

export default function RealTimeMapCard() {
  return (
    <div className={styles.card}>
      <Shield size={28} className={styles.icon} />
      <h3 className={styles.title}>Real-Time Map</h3>
      <p className={styles.description}>
        For security and privacy reasons, the live map is only visible when you're tracking an actual order.
      </p>
      <button className={styles.button}>Place an Order</button>
    </div>
  );
}
