import React from 'react';
import './favorites.css';

const Item = props =>{

	return(
		<div className="favorites__item">
			<div className="item__img"></div>
			<div className="item__detail">
				<span className="item__name">Breakfast Platter</span>
				<span className="item__rate">&#8377;150</span>
			</div>
			<div>	
				<button className="btn__reorder pull-right">REORDER</button>
			</div>
		</div>
	)
}

class Favorites extends React.Component{

	render(){
		return(
			<div className="favorites">
			    <div className="favorites__header">
			       <h3 className="favorites__title">FAVOURITES</h3>
			       <span className="color_yellow glyphicon glyphicon-shopping-cart pull-right"></span>
			       <p className="favorites_subtitle">Enjoy what you have been ordering!</p>
			    </div>
			    <div className="favorites__cart">
			       <div className="favorites_items_list">
			          <div className="item__img">
			            <img src="assets/img/breakfast_platter.jpg" alt="breakfast_platter"/>
			          </div>
				      <div class="favorites_items">
					     <Item></Item>
				      </div>
				   </div>
				   <div className="favorites_items_list">
				      <div  className="item__img">
			            <img src="assets/img/breakfast_platter.jpg" alt="breakfast_platter"/>
			          </div>
				      <div class="favorites_items">
					    <Item></Item>
				      </div>
				   </div>
				   <div className="favorites_items_list">
				      <div  className="item__img">
			            <img src="assets/img/breakfast_platter.jpg" alt="breakfast_platter"/>
			          </div>
				      <div class="favorites_items">
					    <Item></Item>
				      </div>
				   </div>
				   <div className="favorites_items_list">
				      <div  className="item__img">
			            <img src="assets/img/breakfast_platter.jpg" alt="breakfast_platter"/>
			          </div>
				      <div class="favorites_items">
					    <Item></Item>
				      </div>
				   </div>
				   <div className="favorites_items_list">
				      <div  className="item__img">
			            <img src="assets/img/breakfast_platter.jpg" alt="breakfast_platter"/>
			          </div>
				      <div class="favorites_items">
					    <Item></Item>
				      </div>
				   </div>
				    <div className="favorites_items_list">
				      <div  className="item__img">
			            <img src="assets/img/breakfast_platter.jpg" alt="breakfast_platter"/>
			          </div>
				      <div class="favorites_items">
					    <Item></Item>
				      </div>
				   </div>
				</div>
			</div>
		)
	}
}

export default Favorites;