import { Text } from 'src/components/atoms';
import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react';

export const MenuItem = ({ icon, text, divider }) => {
  return (
    <ChakraMenuItem
      h="48px"
      borderBottomWidth={divider ? '1px' : '0px'}
      borderBottomStyle="solid"
      borderBottomColor="brand.greyLiht"
    >
      <Icon mr="8px" color="brand.greyDark" boxSize="18px" as={icon}></Icon>
      <Text size="14px" fontWeight="600" color="brand.greyDark">
        {text}
      </Text>
    </ChakraMenuItem>
  );
};
