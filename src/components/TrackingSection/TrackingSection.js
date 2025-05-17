import styles from './TrackingSection.module.css';
import RealTimeMapCard from './RealTimeMapCard';
import {
  ShieldCheck,
  CheckCircle,
  BadgeCheck,
  Camera,
  CarFront,
  MapPin,
} from 'lucide-react';

export default function TrackingSection() {
  const features = [
    {
      title: 'Age Verification',
      description: 'Government-issued ID verification ensures legal age compliance for all deliveries.',
      icon: BadgeCheck,
    },
    {
      title: 'Visual Confirmation',
      description: 'Self-verification with secure selfie matching or QR code scanning at delivery.',
      icon: Camera,
    },
    {
      title: 'Driver Safety Tools',
      description: 'Real-time alerts for traffic, law enforcement, and cameras for safer, smarter routes.',
      icon: CarFront,
    },
    {
      title: 'Geofencing & Route Planning',
      description: 'Secure delivery zones with optimized routes for speed and discretion.',
      icon: MapPin,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Secure Delivery</span>
        <h2 className={styles.heading}>
          Live <span className={styles.highlight}>Tracking</span> & Security
        </h2>
        <p className={styles.subheading}>
          Track your order in real-time with our secure delivery system designed for safety and privacy.
        </p>
      </div>

      <div className={styles.content}>
        {/* Left: Map Card */}
        <div className={styles.mapCard}>
          <RealTimeMapCard />
        </div>

        {/* Right: Features List */}
        <div className={styles.features}>
          <h3 className={styles.featuresTitle}>Advanced Security Features</h3>
          <div className={styles.featureList}>
            {features.map(({ title, description, icon: Icon }, index) => (
              <div key={index} className={styles.feature}>
                <Icon className={styles.featureIcon} size={20} />
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
