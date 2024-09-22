import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  children: ReactNode;
  rightButton?: string;
  btnRoute?: string;
}

const Content = ({ btnRoute, title, children, rightButton }: Props) => {
  return (
    <Box marginBottom={5}>
      <HStack paddingX="40px">
        <Text as="h2" display="inline-block" fontSize="14px">
          {title}
        </Text>
        <Spacer />
        {rightButton ? (
          <Link to={btnRoute!}>
            <Button
              size="xs"
              borderRadius="none"
              variant="outline"
              fontSize="14px"
              paddingY={1}
              paddingX={5}
            >
              {rightButton}
            </Button>
          </Link>
        ) : null}
      </HStack>
      {children}
    </Box>
  );
};

export default Content;
