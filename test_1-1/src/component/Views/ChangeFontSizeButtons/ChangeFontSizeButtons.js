import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ChangeFontSizeButtons() {
  const [size, setSize] = useState(0);

  const onClickHandler = (event) => {
    const checkBtnData = event.target.dataset.btn;
    const MIN_SIZE = -10;

    if (checkBtnData === "plus") {
      return setSize((size) => size + 1);
    }
    return size > MIN_SIZE && setSize((size) => size - 1);
  };

  useEffect(() => {
    const bodyStlye = document.body.style;
    const logoStlye = document.querySelector(".header__logo").style;
    const FONT_SIZE_BODY = 16;
    const FONT_SIZE_LOGO = 17;

    bodyStlye.cssText = `font-size: ${FONT_SIZE_BODY + size}px`;
    logoStlye.cssText = `font-size: ${FONT_SIZE_LOGO + size}px`;
  }, [size]);
  return (
    <Wrapper>
      <Button data-btn="plus" onClick={onClickHandler}>
        +
      </Button>
      <Button data-btn="minus" onClick={onClickHandler}>
        -
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px 16px 0 16px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:first-child {
    margin-right: 8px;
  }
`;
