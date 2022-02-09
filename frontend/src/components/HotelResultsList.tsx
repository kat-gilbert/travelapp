import { HotelResult } from './HotelResult';
import { Business } from '../models/YelpModel';
import { addFavorite } from '../models/ItineraryPost';

export interface MainProp {
    businesses: Business[];
}

const pos = { top: 0, left: 0, x: 0, y: 0 };

function HotelResultsList ({businesses}:MainProp) {

    function addToFavorites(business: Business){
        addFavorite(business);
    }

    return (

        <div className="Hotel-List">
            <h1>Hotels</h1>
            
        <div className="Hotel-Map-Div">
        {businesses.map((business, i) => <HotelResult key={i} business={business} onFavorite={addToFavorites} />)}
        </div>


        </div>
    )
}

export default HotelResultsList;
