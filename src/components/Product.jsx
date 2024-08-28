import PropTypes from "prop-types";

const alertStyles = {
  marginBottom: 40,
  padding: 0,
  backgroundColor: "black",
  color: "orange",
};

export const Product = ({
  name = "Placeholder name",
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price = 111,
}) => {
  return (
    <div style={alertStyles}>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.number,
};
