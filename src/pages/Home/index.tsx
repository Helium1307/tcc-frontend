import React, { PropsWithChildren } from "react";

type HomeProps = PropsWithChildren<any>;

const Home: HomeProps = ({ children }: any) => {
  return <div>{children}</div>;
};

export default Home;
