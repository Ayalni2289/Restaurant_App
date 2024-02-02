import { useEffect } from "react";

export default () => {

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 30,
                    term: searchTerm,
                    location: "İstanbul"
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };
    useEffect(() => {
        searchApi("pasta");
    },[]);
    
    return [searchApi];
}
