import { Flex } from '@chakra-ui/react';
import { BookCard } from 'src/components';
import { Text } from 'src/components/atoms';
import { useQuery } from 'react-query';
import { getHighlightedBooks } from 'src/services/api/requests';

export const BookList = () => {
  const { data } = useQuery('highlighted', getHighlightedBooks);

  return (
    <Flex
      flexDirection="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
      h={['100%', '400px']}
    >
      <Text.ScreenTitle>Destasques</Text.ScreenTitle>
      <Flex
        flexDirection="column"
        mt={['24px', '48px']}
        paddingX={['24px', '48px', '80px', '112px']}
        overflowX={['scroll', 'auto']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Flex mt={['12px', '24px']} flexDir="row">
          {data?.data &&
            data?.data.map((item) => (
              <BookCard key={`book_${item.id}`} {...item} />
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
