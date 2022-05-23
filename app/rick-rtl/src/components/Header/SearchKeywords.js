import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const SearchKeywords = ({ show }) => {
  return (
    <div
      className={`search-keyword-area space-xy--15 bg-color--grey2 ${
        show ? "active" : ""
      }`}
      id="search-keyword-box"
    >
      <div className="search-keyword-header space-mb--20">
        <h4 className="search-keyword-header__title">كلمات ساخنة</h4>
      </div>
      <ul className="search-keywords">
        <li>
          <Link to={process.env.PUBLIC_URL + "/search"}>أحذية</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/search"}>حقيبة أزياء</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/search"}>حقيبة خفيفة</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/search"}>القطع</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/search"}>أحذية رياضية</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/search"}>حقيبة سفر</Link>
        </li>
      </ul>
    </div>
  );
};

SearchKeywords.propTypes = {
  show: PropTypes.bool
};

export default SearchKeywords;
