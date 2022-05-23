import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="body-wrapper space-pt--70 space-pb--120">
      <div className="no-items-found">
        <div className="no-items-found__image">
          <FaTimes />
        </div>
        <div className="no-items-found__content">
          <p>
            لا شيء هنا
            <Link to={process.env.PUBLIC_URL + "/home"}>
              العودة الى الصفحة الرئيسية
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
