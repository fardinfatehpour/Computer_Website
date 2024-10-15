import React from "react";
import { useParams } from "react-router-dom";
function Product() {
//   const [searchparams] = useSearchParams();
  const {product} = useParams();
  return (
    <div>
      <h1>{product}</h1>
      test
    </div>
  );
}

export default Product;
