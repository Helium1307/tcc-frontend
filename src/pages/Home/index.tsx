import React, { PropsWithChildren } from "react";
import OrderForm from "../../components/OrderForm";
import PageWithSidebar from "../../components/PageWithSidebar";

type HomeProps = PropsWithChildren<any>;

const Home: HomeProps = () => {
  return (
    <PageWithSidebar>
      <OrderForm />
    </PageWithSidebar>
  );
};

export default Home;
