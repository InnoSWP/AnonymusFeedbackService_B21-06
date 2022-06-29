import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.sass";
import type { AppProps } from "next/app";
import React, { FC, useEffect, useState } from "react";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";
import "./../styles/sections/EnterSection.sass";
import "./../styles/sections/Header.sass";
import "./../styles/sections/LkMainPage.sass";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withRedux(makeStore)(MyApp);
