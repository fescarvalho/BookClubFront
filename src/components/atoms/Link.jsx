import { Link as ChakraLink, Flex } from '@chakra-ui/react'
export const Link = ({ children, ...props }) => (
  <ChakraLink fontSize="14px" color="brand.darkGrey" {...props}>
    {children}
  </ChakraLink>
)

Link.Action = ({ text, actionText, ...props }) => (
  <Flex
    flexDir={['column', 'row']}
    w="100%"
    alignItems="center"
    justifyContent="center"
  >
    <ChakraLink mr="5px" fontSize="16px" color="brand.darkGrey" {...props}>
      {text}
    </ChakraLink>
    <ChakraLink
      fontWeight="bold"
      color="brand.black"
      fontSize="16px"
      {...props}
    >
      {actionText}
    </ChakraLink>
  </Flex>
)

Link.Action.displayName = 'LinkAction'
