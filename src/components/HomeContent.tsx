import { Grid, GridItem, Show } from "@chakra-ui/react";
import Carousel from "./FeaturedGames/Carousel";
import Content from "./Content";
import Event from "./Event/Event";
import Category from "./Category";
import FeaturedlCard from "./FeaturedGames/FeaturedCard";
import GamesGroup from "./HomeGameCards/GamesGroup";

const HomeContent = () => {
  return (
    <>
      <Event />
      <Grid templateAreas={{ base: `"main"`, lg: `"aside main"` }}>
        <Show above="lg">
          <GridItem area="aside" padding={5}>
            <Category />
          </GridItem>
        </Show>
        <GridItem area="main" padding={5}>
          <Content title="FEATURED & RECOMMANDED">
            <Carousel>
              <FeaturedlCard />
            </Carousel>
          </Content>
          <Content btnRoute="games" title="ALL GAMES" rightButton="BROWSE ALL">
            <GamesGroup />
          </Content>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomeContent;
