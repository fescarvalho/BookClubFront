import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { getBookDetail } from 'src/services/api/requests'
import { useQuery } from 'react-query'
import { NavBar, Text, Button } from 'src/components'

export const BookDetailScreen = () => {
  const { id } = useParams()
  const { data } = useQuery(['booksBuId', id], () => getBookDetail(id), {
    enabled: !!id
  })

  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        flexDir="row"
        mt={['24px', '48px']}
        w="100%"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Flex
          w={['238px']}
          h={['358px']}
          background={`url(${data?.data.book.cover_url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius={['12px']}
        />
        <Flex w="70%" mx="48px" flexDir="column">
          <Text.ScreenTitle fontSize="24px">
            {data?.data?.book?.name}
          </Text.ScreenTitle>
          <Text mt="6px" fontSize="16px" color="brand.GreyDark">
            {data?.data?.book?.author?.name}
          </Text>
          <Text.ScreenTitle mt="16px">Informações</Text.ScreenTitle>
          <Flex mt="4px" w="100%" flexDir="row" justifyContent="space-between">
            <Text fontSize="14px" color="brand.GreyDark">
              Categoria: {data?.data?.book?.category?.name}
            </Text>
            <Text fontSize="14px" color="brand.GreyDark">
              Pages: {data?.data?.book?.pages}
            </Text>
            <Text fontSize="14px" color="brand.GreyDark">
              Ano de lançamento:{' '}
              {new Date(data?.data?.book?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.ScreenTitle mt="16px">Sinpose</Text.ScreenTitle>
          <Text mt="6px" fontSize="12px" color="brand.GreyDark">
            {data?.data?.book?.synopsis}
          </Text>
        </Flex>
        <Flex>
          <Button>Adcionar aos favoritos</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
