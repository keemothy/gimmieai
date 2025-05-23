import "../Interactions.css";

// Handles displaying products for the users
// Include buttons, cards, images, etc.
// Ideally display a list of products with interactable elements

// Logging the user interactions (hovers and clicks) and send it to interactions.jsx to process

function Products({
  clicks,
  handleClick,
  hovers,
  handleHover,
  item,
  price,
  img,
  id,
}) {
  return (
    <div className="card card-shadow">
      <div className="card-header card-image">
        <img
          src={img}
          data-product={`Product IMAGE: ${item}`}
          onMouseEnter={(e) => handleHover(e.target.dataset.product)}
        />
      </div>

      <div className="card-body">
        <b> {item} </b>
      </div>

      <div className="card-footer">
        <button
          className="btn"
          data-product={`Buy BUTTON: ${item}`}
          onClick={(e) => handleClick(e.target.dataset.product)}
          onMouseEnter={(e) => handleHover(e.target.dataset.product)}
        >
          Check out the {item} here now for {price}! It has {clicks} reviews!
        </button>
      </div>
    </div>
  );
}

export default Products;
