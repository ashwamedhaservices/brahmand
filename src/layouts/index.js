import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";

import Bottombar from "./navbar/bottombar";
import Topbar from "./navbar/topbar";
import { red } from "@mui/material/colors";

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  flexDirection: 'column',
});

const BOTTOM_BAR_MOBILE = 95;
const TOP_BAR_DESKTOP = 60;

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingBottom: BOTTOM_BAR_MOBILE + 24,
  [theme.breakpoints.up['md']]: {
    paddingTop: 0,
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: TOP_BAR_DESKTOP,
    paddingBottom: 0,
  },
  backgroundColor: 'var(--theme-background)',
}));

const Layout = () => {
  console.log("Layout");
  return (
    <StyledRoot>
      <Topbar />
      <Main>
        <Outlet />
      </Main>
      <Bottombar />
    </StyledRoot>
  );
};

export default Layout;
