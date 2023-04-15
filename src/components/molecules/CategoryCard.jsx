import { Flex } from '@chakra-ui/react';
import { Text } from 'src/components/atoms';

export const CategoryCard = ({ onClick, name, selected }) => {
  return (
    <Flex
      onClick={onClick}
      alignItems="center"
      justifyContent="center"
      h="36px"
      px="14px"
      py="12px"
      borderStyle="solid"
      borderWidth="1px"
      borderColor={selected ? 'brand.black' : 'brand.greyLight'}
      bg={selected ? 'brand.black' : 'brand.background'}
      mr="8px"
      borderRadius="8px"
      cursor="pointer"
    >
      <Text
        fontWeight="500"
        fontSize="14px"
        color={selected ? 'brand.white' : 'brand.black'}
      >
        {name}
      </Text>
    </Flex>
  );
};
