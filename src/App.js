import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./App.css";
import { StyledTextField } from "./components/StyledTextField";
import { StyledButton } from "./components/StyledButton";
import { StyledHeader } from "./components/StyledHeader";
import SearchIcon from "@mui/icons-material/Search";
import LogoWhite from "../src/assets/logo-white.png";

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <h1>Hola</h1>
        <img style={{ height: "80%" }} src={LogoWhite} alt="brand" />
        <h1>estas</h1>
      </StyledHeader>
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
    </div>
  );
}

export default App;
