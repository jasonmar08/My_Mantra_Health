import { Header } from "./Header/Header";


type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = () => {
  return (
    <>
      <Header />
    </>
  );
};