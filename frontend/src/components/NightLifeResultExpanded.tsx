import {Business} from "../models/YelpModel";
import { useState, useEffect } from "react";
import { ReviewModel } from "../models/ReviewModel";
import { fetchReviews } from "../services/YelpAPIService";
import "./ResultsExpanded.css";

//importing Yelp Stars//
import zeroStars from './Yelp-Stars/0_stars.png'
import oneStar from './Yelp-Stars/1_star.png'
import oneHalfStars from './Yelp-Stars/1_half_stars.png'
import twoStars from './Yelp-Stars/2_stars.png'
import twoHalfStars from './Yelp-Stars/2_half_stars.png'
import threeStars from './Yelp-Stars/3_stars.png'
import threeHalfStars from './Yelp-Stars/3_half_stars.png'
import fourStars from './Yelp-Stars/4_stars.png'
import fourHalfStars from './Yelp-Stars/4_half_stars.png'
import fiveStars from './Yelp-Stars/5_stars.png'

interface MainProp {
    business: Business;
    onAdd: ()=>void;
    onClose: ()=>void;
    onDelete: () => void;
}

export function NightLifeResultExpanded({business, onAdd, onClose, onDelete}:MainProp) {

    let [ hideTheAddButton, setHideTheAddButton] = useState(false)
    
//This sets conditionals for Star Ratings
let StarRating = "";

if(business.rating === 0) {
  StarRating = zeroStars
}
if(business.rating === 1) {
  StarRating = oneStar
}
if(business.rating === 1.5) {
  StarRating = oneHalfStars
}
if(business.rating === 2) {
  StarRating = twoStars
}
if(business.rating === 2.5) {
  StarRating = twoHalfStars
}
if(business.rating === 3) {
  StarRating = threeStars
}
if(business.rating === 3.5) {
  StarRating = threeHalfStars
}
if(business.rating === 4) {
  StarRating = fourStars
}
if(business.rating === 4.5) {
  StarRating = fourHalfStars
}
if(business.rating === 5) {
  StarRating = fiveStars
}

    function handleAdd() {
        setHideTheAddButton(true);
        console.log(hideTheAddButton)
        onAdd();
      }

      function handleDelete() {
        setHideTheAddButton(false);
        console.log(hideTheAddButton)
        onDelete();
      }

      let [ reviews, setReviews ] = useState<ReviewModel[]>([]);

      useEffect(() => {
          fetchReviews(business.id).then((data) => setReviews(data.reviews))
      }, []);

    return (
        <div className="Results-Expanded">
            <p className="Close"><i className="material-icons" onClick={onClose}>close</i></p>
            <p className="Expanded-Img"><img src={business.image_url} height={300} width={300}/></p>
            <h2 className="Expanded-H2">{business.name}</h2>

            <div className="Expanded-Result-Content">
            <img id="Star-Rating" src={StarRating}/>
            <p>Number of Reviews: {business.review_count}</p>
            <p>Price: {business.price}</p>
            <p>Open Now: {business.is_closed}</p>
            <p>Phone: {business.display_phone}</p>
            <p>Address: {business.location.display_address}</p>
            <p>Category: {business.categories.map((category, i) => <li key={i}> {category.title}/</li> )}</p>
            <p>Reviews: {reviews.map((review, i) => 
            <li key={i}> 
                  <span className="Rating" id="Star-Rating"> Rating: {review.rating}</span><br/>
                    <span className="Review-Text">{review.text} </span> 
                        <span className="Review-Link"> <a href={review.url} target={"_blank"}>See Full Review</a> </span><br/>
                          <span className="Review-Name">{review.user.name}</span><br/>
                            <span className="Review-Time">{review.time_created}</span><br/>
                            </li> )}</p>
            <p><a href={business.url} target="_blank">Link to Yelp</a></p> 
            </div>

            <div id="Add-To-List"> 
        {(!hideTheAddButton) ? 
        <i className="material-icons" id="Add-to-list-Icon" onClick={handleAdd}  title="Add to Itinerary" >playlist_add</i>
        :
        <i className="material-icons" id="Add-to-list-Icon" onClick={handleDelete} title="Remove to Itinerary" >playlist_remove</i>
}             
                
        </div>
        </div>
    )
}