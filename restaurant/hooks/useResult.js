import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
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
            setErrorMessage("");
        } catch (err) {
            setErrorMessage("Something went wrong connection error!");
        }
    };
    useEffect(() => {
        searchApi("pasta");
    },[]);
    
    return [searchApi, result, errorMessage];
}
