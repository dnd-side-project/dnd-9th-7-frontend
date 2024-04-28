import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Router } from '@/common/components/Router';
import { CategoryProvider } from '@/features/Situation/CategoryContext';
import { Layout } from '@/common/components/Layout';
import { GlobalStyle, theme } from '@/styles';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <CategoryProvider>
              <Router />
            </CategoryProvider>
          </Layout>
          <div id='overlay' />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
