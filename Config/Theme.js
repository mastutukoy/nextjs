import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const Theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: {
      light: "#00A14B",
      main: "#00A14B",
      dark: "#00A14B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
