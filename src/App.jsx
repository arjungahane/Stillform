import React from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import ThemeToggle from './components/ThemeToggle';
import { useCart } from './hooks/useCart';

export default function App() {
  const cartState = useCart() || {};
  const { 
    cart = [], 
    addToCart = () => {}, 
    removeFromCart = () => {}, 
    clearCart = () => {}, 
    cartTotal = 0, 
    itemCount = 0 
  } = cartState;

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Stillform home">
          still<span>form</span><i aria-hidden="true">.</i>
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          <a className="nav-active" href="#collection">Shop</a>
          <a href="#story">Our story</a>
          <a href="#journal">Journal</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-bag" href="#cart" aria-label={`Shopping bag, ${itemCount} items`}>
            Bag <span>{String(itemCount).padStart(2, '0')}</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> The considered home</p>
            <h1 id="hero-title">A little less,<br />a lot <em>more.</em></h1>
            <p className="hero-description">
              Objects with a sense of purpose. Designed to be lived with, and loved for a long time.
            </p>
            <a className="text-link" href="#collection">Explore the collection <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" role="img" aria-label="Warm, minimal living room with thoughtfully chosen furniture">
            <div className="hero-art-caption"><span>01 / 04</span><span>Quiet forms, everyday rituals</span></div>
          </div>
          <div className="hero-index" aria-hidden="true">EST. 2021&nbsp; — &nbsp;COPENHAGEN</div>
        </section>

        <div className="store-layout" id="collection">
          <ProductList onAddToCart={addToCart} />
          <div id="cart">
            <Cart
              cart={cart}
              cartTotal={cartTotal}
              itemCount={itemCount}
              onRemove={removeFromCart}
              onClear={clearCart}
            />
          </div>
        </div>

        <footer className="site-footer" id="story">
          <a className="wordmark" href="#top">still<span>form</span><i aria-hidden="true">.</i></a>
          <p>Fewer things. Better things. Made to stay.</p>
          <span id="journal">© Stillform Studio 2025</span>
        </footer>
      </main>
    </div>
  );
}