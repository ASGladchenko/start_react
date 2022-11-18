import {useState, useEffect} from "react";

const useGetData = url => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)


    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(setData)
            .catch(setError);

    }, [])

    return {
        data,
        error
    }
}

export default useGetData;