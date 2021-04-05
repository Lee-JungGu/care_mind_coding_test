import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Logo className="header__logo">Logo</Logo>
      <CheckBox type="checkbox" id="bars" />
      <MenuBars htmlFor="bars">
        <MenuBarsBox>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </MenuBarsBox>
      </MenuBars>
      <Gnb>
        <GnbBox>
          <List>News</List>
          <List>Contact</List>
          <List>About</List>
        </GnbBox>
      </Gnb>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #4caf50;

  @media screen and (min-width: 768px) {
    background-color: #333;
  }
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0 16px;
  height: 50px;
  color: white;
  line-height: 50px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    background-color: #4caf50;
  }
`;

const MenuBars = styled.label`
  width: 50px;
  height: 50px;
  background-color: #000;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
  &:hover span {
    background-color: #000;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuBarsBox = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform, 0.2s;
`;

const Bar = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
  transition: top, bottom, transform, 0.2s;

  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  &:nth-child(3) {
    bottom: 0;
  }
`;

const Gnb = styled.nav`
  display: none;
  width: 100%;
  background-color: #333;

  @media screen and (min-width: 768px) {
    display: block;
    width: fit-content;
    background-color: inherit;
  }
`;

const GnbBox = styled.ul`
  padding: 0;
  margin: 0;
`;

const List = styled.li`
  width: 100%;
  height: 50px;
  list-style: none;
  padding-left: 16px;
  line-height: 50px;
  color: white;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 0 16px;
    margin: 0;
    display: inline;
  }
`;

// 체크박스를 이용하여 햄버거 메뉴 애니메이션과 gnb메뉴 이벤트 구현
const CheckBox = styled.input`
  display: none;

  &:checked + ${MenuBars} > ${MenuBarsBox} {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  &:checked + ${MenuBars} > ${MenuBarsBox} > ${Bar}:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  &:checked + ${MenuBars} > ${MenuBarsBox} > ${Bar}:nth-child(2) {
    opacity: 0;
  }
  &:checked + ${MenuBars} > ${MenuBarsBox} > ${Bar}:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
  &:checked ~ ${Gnb} {
    display: block;
  }
`;
