const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

export default function Cart({ cart, cartTotal, itemCount, onRemove, onClear }) {
  return (
    <aside className="cart-panel" aria-labelledby="cart-title">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">Your selection</p>
          <h2 id="cart-title">Shopping bag</h2>
        </div>
        <span className="cart-count" aria-label={`${itemCount} items`}>
          {String(itemCount).padStart(2, '0')}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">✳</span>
          <h3>Your bag is taking a break</h3>
          <p>Find something lovely to bring home.</p>
        </div>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <div className={`cart-item-art image-${item.color}`} aria-hidden="true">
                  <span>{item.name.charAt(0)}</span>
                </div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Qty {item.quantity}</p>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
                <span className="cart-item-price">{currency.format(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <button className="clear-button" type="button" onClick={onClear}>
            Clear bag
          </button>
        </>
      )}

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>{currency.format(cartTotal)}</strong>
        </div>
        <p className="shipping-note">Shipping and taxes calculated at checkout.</p>
        <button className="checkout-button" type="button" disabled={cart.length === 0}>
          Continue to checkout <span aria-hidden="true">↗</span>
        </button>
        <div className="secure-note"><span aria-hidden="true">◇</span> Secure checkout · Free shipping over $150</div>
      </div>
    </aside>
  );
}
