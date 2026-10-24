import ProductGrid from './components/ProductGrid.jsx'
import products from './data/products.json'
import { contacts } from './data/store.js'
import './App.css'

function App() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-mark" aria-hidden="true">✦</span>
        A little light makes a big difference
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Diwali Products home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>Diwali <b>Products</b></span>
        </a>
        <nav className="contact-nav" aria-label="WhatsApp contacts">
          {contacts.map((contact) => (
            <a
              className="contact-link"
              href={`https://wa.me/${contact.number}`}
              key={contact.label}
              target="_blank"
              rel="noreferrer"
              aria-label={`Message ${contact.label} on WhatsApp`}
            >
              <span className="contact-dot" aria-hidden="true" />
              <span className="contact-copy">
                <span className="contact-label">{contact.label}</span>
                <span className="contact-number">{contact.display}</span>
              </span>
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> MADE FOR THE FESTIVE SEASON</p>
          <h1>Bring home<br />a little <em>Diwali</em> magic.</h1>
          <p className="hero-description">
            Thoughtful festive finds to make your home glow and your celebrations feel special.
          </p>
          <a className="shop-link" href="#products">
            Explore the collection <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-sun" />
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="art-spark spark-one">✦</div>
          <div className="art-spark spark-two">✳</div>
          <div className="diya">
            <span className="diya-flame" />
            <span className="diya-bowl" />
            <span className="diya-base" />
          </div>
          <span className="art-caption">LIGHT · JOY · TOGETHERNESS</span>
        </div>
        <div className="hero-index" aria-hidden="true">01 <span /> 24</div>
      </section>

      <section className="collection" id="products">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> THE FESTIVE EDIT</p>
            <h2>Made for moments<br className="mobile-break" /> worth celebrating.</h2>
          </div>
          <p className="section-note">A collection for brighter homes, warmer welcomes, and one more sweet.</p>
        </div>
        <ProductGrid products={products} />
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>Diwali <b>Products</b></span>
        </a>
        <p>Made to make your celebrations glow.</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </footer>
    </main>
  )
}

export default App