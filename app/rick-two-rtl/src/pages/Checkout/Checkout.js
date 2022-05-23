import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { getDiscountPrice } from "../../helpers/product";
import { Breadcrumb } from "../../components";

const Checkout = ({ cartItems }) => {
  let cartTotalPrice = 0;
  return (
    <div className={`body-wrapper space-pb--120`}>
      <Breadcrumb pageTitle="الدفع" />

      {cartItems && cartItems.length >= 1 ? (
        <div className="checkout-body text-right">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* checkout form */}
                <div className="checkout-form">
                  <form>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="fullName">الاسم الكامل</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="أدخل الاسم الكامل"
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="userName">اسم المستخدم</label>
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="ادخل اسم المستخدم"
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="phoneNo">هاتف</label>
                      <input
                        type="text"
                        name="phoneNo"
                        id="phoneNo"
                        placeholder="أدخل رقم الهاتف"
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="emailAddress">
                        عنوان البريد الالكترونى
                      </label>
                      <input
                        type="text"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="أدخل عنوان البريد الالكتروني"
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="shippingAddress">عنوان الشحن</label>
                      <textarea
                        name="shippingAddress"
                        id="shippingAddress"
                        cols={30}
                        rows={5}
                        placeholder="أدخل عنوان الشحن"
                        defaultValue={""}
                      />
                    </div>
                    <div className="checkout-form__single-field space-mb--30">
                      <label htmlFor="orderNotes">ترتيب ملاحظات</label>
                      <textarea
                        name="orderNotes"
                        id="orderNotes"
                        cols={30}
                        rows={5}
                        placeholder="أدخل ملاحظات الطلب"
                        defaultValue={""}
                      />
                    </div>
                    <div className="your-order-area space-mb--30">
                      <h3>طلبك</h3>
                      <div className="your-order-wrap gray-bg-4">
                        <div className="your-order-product-info">
                          <div className="your-order-top">
                            <ul>
                              <li>المنتج</li>
                              <li>مجموع</li>
                            </ul>
                          </div>
                          <div className="your-order-middle">
                            <ul>
                              {cartItems.map((cartItem, key) => {
                                const discountedPrice = getDiscountPrice(
                                  cartItem.price,
                                  cartItem.discount
                                );

                                discountedPrice != null
                                  ? (cartTotalPrice +=
                                      discountedPrice * cartItem.quantity)
                                  : (cartTotalPrice +=
                                      cartItem.price * cartItem.quantity);
                                return (
                                  <li key={key}>
                                    <span className="order-middle-left">
                                      {cartItem.quantity} X {cartItem.name}
                                    </span>{" "}
                                    <span className="order-price">
                                      {discountedPrice !== null
                                        ? "$" +
                                          (
                                            discountedPrice * cartItem.quantity
                                          ).toFixed(2)
                                        : "$" +
                                          (
                                            cartItem.price * cartItem.quantity
                                          ).toFixed(2)}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="your-order-bottom">
                            <ul>
                              <li className="your-order-shipping">الشحن</li>
                              <li>الشحن مجانا</li>
                            </ul>
                          </div>
                          <div className="your-order-total">
                            <ul>
                              <li className="order-total">مجموع</li>
                              <li>${cartTotalPrice.toFixed(2)}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="checkout-form__button">
                      مكان الامر
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-items-found">
          <div className="no-items-found__image">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/money.svg"}
            />
          </div>
          <div className="no-items-found__content">
            <p>
              لا توجد عناصر في سلة التسوق للخروج{" "}
              <Link to={process.env.PUBLIC_URL + "/shop"}>اضف بعض</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

export default connect(mapStateToProps)(Checkout);
