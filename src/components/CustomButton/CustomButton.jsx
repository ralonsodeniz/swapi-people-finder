import React from 'react';
import PropTypes from 'prop-types';

import CustomButtonContainer from './CustomButton.styles';

const CustomButton = ({ children, variant, onClick, size, collapse, selected, ...props }) => (
  <CustomButtonContainer
    variant={variant}
    size={size}
    onClick={onClick}
    collapse={collapse}
    selected={selected}
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
  selected: false,
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  collapse: PropTypes.bool,
  selected: PropTypes.bool,
};

export default CustomButton;
