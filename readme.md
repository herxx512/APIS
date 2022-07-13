Part 1:  
1. Darth Vader Height: https://swapi.dev/api/people/4/  

2. Planet Alderaan population: https://swapi.dev/api/planets/2/  

3. Name of the manufacturer of the Millennium Falcon: https://swapi.dev/api/starships/10/  

4. Name of the species that C-3PO belongs to: 
    https://swapi.dev/api/people/2/,
    https://swapi.dev/api/species/2/  
    

5. Title of each film that Obi-Wan Kenobi is in: 
    https://swapi.dev/api/films/1/,
    https://swapi.dev/api/films/2/,
    https://swapi.dev/api/films/3/,
    https://swapi.dev/api/films/4/,
    https://swapi.dev/api/films/5/,
    https://swapi.dev/api/films/6/  


Part 2:  
1. Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?  
POST request accepts a body with text inside an object.


2. What data type does the GET request return?  
Returns an array of all posts


3. What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )  
 DELETE https://practiceapi.devmountain.com/api/posts/?id=555


4. List the possible response codes from the GET request at ‘/posts/filter’  
Returns an array of filtered posts  (Ex. GET https://practiceapi.devmountain.com/api/posts/filter?text=Hello World!)
[{
    "id": 0,
    "text": "Hello World!",
    "date": "13 Jul 2022"
}]


5. Create a post whose text is your name, record the URL and body here:  
GET  https://practiceapi.devmountain.com/api/posts
{
    "id": 25,
    "text": "Bruce",
    "date": "13 Jul 2022"
}

or

GET https://practiceapi.devmountain.com/api/posts/filter?text=Bruce


6. What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name?  
PUT https://practiceapi.devmountain.com/api/posts?id=25

body:
{
    "text": "Blue"
}


7. What is the URL to get posts that contain the text “blue”?  
GET https://practiceapi.devmountain.com/api/posts/filter?text=blue


8. Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)  
Content-Type : application/json; charset=utf-8


9. What would cause a PUT request to return a 409 status?  
If a Request was missing req.query.id or req.body.text


10. What happens if you try to send a query in the GET request URL? Why do you get that response?  
The code will return the array of all posts because there is no Handling Errors for the endpoint function. In other words, the code will show a status 200 and send all the array of posts, regardless of the query that is added to the GET request URL.
