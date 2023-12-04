Languages used
HTML,CSS and JavaScript(React.js)
- how to open react project file
- command 
- npm create vite@latest file-name -- --template react
- after created file - npm install
- About Application
- this Router task shows the Different courses created using "React + Vite"
-App.jsx File mainly using router and includes 6 main components
- All
 - contains
  -"All" component that renders a section displaying course information from JSON data. It utilizes the CardDisplay component to present details like images, titles, and descriptions in a responsive card format. The 'details' prop is mapped, and for each item in the data, the CardDisplay component is called to display the course information when clicked.

- CardDisplay
 - contains
  -the CardDisplay component responsible for rendering details passed to it. It generates a card layout displaying information like an image, course title, description, a "READ MORE" link, date, and comments for a course.

- Careers
 - contains
  - "Careers" component responsible for displaying only the courses categorized as careers from the provided JSON data. It uses the CardDisplay component to present information like images, titles, and descriptions in a responsive card format. The 'details' prop is mapped, and only the courses labeled as "careers" are displayed using the CardDisplay component when clicked.

- CyberSecurity
 - contains
  -this CyberSecurity code works as the careers but it maps the CyberSecurity and shows the CyberSecurity details
- DataScience
 - contains
  -this DataScience code works as the careers but it maps the DataScience and shows the DataScience details

- FullStack
 - contains
  -this FullStack code works as the careers but it maps the FullStack and shows the FullStack details
 
  
- To Run Application
   - npm run dev
- after the above command 
the file runs in this url -http://localhost:5173/

- Then i have pushed my code on github and 
deployed my task 

deployed link
-

https://fancy-crumble-25d86e.netlify.app

 
