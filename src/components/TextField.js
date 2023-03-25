import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "../constants/colors";

const TextFieldStyled = styled.input`
  background-color: ${COLORS.input.background};
  color: ${COLORS.secondary};
  border-radius: 5px;
  outline: none;
  border: 2px solid transparent;
  font-size: 24px;
  padding: 6px 16px;
  text-align: right;
  caret-color: ${COLORS.primary.default};

  &:focus {
    border: 2px solid #26c2ae;
  }

  &::placeholder {
    color: ${COLORS.input.placeholder};
  }

  &::caret-color {
    color: ${COLORS.primary.default};
  }
`;

const TextField = React.forwardRef((props, ref) => <TextFieldStyled ref={ref} {...props} />);

export default TextField;

TextField.propTypes = {
  variant: PropTypes.string,
};

TextField.defaultProps = {
  variant: "primary",
};
