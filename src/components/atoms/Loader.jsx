import { Flex, Spinner } from '@chakra-ui/react'
export const Loader = () => {
  return (
    <Flex
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
      alignItems="center"
      h="30px"
      justifyContent="center"
    >
      <Spinner />
    </Flex>
  )
}
