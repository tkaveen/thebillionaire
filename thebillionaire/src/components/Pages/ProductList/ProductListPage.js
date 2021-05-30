import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsBySlug } from "../../../actions/product.action";
import Layout from "../../Layout/Layout";

const ProductListPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <Layout>
      <div style={{ marginTop: "75px" }}>Prodyct page</div>
    </Layout>
  );
};

export default ProductListPage;
