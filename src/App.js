import React, { useState } from 'react'
import Subject from './components/Subject'
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SubjectSearch from './components/SubjectSearch';

const App = () => {

    const [searchData, setSearchData] = useState('');
    const [subjectData, setSubjectData] = useState('');

    const getSearch = (data) => {
        setSearchData(data);
        setSubjectData('');
    }

    const getSubject = (data) => {
        setSubjectData(data);
        setSearchData('');
    }

    return (
        <div className='main__page'>
            <Subject onFetch={getSubject} />
            <div className='main__page-content'>
                <Header onFetch={getSearch} />
                <div className='main__page-list'>
                    {searchData && <Pagination searchData={searchData} />}
                    {subjectData && <SubjectSearch subjectData={subjectData} />}
                </div>
            </div>
        </div>
    )
}

export default App