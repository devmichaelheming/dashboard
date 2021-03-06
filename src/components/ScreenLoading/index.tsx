import React from "react";
import Lottie from "react-lottie";

import { loading } from "assets";

const ScreenLoading = function () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export { ScreenLoading };
