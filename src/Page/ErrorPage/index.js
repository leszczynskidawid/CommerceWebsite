import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
export const ErrorPage = () => {
  const navigation = useNavigate();
  return (
    <>
      <div>Code:404</div>
      <Button action={() => navigation("/")} text={"Back to home page"} />
    </>
  );
};
