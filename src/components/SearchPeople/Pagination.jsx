/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCharacterCount,
  selectNextEndpoint,
  selectPreviousEndpoint,
  selectSearchText,
} from '../../redux/reducers/dataReducer';
import { fetchApiStart } from '../../redux/actions/dataActions';

import CustomButton from '../CustomButton/CustomButton';

const selectPaginationData = createStructuredSelector({
  characterCount: selectCharacterCount,
  nextEndpoint: selectNextEndpoint,
  previousEndpoint: selectPreviousEndpoint,
  searchText: selectSearchText,
});

const Pagination = () => {
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState(1);
  const { characterCount, nextEndpoint, previousEndpoint, searchText } = useSelector(
    selectPaginationData
  );
  const pageCount = Math.ceil(characterCount / 10);

  useEffect(() => {
    setSelectedPage(1);
  }, [pageCount, setSelectedPage]);

  const handlePageChange = useCallback(
    (mode, pageNumber) => {
      if (mode === 'up') {
        setSelectedPage(prevState => prevState + 1);
        dispatch(fetchApiStart(nextEndpoint));
      } else if (mode === 'down') {
        setSelectedPage(prevState => prevState - 1);
        dispatch(fetchApiStart(previousEndpoint));
      } else if (selectedPage !== pageNumber) {
        setSelectedPage(pageNumber);
        dispatch(
          fetchApiStart(`https://swapi.dev/api/people/?search=${searchText}&page=${pageNumber}`)
        );
      }
    },
    [
      dispatch,
      setSelectedPage,
      nextEndpoint,
      previousEndpoint,
      selectedPage,
      fetchApiStart,
      searchText,
    ]
  );

  const paginationMarkUp = Array.from({ length: pageCount }).map((page, pageIndex) => (
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
        disabled={selectedPage >= pageCount}
        size="small"
        onClick={() => handlePageChange('up')}
      >
        {`>`}
      </CustomButton>
    </>
  );
};

export default Pagination;
