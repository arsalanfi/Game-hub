import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem area="aside" bg="red" hideBelow={"lg"}>
        Aside
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
