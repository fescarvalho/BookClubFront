import {
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Flex
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Text } from 'src/components/atoms/Text';

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user);
  console.log({ userStore });
  return (
    <Menu>
      <MenuButton>
        <Flex alignItems="center" justifyContent="center" flexDir="row">
          <Avatar
            size="md"
            src={userStore?.user.avatar_url}
            name={userStore?.user.name}
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLight"
            mr="12px"
          />
          <Text fontWeight="bold" maxLength="40px">
            {userStore?.user.name}
          </Text>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Favoritos</MenuItem>
        <MenuItem>Dados Pessoais</MenuItem>
      </MenuList>
    </Menu>
  );
};
