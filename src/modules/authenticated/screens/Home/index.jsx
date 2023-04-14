import { Flex } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';
import { NavBar } from 'src/components/organisms';

export const HomeScreen = () => {
  // const userStore = useSelector((state) => state.user);

  return (
    <Flex>
      <NavBar />
    </Flex>
  );
};
