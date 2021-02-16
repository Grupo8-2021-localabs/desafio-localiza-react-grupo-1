import { ThemeProvider } from 'styled-components';

import AuthProvider from '../src/components/AuthProvider';

import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}
