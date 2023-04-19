import { Flex, Spinner } from '@chakra-ui/react'
import { BookCard } from 'src/components'
import { Text } from 'src/components/atoms'

export const BookList = ({ title, data, isLoading }) => {
  return (
    <Flex
      flexDirection="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
      h={['100%']}
    >
      <Text.ScreenTitle>{title}</Text.ScreenTitle>
      <Flex
        flexDirection="column"
        mt={['24px']}
        overflowX={['scroll', 'auto']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Flex mt={['12px', '0px']} flexDir="row">
          {isLoading && (
            <Flex alignItems="center" h="30px" justifyContent="center" s>
              <Spinner />
            </Flex>
          )}
          {!data ||
            (!isLoading && data?.length === 0 && (
              <Flex alignItems="center" h="30px" justifyContent="center">
                <Text>Nenhum Livro realcionado encontrado.</Text>
              </Flex>
            ))}

          {data &&
            data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
        </Flex>
      </Flex>
    </Flex>
  )
}
