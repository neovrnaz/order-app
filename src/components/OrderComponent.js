import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Order = {
  number: 12,
  name: "Richard",
  address: "123 Main St."
}

class OrderContainer extends Component {
  render() {
    return(
        <div>
          <h3><OrderComponent order={Order}/></h3>
        </div>
    );
  }
}
export default OrderContainer;

const OrderComponent = (props) => {
  return (
      <div>
        <h1>Order #{props.order.number}</h1>
        <p>Name: {props.order.name}</p>
        <p>Address: {props.order.address}</p>
      </div>
  )
}

OrderComponent.propTypes = {
  order: PropTypes.shape({
    number: PropTypes.number,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  })
};

OrderComponent.defaultProps = {
  number: 1,
  name: "no value given",
  address: "no value given"
};
