const products = [
  {
    id: 'arc-lamp',
    name: 'Arc Table Lamp',
    category: 'Lighting',
    price: 189,
    color: 'sand',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',
    description: 'A softer kind of statement piece.',
  },
  {
    id: 'form-chair',
    name: 'Form Lounge Chair',
    category: 'Furniture',
    price: 649,
    color: 'clay',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85',
    description: 'Made for the long way home.',
  },
  {
    id: 'stoneware-set',
    name: 'Stoneware Set',
    category: 'Dining',
    price: 84,
    color: 'sage',
    image: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=900&q=85',
    description: 'Everyday essentials, considered.',
  },
  {
    id: 'linen-throw',
    name: 'Linen Throw',
    category: 'Textiles',
    price: 128,
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
    description: 'A little more comfort, naturally.',
  },
];

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export default function ProductList({ onAddToCart }) {
  return (
    <section className="collection" aria-labelledby="collection-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Thoughtfully chosen</p>
          <h2 id="collection-title">Made for living</h2>
        </div>
        <span className="product-count">04 pieces</span>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <article className="product-card" key={product.id}>
            <div className={`product-image image-${product.color}`}>
              <img src={product.image} alt={product.name} loading={index > 1 ? 'lazy' : 'eager'} />
              <span className="product-category">{product.category}</span>
              <button
                className="add-button"
                type="button"
                onClick={() => onAddToCart(product)}
                aria-label={`Add ${product.name} to cart`}
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
            <div className="product-details">
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <span className="product-price">{currency.format(product.price)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
