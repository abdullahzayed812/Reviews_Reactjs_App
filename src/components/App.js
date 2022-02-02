import { Review } from "./Review";
import "./App.scss";

function App() {
  return (
    <section className="reviews-section">
      <section className="container">
        <h1 className="our-reviews">Our Reviews</h1>
        <Review />
      </section>
    </section>
  )
}

export default App;
