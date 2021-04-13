function Card() {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9087.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section>
      Products
      <Card />
    </section>
  );
}

export default Products;