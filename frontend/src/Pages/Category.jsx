import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { HiChevronDoubleDown } from "react-icons/hi2";
import Item from '../Components/Item/Item';



const Category = (props) => {

  const {all_products} = useContext(ShopContext);

  return (
    <div className="category">
      <div className="category-indexSort">
        <p>
          <span> Showing 1-12</span> out of 36 products 
        </p>
        <div className="category-sort">
          Sort by <HiChevronDoubleDown />
        </div>
      </div>
          <div className="category-products">
            {all_products.map((item,i) => {
              if(props.category===item.category) {
                return <Item key={i} 
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  regPrice={item.regPrice}
                  salePrice={item.salePrice}
                  />
              }
              else {
                return null;
              }

            })}
          </div>
    </div>
  )
}

export default Category