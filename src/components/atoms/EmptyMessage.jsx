import { Flex } from '@chakra-ui/react'
import { Text } from './Text'
export const EmptyMessage = ({ children }) => {
  return (
    <Flex alignItems="center" h="30px" justifyContent="center">
      <Text>{children}</Text>
    </Flex>
  )
}
