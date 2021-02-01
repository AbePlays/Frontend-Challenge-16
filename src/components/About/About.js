import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import Interactive from '../../assets/desktop/image-interactive.jpg';

const About = () => {
  return (
    <Flex
      py="32"
      flexDirection={['column', '', '', 'row']}
      alignItems="flex-end"
      textAlign={['center', '', '', 'left']}
      maxW={['container.sm', 'container.sm', 'container.sm', 'container.lg']}
      mx="auto"
    >
      <Image src={Interactive} w="full" />
      <Box
        mt={['8', '8', '8', '0']}
        p={['0', '0', '0', '2rem 0 0 4rem']}
        w={['full', 'full', 'full', '70%']}
        bgColor="white"
        ml={['0', '0', '0', '-24']}
      >
        <Heading
          fontWeight="hairline"
          textTransform="uppercase"
          letterSpacing="widest"
          fontSize="4xl"
          lineHeight="10"
        >
          The leader in interactive VR
        </Heading>
        <Text mt="4" color="gray.500" letterSpacing="wide" fontWeight="medium">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
