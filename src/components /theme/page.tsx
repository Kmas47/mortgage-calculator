import { Footer } from "./footer";
import { Header } from "./header";

export const Page: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
