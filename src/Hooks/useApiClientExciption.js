import useSelector from "react-redux";
export const useApiClientExciption = () => {
  const handleApiClientExciption = () => {
    const { isError } = useSelector((state) => state.products);

    let status = isError.code;
    // console.log(status);
    switch (status) {
      case 404:
        return console.log(404);
      case 400:
        return console.log(400);
      case "ECONNABORTED":
        return console.log("ECONNABORTED");

      default:
        console.log("xd");
    }
  };

  return { handleApiClientExciption };
};
