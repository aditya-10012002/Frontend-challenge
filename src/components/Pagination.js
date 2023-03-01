import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import './Pagination.css';
import LoadingSpinner from './Spinner';

const Pagination = props => {

    let totalSearchResult;
    const [offset, setOffset] = useState(0);
    const [searchList, setSearchList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const callAPI = async (searchTerm, offset) => {
        setIsLoading(true);
        // console.log("offset is " + offset);
        const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=10&offset=${offset}`);

        if (!response.ok) {
            throw new Error("API call failed!")
        }

        const resData = await response.json();
        // console.log(resData.docs['0']);
        // console.log(resData);

        const responseData = [];

        const searchResults = resData.docs;
        // setOffset(resData.offset);
        totalSearchResult = resData.numFound;
        // console.log(totalSearchResult);

        try {
            searchResults.map(movie => {
                // console.log(movie);
                const title = movie['title']
                const author_name = movie['author_name']
                const first = movie['first_publish_year']
                const latest = movie['publish_year'] ? Math.max(...movie['publish_year']) : movie['first_publish_year']

                responseData.push({
                    'Title': title,
                    'Author': author_name,
                    'First_publish_year': first,
                    'Latest_publish_year': latest
                })
            });

            setIsLoading(false);
            return responseData;
        } catch (err) {
            throw err;
        }

    }

    useEffect(() => {
        
        async function getSearchList() {
            setOffset(0);
            try {
                const searchList = await callAPI(props.searchData, 0);
                setSearchList(searchList);
            } catch (err) {
                return;
            }
        }
        getSearchList();
    }, [props.searchData])

    useEffect(() => {
        async function getSearchList() {
            try {
                const searchList = await callAPI(props.searchData, offset);
                setSearchList(searchList);
            } catch (err) {
                return;
            }
        }
        getSearchList();
    }, [offset])

    // const searchList = callAPI(props.searchData);

    if (!searchList)
        return <LoadingSpinner />

    return (
        <div className='pagination'>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <Card searchList={searchList} offset={offset} maxOffset={totalSearchResult - 1} setOffset={setOffset} />}
        </div>
    )
}

export default Pagination