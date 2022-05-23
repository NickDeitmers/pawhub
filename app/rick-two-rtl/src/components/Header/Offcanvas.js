import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

class Offcanvas extends Component {
  componentDidMount() {
    const offcanvasNavigations = document.querySelectorAll(
      ".offcanvas-navigation > li"
    );
    offcanvasNavigations.forEach((single) => {
      single.addEventListener("click", () => {
        this.props.activeStatus(false);
      });
    });
  }

  render() {
    return (
      <div className={`offcanvas-menu ${this.props.show ? "active" : ""}`}>
        <div className="profile-card text-center">
          <div className="profile-card__image space-mb--10">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/profile.jpg"}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="profile-card__content">
            <p className="name">
              دون نورمان <span className="id">ID MD 4350</span>
            </p>
          </div>
        </div>
        <div className="offcanvas-navigation-wrapper space-mt--40">
          <ul className="offcanvas-navigation">
            <li>
              <span className="icon">
                <ReactSVG
                  src={process.env.PUBLIC_URL + "/assets/img/icons/profile.svg"}
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/login"}>تسجيل الدخول</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/profile-two.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/profile"}>ملفي</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/icons/notification.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/notification"}>تنبيه</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={process.env.PUBLIC_URL + "/assets/img/icons/list.svg"}
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/category"}>التصنيفات</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={process.env.PUBLIC_URL + "/assets/img/icons/product.svg"}
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/shop"}>جميع المنتجات</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/cart-two.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/order"}>طلبي</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/cart-three.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/cart"}>عربة التسوق</Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/wishlist.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                قائمة الرغبات
              </Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={
                    process.env.PUBLIC_URL + "/assets/img/icons/gear-two.svg"
                  }
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/edit-profile"}>
                الإعدادات
              </Link>
            </li>
            <li>
              <span className="icon">
                <ReactSVG
                  src={process.env.PUBLIC_URL + "/assets/img/icons/profile.svg"}
                />
              </span>
              <Link to={process.env.PUBLIC_URL + "/contact"}>اتصل بنا</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Offcanvas;
