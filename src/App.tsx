import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Layout from "./components/Layout";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import ResponsiveProvider from "./components/ResponsiveProvider";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ResponsiveProvider />
        <Header />
        <NavigationBar />
        <Layout />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
