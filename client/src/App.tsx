import React from "react";
import ResponsiveDrawer from "./components/layout/ResponsiveDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import BuadeSwitch from "./routes/BuadeSwitch";

const theme = createMuiTheme({
  typography: {}
});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}> {/* MuiThemeProvider */}
      <CssBaseline /> {/* cssbaselines */}
      <Router>
        <ResponsiveDrawer>
          <BuadeSwitch />
        </ResponsiveDrawer>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
