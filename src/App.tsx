import React from "react";
import HeadBar from "./features/header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/theme";
import HomePage from "./features/homePage";

const App = () => {
  // добавить роуты
  return (
      <ThemeProvider theme={theme}>
        <HeadBar />
        <HomePage />
      </ThemeProvider>
  );
};

export default App;

