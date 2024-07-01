import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Router } from '@/shared/common/components/Router';
import { CategoryProvider } from '@/features/Situation/CategoryContext';
import { Layout } from '@/shared/common/components/Layout';
import { GlobalStyle, theme } from '@/styles';
import { Toast } from '@/shared/common/components/Toast';
import { BottomSheet } from '@/shared/common/components/BottomSheet';

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
              <Toast />
              <BottomSheet />
            </CategoryProvider>
          </Layout>
          <div id='overlay' />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
