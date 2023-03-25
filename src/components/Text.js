import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../constants/colors";

const colorList = {
  default: COLORS.neutral,
  primary: COLORS.primary.default,
  white: COLORS.white,
};

const TextStyled = styled.p`
  color: ${({ color }) => colorList[color]};
  font-size: ${({ size }) => `${size}px` ?? "16px"};
  font-weight: 700;
  margin: unset;
`;

const Text = (props) => <TextStyled {...props} />;

export default Text;

Text.propTypes = {
  color: PropTypes.string,
};

Text.defaultProps = {
  color: "default",
};
