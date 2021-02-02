import { Box, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Card = ({ image, text }) => {
  const [overlayColor, setOverlayColor] = useState('black');
  const [opacity, setOpacity] = useState(0.4);

  const onMouseEnterHandler = () => {
    setOverlayColor('white');
    setOpacity(0.7);
  };

  const onMouseLeaveHandler = () => {
    setOverlayColor('black');
    setOpacity(0.4);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <Image src={image} />
      <Box
        bg={overlayColor}
        opacity={opacity}
        position="absolute"
        cursor="pointer"
        transition="background-color 300ms ease-in-out"
        top="0"
        left="0"
        h="full"
        w="full"
      ></Box>
      <Text
        w="32"
        lineHeight="6"
        position="absolute"
        bottom="4"
        left="4"
        color={overlayColor === 'white' ? 'black' : 'white'}
        transition="color 300ms ease-in-out"
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
