import { useState, useEffect, useLayoutEffect } from "react";
import { fetchItineraryList, deleteItineraryItem } from "../services/DbService";
import { Business } from "../models/YelpModel";
import { ItineraryItem } from "./ItineraryItem";
import { SearchTermProp } from "./Main";
import { CityNames, CityName } from "../models/DbModels";
import "./ItineraryList.css";

export interface PropHeader {
    refresh: boolean;
}

export function ItineraryList({refresh}: PropHeader) {

    const [ itineraryItems, setItineraryItems ] = useState<Business[]>([]);
    const [ cityNames, setCityNames ] = useState<string[]>([]);
    const [ cityName, setCityName ] = useState<CityName>();
    

    useEffect( ()=> {
        fetchItineraryList().then(data => {
            setItineraryItems(data);
        });
        // just for retreiving all city names in database
        // fetchItineraryCity().then(data=> {
        //     setCityNames(data);
        //     console.log(cityNames);
        // });
        // then will have another fetch to receive specific info from those cities?
    },[refresh]);

    function deleteFromItinerary(business:Business) {
        deleteItineraryItem(business);

        let index = itineraryItems.findIndex(b => b.id === business.id);
            setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
    }

    return (
        <div className="Itinerary-List">
            <h2 className="Itinerary-List-Name">Your Itinerary</h2>
            {itineraryItems.map((business, i)=> 
            <ItineraryItem key={i} business={business} onDelete={()=>deleteFromItinerary(business)}/>)}
        </div>
    )
}