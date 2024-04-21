# Eunoia - Your AI Mental Health Assistant Chatbot Specifically For Women

## Simple Dev Guide
#### Have a OpenAI API Screte Key ready..

Clone the Repo
```
git clone https://github.com/Shumeng-Guo/WomenMentalHealthAI.git
```
Install all the packages
```
npm i
```
Create your .env file for your OpenAI API Screte key, and put your key like this:
```
OPENAI_API_KEY={Your Key}
```
And put the Assistant ID into the .env file:
```
ASSISTANT_ID=asst_5qDxyZNavX0wT4UuxpGsFyVC
```
Run the server:
```
npm /backend/index.js
```

#### Frontend
```
cd /frontend/my-react-app
npm i
```
Run the React App
```
npm start
```

Now you should be able to get the server run locally at:
```
localhost:3000
```
### Testing the backend using Postman
First, make a GET request to the /thread endpoint to start a thread chat
```
GET localhost:3000/thread
```
This will give you a thread ID, which will be used next.

Then, make a POST request to the /message endpoint with the thread ID and your question as the body:
```
{
    "threadId": {Your Thread ID in String format},
    "message": "I'm on my period, and I'm not feeling well, and lately I'm breaking up with my boyfriend. At this moment, I'm feeling so   terrible, emotional and physical from the period pain. I'm deciding if I should go see a therapist, but it's very expensive, can you give me some professional advice first?"
}
```

Wait for a second...

Check out your response from our AI!

