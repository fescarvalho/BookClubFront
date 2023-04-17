import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
  <ChakraButton
    h="56px"
    bg={secondary ? 'brand.greyDark' : 'brand.primary'}
    borderRadius="16px"
    fontWeight="bold"
    _hover={{
      bg: secondary ? 'brand.greyDark' : 'brand.primary'
    }}
    textColor={secondary ? 'brand.white' : 'brand.black'}
    {...props}
  >
    {children}
  </ChakraButton>
)
