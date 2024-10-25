import React, { useState ,useEffect} from 'react'

const useFetchData = (url) => {
    const [data,setData] = useState([]);


    //fetching api data
    const fetchDataApi = async () => {
        //fetching the data from api
        const response = await fetch(url);

        //converting the response from api to jsonData
        const jsonData = await response.json();
        //console.log("response from api = ", jsonData);

        //setting the jsonData in data variable
        setData(jsonData);
    }

    useEffect(() => {
        //calling fetch function
        fetchDataApi()
    }, [url])

    return data;

}

export default useFetchData