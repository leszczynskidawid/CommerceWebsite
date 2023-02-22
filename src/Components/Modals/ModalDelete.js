import { Button } from "../Button/Button";
export const ModalDelete = ({ close, modalProps }) => {
  const { message, action } = modalProps;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "80%",
        }}
      >
        <span>{message}</span>

        <div style={{ display: "flex", justifyConent: "space-evely" }}>
          <Button text={"nie "} action={close} />
          <Button text={"tak"} action={action} />
        </div>
      </div>
    </div>
  );
};
