const images = import.meta.glob('../assets/products/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
  query: '?url',
})

function ProductGrid({ products }) {
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
              <h3>{product.name}</h3>
              <p>{product.price == null ? 'Price on request' : new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ProductGrid