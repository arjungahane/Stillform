import React from 'react';

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Aura Table Lamp',
    category: 'Lighting',
    price: 185,
    description: 'Moulded glass base with hand-spun aluminum shade.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'p2',
    name: 'Kanso Ceramic Vase',
    category: 'Ceramics',
    price: 64,
    description: 'Coarse stoneware with a matte dolomite glaze.',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'p3',
    name: 'Sora Lounge Chair',
    category: 'Furniture',
    price: 620,
    description: 'Solid oiled oak frame with textured wool upholstery.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'p4',
    name: 'Forma Serving Bowl',
    category: 'Kitchen',
    price: 48,
    description: 'Hand-thrown terracotta with interior satin enamel.',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'p5',
    name: 'Taktil Linen Throw',
    category: 'Textiles',
    price: 95,
    description: '100% washed European flax with fringe details.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'p6',
    name: 'Monolith Pedestal',
    category: 'Objects',
    price: 210,
    description: 'Honed limestone block for display or seating.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80',
  },
];

export default function ProductList({ onAddToCart = () => {} }) {
  return (
    <section className="product-grid" aria-label="Products">
      {PRODUCTS.map((product) => (
        <article key={product.id} className="product-card">
          <div className="product-image-wrap">
            <img 
              src={product.image} 
              alt={product.name} 
              loading="lazy" 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=80';
              }}
            />
          </div>
          <div className="product-info">
            <div className="product-meta">
              <span className="product-category">{product.category}</span>
              <span className="product-price">${product.price}</span>
            </div>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <button 
              type="button" 
              className="add-to-cart-btn"
              onClick={() => onAddToCart(product)}
            >
              Add to Bag
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}