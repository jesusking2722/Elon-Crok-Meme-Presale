const GradientContainer = ({
  width,
  children,
}: {
  width?: string;
  children: React.ReactNode;
}) => {
  // A function to map width percentage to Tailwind's width classes
  const getTailwindWidthClass = (width: string | undefined) => {
    switch (width) {
      case "40%":
        return "lg:w-[40%]";
      case "50%":
        return "lg:w-[50%]";
      case "60%":
        return "lg:w-[60%]";
      case "75%":
        return "lg:w-[75%]";
      case "100%":
        return "lg:w-full";
      default:
        return "w-full"; // Default to full width
    }
  };

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
