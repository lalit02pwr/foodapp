import React from 'react';
import './details.css';

const Deatails = props =>(
	  <div className="main">
         <div className="image">
         <img className="image" src="assets/img/food.jpg" alt="breakfast"/>
        </div>
    <div>
       <div class="vegetable_soup">Vegetable Soup<br/>
       &#8377;200
       </div>
      <button className="btn"><span>-</span>
                             <span className="item_nmbr">1</span>
                             <span>+</span>
      </button>
    </div>
    <div className="category_rating">
       <span className="category">Category:Breakfast</span>
       <span className="rating">5.0 Rating.(34 Reviews)</span>
    </div>
    <div className="details">
       <div className="detail">DETAILS</div>
       <div className="about">Lrem ipsum dolor sit amet , consectetur adipiscing elit, 
         sed do eiusmod tempoir incidudunt ut labor mahnam commomdo
         ex exa ullimco laboris nisi minim quits ad exercitation ali
         hvhj jbvcj jgbc hdg hgvhvh hvdvvb.</div>
       </div>
   </div>
      
);


export default Deatails;
