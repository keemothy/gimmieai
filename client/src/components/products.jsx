import "../Interactions.css";

// handles displaying products for the users
// include buttons, cards, images, etc.
// ideally display a list of products with interactable elements
// logging the user interactions (hovers and clicks) and send it to interactions.jsx to process

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
          data-product={`Product IMAGE ELEMENT: ${item}`}
          onMouseEnter={(e) => handleHover(e.target.dataset.product)}
        />
      </div>

      <div className="card-body">
        <b> {item} </b>
      </div>

      <div className="card-footer">
        <button
          className="btn"
          data-product={`Buy BUTTON ELEMENT: ${item}`}
          onClick={(e) => handleClick(e.target.dataset.product)}
          onMouseEnter={(e) => handleHover(e.target.dataset.product)}
        >
          Check out the {item} here now for {price}!
        </button>
      </div>
    </div>
  );
}

export default Products;
