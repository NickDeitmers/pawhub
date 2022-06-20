import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import {
  addToCartDispatch,
  decreaseQuantityDispatch,
  cartItemStock
} from "../../redux/actions/cartActions";
import { getDiscountPrice } from "../../helpers/product";
import { Breadcrumb } from "../../components";

//from tutorial 
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';

function ShowCalendar() {
  return (
    //To check calendar views paste start="Decade" and depth="Year" in below code. Also remove range restriction i.e. min and max properties
    <CalendarComponent></CalendarComponent>
  );
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  render() {
    const { addToCart, decreaseQuantity, cartItems } = this.props;
    const { quantity } = this.state;
    let cartTotalPrice = 0;
    return (
      <div className="body-wrapper space-pt--70 space-pb--120">
        <Breadcrumb pageTitle="Calendar" prevUrl="/home" />
        <br></br>
        <br></br>
          <Fragment>
            <center>
              <div>
                <ShowCalendar />
              </div>
            </center>
          </Fragment>

      </div>
    );
  }
}

Calendar.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  decreaseQuantity: PropTypes.func
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, quantityCount) => {
      dispatch(addToCartDispatch(item, quantityCount));
    },
    decreaseQuantity: item => {
      dispatch(decreaseQuantityDispatch(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
