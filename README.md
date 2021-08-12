Part I - Typeahead component
Develop a typeahead component using React, without the help of prebuilt component libraries. You may assume the following simple RESTful API that returns a JSON array.
GET /names/?search=al&limit=10
Example payload response:
[
{id: 1, name: 'Alabama'},
{id: 2, name: 'Alaska'},
...
]
Required behavior:
1. As the user types, they get a dropdown list of suggestions provided by the API
2. Selecting one of the suggestions should add it to the input field
3. The input field should support holding more than one selection, if required by the consuming application
4. Integrate your component to some app code like a submission button that does something simple with the input 
   
Constraints
   ● Manage state entirely within React. Do not use external state management such as Redux.
   ● You may not use any pre-built components from a library
   ● Please use material-ui for styling
   
Part II - Caching
   Imagine the API used in part 1 is very expensive to use. Develop a caching function to use in conjunction with the component you developed, and wire it in to your component.
   
Part III - Written Questions
   Please provide a written response to the following questions:
   1. If you had control of the web-server, what are some ways you might implement a caching solution?
   2. How might you implement offline caching for your typeahead component?
   3. When using traditional session cookies, what are the primary security concerns and
      mitigation techniques you might use?
   4. What are some advantages and disadvantages to using JWT for authorization and
      authentication in a web application?
   5. What are all the ways you can think of to write BAD React code?
   6. What new Web or React APIs are you most excited about?