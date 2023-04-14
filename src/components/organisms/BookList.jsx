import { Flex } from '@chakra-ui/react';
import { BookCard } from 'src/components';
import { Text } from 'src/components/atoms';
// import { Text } from 'src/components/atoms';

export const BookList = ({ data, error, isLoading }) => {
  return (
    <Flex
      flexDirection="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
    >
      <Text.ScreenTitle>Destasques</Text.ScreenTitle>
      <Flex mt="24px" flexDir="row">
        {data &&
          data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  );
};
