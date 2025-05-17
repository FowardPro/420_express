import styles from './TopSellingProducts.module.css';
import { Plus, ArrowRight } from 'lucide-react';

export default function TopSellingProducts() {
  const categories = ['All Products', 'Flower', 'Edibles', 'Concentrates', 'Vapes', 'Accessories'];

  const products = [
    {
      name: 'Northern Lights',
      type: 'Flower',
      thc: '22%',
      cbd: '0.1%',
      price: 'R250',
      image: '/images/northern-lights.jpg',
      sale: true,
    },
    {
      name: 'Blue Dream',
      type: 'Flower',
      thc: '19%',
      cbd: '0.5%',
      price: 'R280',
      image: '/images/blue-dream.jpg',
      sale: false,
    },
    {
      name: 'Sour Diesel',
      type: 'Flower',
      thc: '23%',
      cbd: '0.2%',
      price: 'R220',
      image: '/images/sour-diesel.jpg',
      sale: false,
    },
    {
      name: 'Girl Scout Cookies',
      type: 'Flower',
      thc: '25%',
      cbd: '0.1%',
      price: 'R300',
      image: '/images/girl-scout-cookies.jpg',
      sale: true,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.tag}>🌿 Featured Products</span>
          <h2 className={styles.heading}>
            Top-Selling <span className={styles.highlight}>Products</span>
          </h2>
          <p className={styles.subheading}>
            Explore our selection of premium cannabis products, hand-picked for quality and effect.
          </p>
        </div>
        <a href="#" className={styles.viewAll}>
          View All <ArrowRight size={14} />
        </a>
      </div>

      <div className={styles.filters}>
        {categories.map((cat, idx) => (
          <button key={idx} className={idx === 0 ? styles.activeFilter : styles.filter}>
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.products}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${product.image})` }}
            >
              {product.sale && <span className={styles.saleBadge}>% SALE</span>}
              <div className={styles.addIcon}><Plus size={14} /></div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.meta}>
                THC {product.thc} | CBD {product.cbd}
              </div>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.typePrice}>
                <span>{product.type}</span>
                <span className={styles.price}>{product.price}</span>
              </div>
              <button className={styles.cartBtn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
