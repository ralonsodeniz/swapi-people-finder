import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ deviceType }) => {
  return deviceType === 'phone' || deviceType === 'phone-xs' ? (
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th />
    </tr>
  ) : (
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Birth year</th>
      <th>Eye color</th>
      <th />
    </tr>
  );
};

TableHeader.propTypes = {
  deviceType: PropTypes.string.isRequired,
};

export default TableHeader;
