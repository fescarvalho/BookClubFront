import { useState, useEffect } from 'react'
import { Flex, Spinner } from '@chakra-ui/react'
import { Text } from 'src/components/atoms'
import { CategoryCard, BookCard } from 'src/components/molecules'
import { useQuery } from 'react-query'
import { getCategory, getBooksByCategory } from 'src/services/api/requests'

export const CategoryList = ({ title, categoryId }) => {
  const [selected, setSelected] = useState(categoryId)
  const { data } = useQuery('categories', getCategory)

  const {
    data: bookQuery,
    refetch,
    isLoading
  } = useQuery(['booksById', selected], () => getBooksByCategory(selected), {
    enabled: !!selected
  })

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [categoryId])

  return (
    <Flex
      flexDirection="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
      h="400px"
    >
      <Text.ScreenTitle>{title || 'Categorias'}</Text.ScreenTitle>
      {!categoryId && (
        <Flex
          overflowX={['scroll', 'auto']}
          mt="12px"
          flexDir="row"
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {data?.data &&
            data?.data.map((item) => (
              <CategoryCard
                key={`book_${item.id}`}
                selected={selected === item.id}
                onClick={() => setSelected(item.id)}
                {...item}
              />
            ))}
        </Flex>
      )}

      <Flex
        overflowX={['scroll', 'auto']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
        mt="12px"
        flexDir="row"
      >
        {isLoading && (
          <Flex alignItems="center" h="230px" justifyContent="center">
            <Spinner />
          </Flex>
        )}
        {!isLoading && bookQuery && bookQuery?.data?.lenght === 0 && (
          <Flex alignItems="center" h="230px" justifyContent="center">
            <Text>Nenhum Livro realcionado encontrado.</Text>
          </Flex>
        )}
        {bookQuery &&
          bookQuery?.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
