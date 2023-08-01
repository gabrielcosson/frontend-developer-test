import "./App.css";
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledTextField } from "./components/StyledTextField";
import { StyledButton } from "./components/StyledButton";
import { StyledHeader } from "./components/StyledHeader";
import { StyledDashboard } from "./components/StyledDashboard";
import { StyledDrawer } from "./components/StyledDrawer";
import SearchIcon from "@mui/icons-material/Search";
import LogoWhite from "../src/assets/logo-white.png";
import ProfilePicture from "../src/assets/profile-picture.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function App() {
  return (
    <div className="App">
      <StyledHeader
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box></Box>
        <img style={{ height: "70%" }} src={LogoWhite} alt="brand" />
        <Box></Box>
      </StyledHeader>
      <Box
        sx={{
          width: "100%",
          height: "92vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <StyledDrawer variant="permanent">
          <Toolbar />

          <Avatar
            alt="Gabriel Nieves"
            src={ProfilePicture}
            sx={{
              width: 75,
              height: 75,
              marginRight: "auto",
              marginLeft: "auto",
              boxShadow: 3,
              marginTop: "15px",
              marginBottom: "10px",
            }}
          />
          <Typography
            sx={{ fontSize: "22px", fontWeight: "600", color: "#747474" }}
          >
            Gabriel Nieves Cosson
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#747474" }}>
            gabrielnieves2000@gmail.com
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#747474" }}>
            (+57) 312 424 1847
          </Typography>
          <Box sx={{ height: "20px" }}></Box>
          <Divider />

          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem key={"Account"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon></AccountCircleIcon>
                  </ListItemIcon>
                  <ListItemText primary={"My Account"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Dashboard"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon></DashboardIcon>
                  </ListItemIcon>
                  <ListItemText primary={"Dashboard"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Employees"} disablePadding>
                <ListItemButton selected>
                  <ListItemIcon>
                    <BadgeIcon></BadgeIcon>
                  </ListItemIcon>
                  <ListItemText primary={"Employees List"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Settings"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon></SettingsIcon>
                  </ListItemIcon>
                  <ListItemText primary={"Settings"} />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </StyledDrawer>

        <StyledDashboard>
          <StyledTextField variant="outlined" label="Email" type="email" />
          <StyledButton startIcon={<SearchIcon />}>Hola</StyledButton>
          <TableContainer component={Paper} variant="outlined">
            <Table aria-label="demo table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert</TableCell>
                  <TableCell>Calories</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Frozen yoghurt</TableCell>
                  <TableCell>109</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cupcake</TableCell>
                  <TableCell>305</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </StyledDashboard>
      </Box>
    </div>
  );
}

export default App;
