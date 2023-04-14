import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { router } from 'src/router';
import { theme } from 'styles';
import { queryClient } from 'src/services/api';
import { store } from './services/store';

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
