import React, { PureComponent } from 'react';
import { 
Crumb,
CrumbItem
} from '../style';

class Crumbs extends PureComponent {
	render() {
		return (
      <Crumb>
        <CrumbItem>首页</CrumbItem>
        <CrumbItem> > </CrumbItem>
        <CrumbItem>商品列表</CrumbItem>
    </Crumb>
		)
	}
}

export default Crumbs;
