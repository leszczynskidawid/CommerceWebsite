import { Wrapper } from "./style";
import { WrapperMenuFooter } from "../MenuFooter";
import { useState } from "react";
import { VALUE_SECTION_MENU_FOOTER } from "../../constants/data/MenuFotterDataObjects";

export const Footer = () => {
  const [stateValuesSectionMenuFotter, setstateValuesSectionMenuFotter] =
    useState(VALUE_SECTION_MENU_FOOTER);

  const handleToggle = (index) => {
    const newArr = stateValuesSectionMenuFotter.map((obj) => {
      if (obj === stateValuesSectionMenuFotter[index]) {
        if (obj.toggle === false) {
          return { ...obj, toggle: true };
        } else if (obj.toggle === true) {
          return { ...obj, toggle: false };
        }
      }

      return { ...obj, toggle: false };
    });

    setstateValuesSectionMenuFotter(newArr);
  };

  return (
    <Wrapper>
      {stateValuesSectionMenuFotter.map((itemMenu, index) => (
        <WrapperMenuFooter
          key={itemMenu.id}
          data={itemMenu.data}
          title={itemMenu.title}
          handletoggle={() => handleToggle(index)}
          toggle={stateValuesSectionMenuFotter[index].toggle}
        />
      ))}
    </Wrapper>
  );
};
