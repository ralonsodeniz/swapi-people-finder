import React from 'react';
import PropTypes from 'prop-types';

import CustomButtonContainer from './CustomButton.styles';

const CustomButton = ({ children, variant, onClick, size, collapse, ...props }) => (
  <CustomButtonContainer
    variant={variant}
    size={size}
    onClick={onClick}
    collapse={collapse}
    {...props}
  >
    {children}
  </CustomButtonContainer>
);

CustomButton.defaultProps = {
  variant: 'default',
  onClick: () => {},
  size: 'small',
  collapse: false,
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  collapse: PropTypes.bool,
};

export default CustomButton;
