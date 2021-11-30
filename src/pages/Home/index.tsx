import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import { useNavigate } from "react-router-dom";

import { loading } from "assets";
import { Container } from "./styles";

const Home = function () {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 3500);
  }, []);

  return (
    <Container>
      {isLoading && (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
    </Container>
  );
};

export default Home;
