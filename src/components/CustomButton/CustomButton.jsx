import React from 'react';
import PropTypes from 'prop-types';

import CustomButtonContainer from './CustomButton.styles';

const CustomButton = ({ children, variant, onClick, size, ...props }) => (
  <CustomButtonContainer variant={variant} size={size} onClick={onClick} {...props}>
    {children}
  </CustomButtonContainer>
);

CustomButton.defaultProps = {
  variant: 'default',
  onClick: () => {},
  size: 'small',
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default CustomButton;
