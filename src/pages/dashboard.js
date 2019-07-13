import React from 'react';
import './dashboard.css';








const ProductItem = (props)=>{
	return(
		<div class="product__item">
		{props.children}
			<div class="item__pic"><img src={props.imgSrc} className="img_item" alt="" />
			</div>
			<div className="item__info">
				<span class="item__type">{props.name}</span>
				<span class="item__price">&#8377;{props.price}</span>
				<button class="btn__item-order pull-right">ADD TO BAG</button>
			</div>
		</div>
	)
}

class Dashboard extends React.Component{

	render(){
		return(
			<div className="dashboard">
				<div className="search">
					<input type="text" className="search_input"/>
					<button className="search_bar_btn"><img src="assets/img/search_bar.jpg" className="search_bar_img"/></button>
				</div>
				<div className="actionbar">
					<h className="slect_categories">SELECT CATEGORIES</h>
					<i className="filter">Filter <img src="assets/img/filter_icon.png" className="filter_icon_img"/></i>
				</div>
				<div class="available__categories">
					<div class="category__item"><img src="assets/img/download.png" className="logo_img"/>
					<span className="category__title">BREAKFAST</span>
					</div>
					<div class="category__item"><img src="assets/img/download.png" className="logo_img"/>
					<span className="category__title">STARTERS</span>
					</div>
					<div class="category__item"><img src="assets/img/download.png" className="logo_img"/>
					<span className="category__title">LUNCH</span>
					</div>
					<div class="category__item"><img src="assets/img/download.png" className="logo_img"/>
					<span className="category__title">LUNCH</span>
					</div>
					<div class="category__item"><img src="assets/img/download.png" className="logo_img"/>
					<span className="category__title">LUNCH</span>
					</div>
				</div>
				<div class="product__container">
					<ProductItem price={10} name={"Breakfast Platter"} imgSrc={"assets/img/maxres_bp.jpg"}></ProductItem>
					<ProductItem price={15} name={"Lunch Platter"} imgSrc={"assets/img/lunch_1.jpg"}></ProductItem>
					<ProductItem price={100} name={"Brunch Platter"} imgSrc={"assets/img/brunch_1.jpg"}></ProductItem>
					<ProductItem price={30} name={"Dinner Platter"} imgSrc={"assets/img/dinner.jpg"}></ProductItem>
					<ProductItem price={40} name={"Dinner Platter"} imgSrc={"assets/img/food.jpg"}></ProductItem>
					<ProductItem price={125} name={"Dinner Platter"} imgSrc={"assets/img/brunch.jpg"}></ProductItem>
				</div>
			</div>
		)
	}
}

export default Dashboard;