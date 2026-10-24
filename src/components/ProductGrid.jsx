const images = import.meta.glob('../assets/products/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
  query: '?url',
})

function ProductGrid({ products, quantities, onAddToCart, onChangeQuantity }) {
  if (products.length === 0) {
    return (
      <div className="empty-catalog">
        <div className="empty-art" aria-hidden="true">
          <span className="empty-spark">✦</span>
          <span className="empty-bowl" />
          <span className="empty-flame" />
        </div>
        <h3>Something lovely is on its way.</h3>
        <p>Our festive collection is being prepared. Check back soon.</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => {
        const image = images[`../assets/products/${product.image}`]

        return (
          <article className="product-card" key={product.image}>
            <div className={`product-image-wrap tone-${index % 4}`}>
              <span className="image-placeholder" aria-hidden="true">{product.name}</span>
              {image && (
                <img
                  className="product-image"
                  src={image}
                  alt={product.name}
                  loading="lazy"
                  onError={(event) => { event.currentTarget.hidden = true }}
                />
              )}
              {product.tag && <span className="product-tag">{product.tag}</span>}
            </div>
            <div className="product-details">
              <p>{product.price == null ? 'Price on request' : new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}</p>
              {quantities[product.image] ? (
                <div className="quantity-control" aria-label={`${product.name || product.image} quantity`}>
                  <button
                    className="quantity-button"
                    type="button"
                    onClick={() => onChangeQuantity(product, -1)}
                    aria-label={`Decrease ${product.name || product.image} quantity`}
                  >
                    −
                  </button>
                  <span className="quantity-value" aria-live="polite">{quantities[product.image]}</span>
                  <button
                    className="quantity-button"
                    type="button"
                    onClick={() => onChangeQuantity(product, 1)}
                    aria-label={`Increase ${product.name || product.image} quantity`}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button className="add-to-cart" type="button" onClick={() => onAddToCart(product)}>
                  Add to cart
                </button>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ProductGrid