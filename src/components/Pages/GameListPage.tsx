import { Grid, Show, GridItem, Center } from "@chakra-ui/react";
import Category from "../Category";
import SearchInputContainer from "../SearchInput/SearchInputContainer";
import GameList from "../GameList/GameList";
import SelectorBar from "../Selectors/SelectorBar";

const GameListPage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"search" "main"`,
        lg: `"search search" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "210px 1fr" }}
      padding={5}
    >
      <GridItem area="search">
        <Center>
          <SearchInputContainer />
        </Center>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Category />
        </GridItem>
      </Show>
      <GridItem area="main">
        <SelectorBar />
        <GameList />
      </GridItem>
    </Grid>
  );
};

export default GameListPage;
