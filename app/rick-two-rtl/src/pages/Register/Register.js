import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="body-wrapper  space-pt--70 space-pb--120">
      {/* auth page header */}
      <div className="auth-page-header space-mb--50 text-right">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="auth-page-header__title">أهلا بك</h3>
              <p className="auth-page-header__text">
                ليس لديك حساب؟ <br /> يرجى الاشتراك لإنشاء حساب جديد
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* auth page body */}
      <div className="auth-page-body text-right">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Auth form */}
              <div className="auth-form">
                <form>
                  <div className="auth-form__single-field space-mb--30">
                    <label htmlFor="name">اسم</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="أدخل الاسم الكامل"
                    />
                  </div>
                  <div className="auth-form__single-field space-mb--30">
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
                  <div className="auth-form__single-field space-mb--30">
                    <label htmlFor="password">كلمه السر</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="أدخل كلمة المرور"
                    />
                  </div>
                  <div className="auth-form__single-field space-mb--40">
                    <p className="auth-form__info-text">
                      هل لديك حساب؟{" "}
                      <Link to={process.env.PUBLIC_URL + "/login"}>
                        قم بتسجيل دخولك الآن
                      </Link>
                    </p>
                  </div>
                  <button className="auth-form__button">سجل</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* auth page footer */}
      <div className="auth-page-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="auth-page-separator text-center space-mt--20 space-mb--20">
                - أو -
              </span>
              <div className="auth-page-social-login">
                <button>
                  <ReactSVG
                    src={
                      process.env.PUBLIC_URL + "/assets/img/icons/facebook.svg"
                    }
                  />
                  قم بتسجيل الدخول باستخدام الفيسبوك
                </button>
                <button>
                  <ReactSVG
                    src={
                      process.env.PUBLIC_URL + "/assets/img/icons/google.svg"
                    }
                  />
                  الدخول مع جوجل
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
