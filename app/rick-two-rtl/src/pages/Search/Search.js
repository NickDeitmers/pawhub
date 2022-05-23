import React from "react";
import { SearchProducts, Breadcrumb } from "../../components";

const Search = () => {
  return (
    <div className="body-wrapper space-pb--120">
      <Breadcrumb pageTitle="نتائج البحث" />
      {/* search products */}
      <SearchProducts limit="20" />
    </div>
  );
};

export default Search;