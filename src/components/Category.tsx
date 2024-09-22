import { Box, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../stores/GameQueryStore";
import { Link, useLocation } from "react-router-dom";

const Category = () => {
  const { data, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const location = useLocation();

  if (error) throw error;
  return (
    <Box w="210px">
      <Heading size="sm" color="#536f86">
        Category
      </Heading>
      {data?.results.map((genre) => (
        <Link key={genre.id} to={location.pathname === "/games" ? "" : "games"}>
          <Box
            color={genreId === genre.id ? "#54a5d4" : "#7A8B9D"}
            _hover={{ color: "#54a5d4" }}
            as="button"
            display="block"
            fontWeight="550"
            onClick={() => setGenreId(genre.id)}
            fontSize={genreId === genre.id ? "lg" : "md"}
          >
            {genre.name}
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Category;
