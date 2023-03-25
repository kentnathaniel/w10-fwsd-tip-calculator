import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../constants/colors";

const variantList = {
  primary: {
    backgroundColor: COLORS.primary.default,
    color: COLORS.secondary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
  },
};

const ButtonStyled = styled.button`
  padding: 6px 16px;
  background-color: ${({ variant }) => variantList[variant].backgroundColor};
  color: ${({ variant }) => variantList[variant].color};
  width: ${({ width }) => width ?? "auto"};
  font-size: 24px;
  font-weight: 700;
  border: unset;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary.hover};
  }
`;

const Button = (props) => <ButtonStyled {...props} />;

export default Button;

Button.propTypes = {
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
};
