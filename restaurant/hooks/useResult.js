import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState([]);
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 30,
                    term: searchTerm,
                    location: "İstanbul"
                }
            });
            setResult(response.data.businesses);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        searchApi("pasta");
    },[]);
    
    return [searchApi, result];
}
