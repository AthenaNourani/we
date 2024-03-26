## How to make the app run:
 
1. `git checkout status-lesson-X`
2. change the package.json key dev to: ` "dev": "set DEBUG=shopping-lists:* && nodemon ./bin/www" `
3. make a `npm install`
4. make a `npm audit fix --force`
5. make a `npm audit fix`
6. rename `.env.example` to `.env` recheck if  following content is provided on line 1: `DATABASE_URL=mongodb://localhost:27017/shopping`
7. make a `npm install nodemon`
8. open `bin/www` and insert a `console.log(`Server is running on http://localhost:${addr.port} 🚀`);` on the 2nd last line right before the last closing curly bracket.
9. make a `npm run dev`