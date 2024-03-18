import React from 'react'

const Category = ({category, categoryCount}) => {
  return (
    <>
    <h3 className='text-black-700 text-2xl font-medium block mt-16'>
    {category}
    </h3>
    <span className='mt-3 text-sm text-grey-500'>{categoryCount}</span>
    </>
  );
}

export default Category