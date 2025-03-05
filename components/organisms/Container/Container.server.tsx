import next from "next";
import { ReactNode } from "react";
import { Header } from "../Header";

const styles = {
  container: "min-h-screen bg-black w-full",
  childrenContainer: "flex-grow w-[83%] mx-auto",
  childrenSubcontainer: "w-full flex flex-col gap-12",
};

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className="h-8"></div>
      <Header />
      <div className="h-24"></div>
      <div className={styles.childrenContainer}>
        <div className={styles.childrenSubcontainer}>{children}</div>
      </div>
    </div>
  );
};

export default Container;
