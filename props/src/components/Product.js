import React, { Component } from 'react';

class Product extends Component {
	render() {
		return(
			<div className='row'>
				<h3>product</h3>
				<div className="col-xs-6 col-sm-3 col-md-6 col-lg-6">
					<a className="thumbnail">
						<img data-src="#" alt=""/>
					</a>
					<h4>{this.props.name}</h4>
					<h4>{this.props.price}</h4>
					
				</div>
			</div>
		);
	}
}

export default Product;