import { Box, Image, Text } from '@chakra-ui/react';

const Card = ({ image, text }) => {
  return (
    <Box position="relative">
      <Image src={image} />
      <Text
        w="32"
        lineHeight="6"
        position="absolute"
        bottom="4"
        left="4"
        color="white"
        textTransform="uppercase"
        fontSize="xl"
        letterSpacing="widest"
        fontWeight="thin"
      >
        {text}
      </Text>
    </Box>
  );
};

export default Card;
