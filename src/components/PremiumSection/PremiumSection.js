import styles from './PremiumSection.module.css';
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function PremiumSection() {
  const stores = [
    {
      name: 'Green Leaf Dispensary',
      rating: 4.8,
      reviews: 235,
      distance: '2.3 km',
      time: '25–35 min',
      deal: 'Free delivery on orders over R600',
      image: '/images/greenleaf.jpg',
    },
    {
      name: 'CannaBliss Collective',
      rating: 4.6,
      reviews: 188,
      distance: '4.1 km',
      time: '35–45 min',
      deal: '10% off your first order',
      image: '/images/cannabliss.jpg',
    },
    {
      name: 'Highland Herbs',
      rating: 4.9,
      reviews: 312,
      distance: '3.5 km',
      time: '30–40 min',
      deal: 'Buy 3 get 1 free on select products',
      image: '/images/highland.jpg',
    },
  ];

  return (
    <section className={styles.section}>
      <span className={styles.tag}>🌿 Partner Dispensaries</span>
      <h2 className={styles.heading}>
        Premium Stores, <span className={styles.highlight}>Premium Products</span>
      </h2>
      <p className={styles.subheading}>
        We partner with the best cannabis dispensaries to ensure quality products and reliable service.
      </p>

      <div className={styles.cards}>
        {stores.map((store, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.image} style={{ backgroundImage: `url(${store.image})` }}>
              <div className={styles.storeName}>{store.name}</div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.rating}>
                <Star size={14} color="#facc15" />
                <span>{store.rating} <small>({store.reviews} reviews)</small></span>
              </div>
              <div className={styles.info}>
                <span><MapPin size={14} /> {store.distance}</span>
                <span><Clock size={14} /> {store.time}</span>
              </div>
              <div className={styles.deal}>{store.deal}</div>
              <button className={styles.viewBtn}>
                View Store <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.allStoresBtn}>
        View All Stores <ArrowRight size={16} />
      </button>
    </section>
  );
}
