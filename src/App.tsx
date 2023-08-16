import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Router } from '@common/components/Router';
import { Layout } from './common/components/Layout';
import { GlobalStyle, theme } from './styles';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Router />
          </Layout>
          <div id='modal' />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
