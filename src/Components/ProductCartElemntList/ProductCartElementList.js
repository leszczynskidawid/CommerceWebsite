import {
  SWrapperListElement,
  SImgContainer,
  SQtyChangerContainer,
  SImg,
  SProductNameContainer,
  SProductPriceContainer,
  SDeleteProductButtonContainer,
} from "./style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import {
  addProductIntoCart,
  decreseQuantityProduct,
  deleteProductFromCartThunk,
} from "../../Redux/Cart/actionProductsCart";
import { openModalWindow } from "../../Redux/ModalState/actionModal";

export const ProductCartElementList = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <SWrapperListElement>
      <SImgContainer>
        <SImg src={data.image} alt="a" />
      </SImgContainer>

      <SProductNameContainer>
        <span>{data.title}</span>
      </SProductNameContainer>

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

      <SProductPriceContainer>
        <span>{(data.quantity * data.price).toFixed(2)}$</span>
      </SProductPriceContainer>
      <SDeleteProductButtonContainer
        onClick={() =>
          dispatch(
            openModalWindow(
              {
                title: "delete",
                message: "do you want delete",
                action: () => dispatch(deleteProductFromCartThunk(data.id)),
              },
              "delete",
            ),
          )
        }
      >
        <CloseIcon />
      </SDeleteProductButtonContainer>
    </SWrapperListElement>
  );
};
