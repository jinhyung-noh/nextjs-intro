import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();
  console.log("router", router);
  return "detail";
};

export default Detail;
