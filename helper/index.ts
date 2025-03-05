export const getTailwindWidthClass = (width: string | undefined) => {
  switch (width) {
    case "40%":
      return "lg:w-[40%]";
    case "50%":
      return "lg:w-[50%]";
    case "55%":
      return "lg:w-[55%]";
    case "60%":
      return "lg:w-[60%]";
    case "75%":
      return "lg:w-[75%]";
    case "100%":
      return "lg:w-full";
    default:
      return "w-full";
  }
};
