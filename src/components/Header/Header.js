import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import DesktopBackground from '../../assets/desktop/image-hero.jpg';
import MobileBackground from '../../assets/mobile/image-hero.jpg';

const Header = () => {
  const [isLargerThanMobile] = useMediaQuery('(min-width: 30em)');
  const [isLargerThanTablet] = useMediaQuery('(min-width: 48em)');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuButtonPressedHandler = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <Box position="relative" w="full" h={['100vh', '60vh']}>
      <Image
        src={isLargerThanMobile ? DesktopBackground : MobileBackground}
        objectFit="cover"
        w="full"
        h="full"
      />
      <Box
        bg={isLargerThanTablet ? 'none' : isMenuOpen ? 'black' : 'none'}
        position="absolute"
        top="0"
        left="0"
        right="0"
        px="4"
        color="white"
        h="full"
        maxW={['container.sm', 'container.md', 'container.lg', 'container.lg']}
        mx="auto"
      >
        <Flex alignItems="center" justifyContent="space-between" h="10vh">
          <Heading>loopstudios</Heading>
          {isLargerThanTablet ? (
            <HStack spacing="6" fontWeight="bold" fontSize="xl">
              <Link href="#">About</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Events</Link>
              <Link href="#">Products</Link>
              <Link href="#">Support</Link>
            </HStack>
          ) : isMenuOpen ? (
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={onMenuButtonPressedHandler}
            >
              <path
                d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                fill="#FFF"
                fill-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={onMenuButtonPressedHandler}
            >
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
              </g>
            </svg>
          )}
        </Flex>
        <Flex
          h={['90vh', '50vh']}
          color="white"
          justifyContent={['center', 'center', 'flex-start']}
          alignItems="center"
        >
          {!isLargerThanTablet && isMenuOpen ? (
            <VStack
              spacing="6"
              textTransform="uppercase"
              letterSpacing="widest"
              fontSize="2xl"
            >
              <Link href="#">About</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Events</Link>
              <Link href="#">Products</Link>
              <Link href="#">Support</Link>
            </VStack>
          ) : (
            <Text
              border="2px"
              px="4"
              py={['8', '4']}
              maxW={['80', '80', 'md']}
              fontWeight="light"
              textTransform="uppercase"
              fontSize={['4xl', '4xl', '5xl', '5xl']}
              lineHeight="shorter"
              letterSpacing="wide"
            >
              Immersive Experiences That Deliver
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
