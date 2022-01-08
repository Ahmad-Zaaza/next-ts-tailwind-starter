import "../styles/globals.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import MainLayout from "@/layouts/MainLayout";
import { AnimatePresence } from "framer-motion";
import { ApplicationProvider } from "@/contexts/ApplicationContext";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ApplicationProvider>
            <MainLayout>
              <AnimatePresence exitBeforeEnter initial>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </MainLayout>
          </ApplicationProvider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default MyApp;
