16. NAVIGATION WITH REACT ROUTER

Bad Navigation
==================
1. You add an <a /> tag to your application with href='/pagetwo' and click it.
2. Your browser makes a request to localhost:3000/pagetwo.
3. Development server responds with index.html file.
4. Browser receives index.html file, dumps/wipes old HTML file it was showing (including all of our React/Redux state data!)
5. index.html file lists our JS files in script tags - browser downloads and executes these scripts.
6. Our app starts up

How we want to navigate
===========================

1. User wants to navigate to another page in our app
2. User clicks a 'Link tag'
3. React Router prevents the browser from navigating to the new page and fetching new index.html file!
4. URL still changes
5. 'History' sees updated URL, takes URL and sends it to BrowserRouter
6. BrowserRouter communicates the URL to Route Components