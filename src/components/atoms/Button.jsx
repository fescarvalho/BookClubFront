import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
  <ChakraButton
    h="56px"
    bg="brand.primary"
    borderRadius="16px"
    fontWeight="bold"
    _hover={{
      bg: 'brand.primary'
    }}
    {...props}
  >
    {children}
  </ChakraButton>
)
