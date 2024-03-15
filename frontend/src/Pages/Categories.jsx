import React from 'react'

const Categories = ({categories, categoriesCount}) => {
  return (
    <>
    <h3 className='text-black-700 text-2xl font-medium block mt-16'>
    {categories}
    </h3>
    <span className='mt-3 text-sm text-grey-500'>{categoriesCount}</span>
    </>
  );
}

export default Categories