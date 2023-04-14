import { Flex, Image } from '@chakra-ui/react';
import { SearchBar, UserMenu } from 'src/components/molecules';

export const NavBar = () => {
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '80px', '112px']}
      paddingTop={['24px']}
    >
      <Image
        src="/img/logo.svg"
        alt="book club logo"
        w="160px"
        h="48px"
      ></Image>
      <SearchBar />
      <UserMenu />
    </Flex>
  );
};
