import { useContext } from "react";
import gameContext from "../../contexts/gameContext";
import useTrailers from "../../hooks/useTrailers";

const Trailer = () => {
  const game = useContext(gameContext);
  const { data, error } = useTrailers(game.id);

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      controls
      src={data.results[0].data.max}
      poster={data.results[0].preview}
    />
  ) : null;
};

export default Trailer;
