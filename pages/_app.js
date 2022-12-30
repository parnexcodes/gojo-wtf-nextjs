import "../styles/globals.css";
import '../styles/nprogress.css'
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const ProgressBar = dynamic(() => import("../components/utils/ProgressBar"));

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProgressBar />
      <ChakraProvider>
        <div className="min-h-screen bg-[#181B22] font-montserrat">
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </>
  );
}
