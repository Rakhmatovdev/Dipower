'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import store from '@/features/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react'
import { Provider } from 'react-redux';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, 
      },
    },
  });

const Root = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div> 
       <Provider store={store}>
         <QueryClientProvider client={queryClient}>
        <div className="flex flex-col justify-between h-screen">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  </Provider>
  </div>
  )
}

export default Root