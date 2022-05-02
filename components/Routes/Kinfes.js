import React from 'react';
import Cards from '../Cards/Cards';
import { productsData } from './Helpers';

const Knifes = () => {
  return ( 
    <Cards data={productsData.knifes} />
   );
}
 
export default Knifes;