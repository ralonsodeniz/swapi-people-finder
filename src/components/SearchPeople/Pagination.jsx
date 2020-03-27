import React, { useState } from 'react';

import CustomButton from '../CustomButton/CustomButton';

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const count = 7;

  const handlePageChange = (mode, pageNumber) => {
    return mode === 'up'
      ? setSelectedPage(prevState => prevState + 1)
      : mode === 'down'
      ? setSelectedPage(prevState => prevState - 1)
      : setSelectedPage(pageNumber);
  };

  const paginationMarkUp = Array.from({ length: count }).map((page, pageIndex) => (
    <CustomButton
      key={pageIndex}
      name="all"
      collapse
      selected={selectedPage === pageIndex + 1}
      size="small"
      onClick={() => handlePageChange('page', pageIndex + 1)}
    >
      {pageIndex + 1}
    </CustomButton>
  ));

  return (
    <>
      <CustomButton
        collapse
        disabled={selectedPage <= 1}
        size="small"
        onClick={() => handlePageChange('down')}
      >
        {`<`}
      </CustomButton>
      {paginationMarkUp}
      <CustomButton
        collapse
        disabled={selectedPage >= count}
        size="small"
        onClick={() => handlePageChange('up')}
      >
        {`>`}
      </CustomButton>
    </>
  );
};

export default Pagination;
