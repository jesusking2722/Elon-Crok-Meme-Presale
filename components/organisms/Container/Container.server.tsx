import next from "next";
import { ReactNode } from "react";
import { Header } from "../Header";

const styles = {
  container: "min-h-screen bg-black w-full",
  childrenContainer: "flex-grow w-full",
};

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default Container;
