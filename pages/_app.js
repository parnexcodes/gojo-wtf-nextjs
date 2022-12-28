import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className="min-h-screen bg-[#181B22] font-montserrat">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
