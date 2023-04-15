import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { Text } from 'src/components/atoms';
import { CategoryCard, BookCard } from 'src/components/molecules';
import { useQuery } from 'react-query';
import { getCategory, getBooksByCategory } from 'src/services/api/requests';

export const CategoryList = () => {
  const [selected, setSelected] = useState();
  const { data } = useQuery('categories', getCategory);

  const bookQuery = useQuery(
    ['booksBuId', selected],
    () => getBooksByCategory(selected),
    {
      enabled: !!selected
    }
  );

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id);
    }
  }, [data]);

  return (
    <Flex
      flexDirection="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
      h="400px"
    >
      <Text.ScreenTitle>Categorias</Text.ScreenTitle>
      <Flex mt="12px" flexDir="row">
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
      <Flex mt="12px" flexDir="row" pb="48px">
        {bookQuery?.data &&
          bookQuery?.data.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  );
};
