import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../Layouts/Product'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className='w-[32%]'>
             <Product badge= {true}/>
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {

  const [itemOffset, setItemOffset] = useState(0);
  
  const [itemSelected, setItemSelected] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemSelected(event.selected)
    setItemOffset(newOffset);
  };

  return (
    <div>
        <div className='flex flex-wrap'>
        <Items currentItems={currentItems} />
        </div>
      <div className='relative'>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        pageClassName="inline-block border border-[#F0F0F0] py-2.5 px-3.5 font-dm text-[14px] text-[#767676]"
        previousClassName="hidden"
        previousLinkClassName="page-link"
        nextClassName="hidden"
        breakClassName="page-item"
        containerClassName="flex gap-x-4 mt-[50px]"
        activeClassName="bg-primary py-2.5 px-3.5 font-dm text-[14px] text-white"
      />
    <p className='absolute bottom-0 right-0 font-dm font-regular text-base text-[#767676]'>Products from {itemSelected} to {itemOffset + itemsPerPage } of {items.length}</p>
      </div>
    </div>
  )
}

export default Pagination