import React from 'react';
import Cards from '../Cards/Cards';
import { productsData } from './Helpers';

const Mates = () => {
  return ( 
    <Cards data={productsData.mates} />
   );
}
 
export default Mates;