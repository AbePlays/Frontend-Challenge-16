import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';

import DesktopEarth from '../../assets/desktop/image-deep-earth.jpg';
import DesktopNightArcade from '../../assets/desktop/image-night-arcade.jpg';
import DesktopSoccerTeam from '../../assets/desktop/image-soccer-team.jpg';
import DesktopGrid from '../../assets/desktop/image-grid.jpg';
import DesktopFromAbove from '../../assets/desktop/image-from-above.jpg';
import DesktopPocketBorealis from '../../assets/desktop/image-pocket-borealis.jpg';
import DesktopCuriosity from '../../assets/desktop/image-curiosity.jpg';
import DesktopFisheye from '../../assets/desktop/image-fisheye.jpg';
import MobileEarth from '../../assets/mobile/image-deep-earth.jpg';
import MobileNightArcade from '../../assets/mobile/image-night-arcade.jpg';
import MobileSoccerTeam from '../../assets/mobile/image-soccer-team.jpg';
import MobileGrid from '../../assets/mobile/image-grid.jpg';
import MobileFromAbove from '../../assets/mobile/image-from-above.jpg';
import MobilePocketBorealis from '../../assets/mobile/image-pocket-borealis.jpg';
import MobileCuriosity from '../../assets/mobile/image-curiosity.jpg';
import MobileFisheye from '../../assets/mobile/image-fisheye.jpg';
import Card from './Card';

const Products = () => {
  const [isSmallerThanTablet] = useMediaQuery('(max-width: 48em)');

  return (
    <Box
      px="4"
      maxW={['container.sm', 'container.sm', 'container.lg', 'container.lg']}
      mx="auto"
    >
      <Flex
        justifyContent={['center', 'center', 'space-between']}
        alignItems="center"
      >
        <Text
          textTransform="uppercase"
          fontWeight="hairline"
          fontSize="3xl"
          letterSpacing="widest"
        >
          Our Creations
        </Text>
        {!isSmallerThanTablet && (
          <Button
            bgColor="white"
            border="1px"
            borderRadius="none"
            fontSize="xl"
            px="8"
            letterSpacing="widest"
            fontWeight="light"
            textTransform="uppercase"
            _hover={{
              bgColor: 'black',
              color: 'white',
            }}
          >
            See All
          </Button>
        )}
      </Flex>
      <SimpleGrid
        py={['8', '8', '16', '16']}
        columns={['1', '2', '3', '4']}
        spacing={['4', '4', '8', '8']}
        justifyItems="center"
      >
        <Card
          image={isSmallerThanTablet ? MobileEarth : DesktopEarth}
          text="Deep Earth"
        />
        <Card
          image={isSmallerThanTablet ? MobileNightArcade : DesktopNightArcade}
          text="Night Arcade"
        />
        <Card
          image={isSmallerThanTablet ? MobileSoccerTeam : DesktopSoccerTeam}
          text="Soccer Team Vr"
        />
        <Card
          image={isSmallerThanTablet ? MobileGrid : DesktopGrid}
          text="The Grid"
        />
        <Card
          image={isSmallerThanTablet ? MobileFromAbove : DesktopFromAbove}
          text="From Up Above Vr"
        />
        <Card
          image={
            isSmallerThanTablet ? MobilePocketBorealis : DesktopPocketBorealis
          }
          text="Pocket Borealis"
        />
        <Card
          image={isSmallerThanTablet ? MobileCuriosity : DesktopCuriosity}
          text="The Curiosity"
        />
        <Card
          image={isSmallerThanTablet ? MobileFisheye : DesktopFisheye}
          text="Make it Fisheye"
        />
      </SimpleGrid>
      {isSmallerThanTablet && (
        <Center mb="16">
          <Button
            bgColor="white"
            border="1px"
            borderRadius="none"
            fontSize="xl"
            px="8"
            h="12"
            letterSpacing="widest"
            textTransform="uppercase"
            _hover={{
              bgColor: 'black',
              color: 'white',
            }}
          >
            See All
          </Button>
        </Center>
      )}
    </Box>
  );
};

export default Products;
