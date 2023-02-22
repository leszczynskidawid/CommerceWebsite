import {
  SWrapperListElement,
  SImgContainer,
  SQtyChangerContainer,
  SImg,
} from "./style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import {
  addProductIntoCart,
  decreseQuantityProduct,
  deleteProductFromCart,
} from "../../Redux/Cart/actionProductsCart";

export const ProductCartElementList = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <SWrapperListElement>
      <SImgContainer>
        <SImg src={data.image} alt="a" />
      </SImgContainer>
      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          maxWidth: "500px",
          padding: "20px",
        }}
      >
        <span>{data.title}</span>
      </div>

      <SQtyChangerContainer>
        <div onClick={() => dispatch(addProductIntoCart(data))}>
          <AddIcon />
        </div>

        <div>
          <span>{data.quantity !== undefined ? data.quantity : 1}</span>
        </div>
        <div onClick={() => dispatch(decreseQuantityProduct(data.id))}>
          {data.quantity > 1 ? <RemoveIcon /> : null}
        </div>
      </SQtyChangerContainer>
      <div>
        <span>{data.quantity * data.price}$</span>
      </div>
      <div onClick={() => dispatch(deleteProductFromCart(data.id))}>
        <CloseIcon />
      </div>
    </SWrapperListElement>
  );
};
