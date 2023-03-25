import styled from "styled-components";
import { COLORS } from "./constants/colors";

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: ${COLORS.white};
  border-radius: 25px;
  gap: 48px;
  display: flex;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  margin: auto;
  padding: 32px;
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.secondary};
  padding: 40px;
  padding-top: 56px;
  border-radius: 15px;
  width: 350px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 40px;
  gap: 16px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;
