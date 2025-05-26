import React, { type FC } from "react";
import Header from "../../components/header";
import Hero from "./hero";
import Heading from "./heading";
import List from "./list";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Heading />
      <List />
    </div>
  );
};

export default Home;
