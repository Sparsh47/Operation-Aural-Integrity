import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./components/Theme.js";
import UserProvider from "./context/UserProvider.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </UserProvider>
  </BrowserRouter>
);
