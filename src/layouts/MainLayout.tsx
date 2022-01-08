import Navbar from "@/components/Navbar";
import { MAX_WIDTH, NAV_HEIGHT } from "@/lib/constants";
import Head from "next/head";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next ts starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next js tailwind starter" />
        <meta name="author" content="Ahmad Zaaza" />
        <meta property="og:site_name" content="Next ts starter" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main
        style={{ marginTop: NAV_HEIGHT }}
        className={`container ${MAX_WIDTH}`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
