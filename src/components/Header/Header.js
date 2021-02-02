import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

import DesktopBackground from '../../assets/desktop/image-hero.jpg';
import MobileBackground from '../../assets/mobile/image-hero.jpg';

const Header = () => {
  const [isLargerThanMobile] = useMediaQuery('(min-width: 30em)');
  const [isLargerThanTablet] = useMediaQuery('(min-width: 48em)');

  return (
    <Box position="relative" w="full" h="50vh">
      <Image
        src={isLargerThanMobile ? DesktopBackground : MobileBackground}
        objectFit="cover"
        w="full"
        h="full"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        px="4"
        color="white"
        h="full"
        maxW={['container.sm', 'container.sm', 'container.lg', 'container.lg']}
        mx="auto"
      >
        <Flex alignItems="center" justifyContent="space-between" h="10vh">
          <Heading>loopstudios</Heading>
          {isLargerThanTablet ? (
            <HStack spacing="6">
              <Link>About</Link>
              <Link>Careers</Link>
              <Link>Events</Link>
              <Link>Products</Link>
              <Link>Support</Link>
            </HStack>
          ) : (
            <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
              </g>
            </svg>
          )}
        </Flex>
        <Flex
          h="40vh"
          color="white"
          justifyContent={['center', 'center', 'flex-start']}
          alignItems="center"
        >
          <Text
            border="1px"
            p="4"
            maxW="80"
            fontWeight="light"
            textTransform="uppercase"
            fontSize="4xl"
            lineHeight="10"
          >
            Immersive Experiences That Deliver
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
