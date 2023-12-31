# Capstone

This website uses a custom API to generate Magic 8 Ball responses to questions with the purpose of entertaining users. The website must be online for the site to work.

The interactivity aspect of the Magic 8 Ball was created using only CSS and Javascript, there are no external image files except for the background of the website.

-Requirements-
- Visual Studio Code (Live Server extension installed), Node, and npm 

-Accessing the project-
- After installing the required programs, run command `npm i` to download the necessary packages

- Run command `npm run start` to start the custom API

- Right click 'open with Live Server' in the index.html file in VSC

-Utilizing the website-
- Enter a question. Input must end with '?' and begin with any of the following words: 
who|am|what|when|where|will|how|if|would|when|does|why|whose|whom|which|could|should|can|does|don't|dont|won't|wont|couldn't|couldnt|shouldn't|shouldnt|can't|cant
**any other input types (or no input) will return a corresponding error

- Click the 'Shake It!' button or hit the ENTER key to generate a response from the Magic 8 Ball.

-Responsive design-
Break points between mobile (480px) and laptop (769px) that reduce the background to a less busy image

-Features-
Category 1 (2 features):

"Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app."
> The 'fortunes' Array in app.js holds all of the responses possible for the user input questions. Function objects include: 
getFromEightBallApi() 
clearInput()
checkInput()
setErrorFor()
setSuccessFor()
isQuestion()

"Use a regular expression to validate user input and either prevent the invalid input or inform the user about it "
> const regex holds the regular expression restricting user input to sentences begining with interrogative/question words and ending with '?'

Category 2 (1 feature):

"Create a node.js web server using a modern framework such as Express.js or Fastify."
> A locally hosted api using express() to get data specific to the Magic 8 Ball website 