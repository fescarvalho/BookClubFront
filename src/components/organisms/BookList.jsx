import { Flex } from '@chakra-ui/react'
import { BookCard, Text, Loader, EmptyMessage } from 'src/components'

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
          {isLoading && <Loader />}
          {(!data || data?.length === 0) && (
            <EmptyMessage>Nenhum livro encontrado</EmptyMessage>
          )}

          {data &&
            data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
        </Flex>
      </Flex>
    </Flex>
  )
}
