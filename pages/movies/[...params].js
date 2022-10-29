import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/SEO";

const Detail = ({ params }) => {
  const router = useRouter();
  console.log("router", router);
  const [title, id] = params || [];
  return (
    <div>
      <SEO title={title}></SEO>
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export const getServerSideProps = (ctx) => {
  const {
    params: { params },
  } = ctx;
  return {
    props: {
      params,
    },
  };
};
