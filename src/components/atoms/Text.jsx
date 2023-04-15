import { Text as ChackraText } from '@chakra-ui/react';

export const Text = ({ children, ...props }) => (
  <ChackraText {...props}>{children}</ChackraText>
);

Text.ScreenTitle = ({ children, ...props }) => (
  <ChackraText
    color="brand.black"
    fontWeight="extrabold"
    fontSize={['16px', '20px']}
    {...props}
  >
    {children}
  </ChackraText>
);

Text.ScreenTitle.displayName = 'ScreenTitle';
