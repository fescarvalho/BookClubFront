import { Flex, useToast } from '@chakra-ui/react'
import { useQuery, useMutation } from 'react-query'
import { useParams } from 'react-router-dom'
import {
  getBookDetail,
  addBookToFavorite,
  deleteBookFromFavorite
} from 'src/services/api/requests'
import { NavBar, Text, Button } from 'src/components'
import { CategoryList } from 'src/components/organisms'

export const BookDetailScreen = () => {
  const toast = useToast()
  const addFavoriteMutation = useMutation((data) => addBookToFavorite(data), {
    onError: (error) => {
      toast({
        title: 'Erro ao adcionar livro aos favoritos.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Livro adcionado aos favoritos com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      refetch()
    }
  })
  const deleteFavoriteMutation = useMutation(
    (data) => deleteBookFromFavorite(data),
    {
      onError: (error) => {
        toast({
          title: 'Erro ao remover livro dos favoritos.',
          description:
            error?.response?.data?.error || 'Por favor, tente novamente.',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
        refetch()
      },
      onSuccess: () => {
        toast({
          title: 'Livro removido dos favoritos com sucesso!',
          status: 'success',
          duration: 6000,
          isClosable: true
        })
        refetch()
      }
    }
  )
  const { id } = useParams()
  const { data, refetch, isLoading } = useQuery(
    ['booksBuId', id],
    () => getBookDetail(id),
    {
      enabled: !!id
    }
  )
  const handleButtonClick = () => {
    if (data?.data?.favorite) {
      deleteFavoriteMutation.mutate(data?.data?.favorite.id)
    } else {
      addFavoriteMutation.mutate({
        book_id: id
      })
    }
  }
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
          <Button
            isLoading={
              isLoading ||
              addFavoriteMutation.isLoading ||
              deleteFavoriteMutation.isLoading
            }
            secondary={data?.data?.favorite}
            onClick={handleButtonClick}
          >
            {data?.data?.favorite
              ? 'Remover dos favoritos'
              : 'Adcionar aos favoritos'}
          </Button>
        </Flex>
      </Flex>
      <CategoryList
        text="Livros Realacionados"
        categoryId={data?.data?.book?.category?.id}
      />
    </Flex>
  )
}
