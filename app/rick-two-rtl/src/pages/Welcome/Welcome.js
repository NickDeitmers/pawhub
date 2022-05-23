import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-slider-wrapper text-center">
      <div className="single-welcome-slide-wrapper">
        <div className="single-welcome-slide">
          <div className="single-welcome-slide__head">
            <div className="logo space-mb--15">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/logo-2.png"}
                className="img-fluid"
                alt=""
              />
            </div>
            <h3 className="title">أفضل تجربة تسوق</h3>
          </div>
          <div className="single-welcome-slide__body space-pt--15 space-pb--15">
            <div className="banner-image">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/welcome.png"}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="single-welcome-slide__footer">
            <p className="text space-bottom--30">
              موقع التسوق الأكثر شعبية مع <br /> الكثير من المنتجات العصرية
            </p>
            <Link to={process.env.PUBLIC_URL + "/home"} className="welcome-btn">
              استمر
            </Link>
            <Link to={process.env.PUBLIC_URL + "/home"} className="skip-btn">
              تخطى
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;