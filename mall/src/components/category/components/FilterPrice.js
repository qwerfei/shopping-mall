import React, { PureComponent } from 'react';
import { 
FilterPrice,
PriceItem
} from '../style';

class FilterPrices extends PureComponent {
	render() {
		return (
      <FilterPrice>
        <PriceItem className='cur'>ALL</PriceItem>
        <PriceItem>0-1000</PriceItem>
        <PriceItem>1000-2000</PriceItem>
        <PriceItem>2000-5000</PriceItem>
        <PriceItem>5000+</PriceItem>
      </FilterPrice>
		)
	}
}

export default FilterPrices;