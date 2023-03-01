# Fyle - Frontend Internship Challenge

## Problem Statement

Design a Books library app using the Open Library Subjects and Search APIs

Subjects API doc - [https://openlibrary.org/dev/docs/api/subjects](https://openlibrary.org/dev/docs/api/subjects)

Search API doc - [https://openlibrary.org/dev/docs/api/search](https://openlibrary.org/dev/docs/api/search)

Must-have functionalities for the Library app -

1. Search - 
    1. The home page of the Library app must have a search box which allows us to search books by book`title` or `author` name.
    2. Not more than 10 search results must be retrieved in one go (use `offset` and `limit`) - there must be a way to view the `Next` set of search results and similarly also be able to view the `Previous` page results.
    3. The search key must be visible in the search box and there must be a way to clear the searched text.
2. Popular Subjects - 
    1. A predefined list of 5 Subjects must be present in the Home page - clicking on which the page should route to a `/<subject>` URL which lists the top 10 books on the subject.

Optional functionalities for the Library app - 

1. Caching the API call responses to avoid making repetitive API calls.
2. Have a way for the user to input in a subject and show a page which lists the top 10 books on this subject.

---

To run on the local machine:<br>
- Download the code and extract it.
- Then in the project folder -
> npm i


> npm start

With this the react app will run on localhost:3000

---

Made this is around 6 - 7 hrs.<br>
Got to revise some concepts related to React.<br>
I am still learning React so surely this App could be enhanced in the future when I will be more experienced with it.
