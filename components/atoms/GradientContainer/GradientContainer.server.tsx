import { getTailwindWidthClass } from "@/helper";

const GradientContainer = ({
  width,
  children,
}: {
  width?: string;
  children: React.ReactNode;
}) => {
  // Get dynamic Tailwind classes based on the width prop
  const widthClass = getTailwindWidthClass(width);

  const styles = {
    container: "relative",
    subContainer: "absolute -inset-2 rounded-2xl bg-gradient opacity-75 blur",
    childrenContainer: "relative rounded-2xl",
  };

  return (
    <div className={`${styles.container} ${widthClass}`}>
      <div className={styles.subContainer}></div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default GradientContainer;
