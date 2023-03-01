import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import './Pagination.css';
import LoadingSpinner from './Spinner';

const SubjectSearch = props => {

    let totalSearchResult;
    const [offset, setOffset] = useState(0);
    const [subjectList, setSubjectList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const callAPI = async (searchTerm, offset) => {
        setIsLoading(true);
        // console.log("Inside Search Data");
        // console.log("offset is " + offset);
        const response = await fetch(`https://openlibrary.org/subjects/${searchTerm}.json?limit=10&offset=${offset}`);

        if (!response.ok) {
            throw new Error("API call failed!")
        }

        const resData = await response.json();
        // console.log(resData.works[0]);
        // console.log(resData);

        const responseData = [];

        const searchResults = resData.works;
        // setOffset(resData.offset);
        totalSearchResult = resData.work_count;
        // console.log(totalSearchResult);

        try {
            searchResults.map(subject => {
                // console.log(subject);
                const title = subject['title']
                const author_name = subject['authors'][0]['name']
                const first = subject['first_publish_year']
                const latest = subject['first_publish_year'] + subject['edition_count']

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
        async function getSubjectList() {
            setOffset(0);
            try {
                const subjectList = await callAPI(props.subjectData, 0);
                setSubjectList(subjectList);
            } catch (err) {
                return;
            }
        }
        getSubjectList();
    }, [props.subjectData])

    useEffect(() => {
        async function getSubjectList() {
            try {
                const subjectList = await callAPI(props.subjectData, offset);
                setSubjectList(subjectList);
            } catch (err) {
                return;
            }
        }
        getSubjectList();
    }, [offset])

    // const subjectList = callAPI(props.subjectData);

    if (!subjectList)
        return <LoadingSpinner />

    return (
        <div className='pagination'>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <Card searchList={subjectList} offset={offset} maxOffset={totalSearchResult - 1} setOffset={setOffset} />}
        </div>
    )
}

export default SubjectSearch;