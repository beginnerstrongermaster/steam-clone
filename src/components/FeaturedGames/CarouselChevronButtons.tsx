import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useFeaturedGameStore from "../../stores/FeaturedGameIndexStore";
import { featuredGames } from "../../data/featuredGames";

interface Props {
  children: ReactNode;
}

const CarouselChevronButtons = ({ children }: Props) => {
  const { selectedFeaturedGameIndex, setSelectedFeaturedGameIndex } =
    useFeaturedGameStore();

  // if the there's no more items at the left of the featuredGames
  // set it to the last item
  // Make an infinite loop

  const handleLeftClick = () => {
    if (selectedFeaturedGameIndex - 1 >= 0) {
      setSelectedFeaturedGameIndex(selectedFeaturedGameIndex - 1);
    } else {
      setSelectedFeaturedGameIndex(featuredGames.length - 1);
    }
  };

  const handleRightClick = () => {
    if (selectedFeaturedGameIndex + 1 < featuredGames.length) {
      setSelectedFeaturedGameIndex(selectedFeaturedGameIndex + 1);
    } else {
      setSelectedFeaturedGameIndex(0);
    }
  };

  if (!featuredGames) return null;
  return (
    <>
      <Button
        w="45px"
        h="108px"
        borderRadius="none"
        leftIcon={<FaChevronLeft size={50} />}
        onClick={() => {
          handleLeftClick();
        }}
      />
      {children}
      <Button
        w="45px"
        h="108px"
        borderRadius="none"
        rightIcon={<FaChevronRight size={50} />}
        onClick={() => {
          handleRightClick();
        }}
      />
    </>
  );
};

export default CarouselChevronButtons;
