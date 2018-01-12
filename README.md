# tvmaze-frontend
Tech test - Consume the tvmaze API using React

### Heroku
https://tvmaze-frontend.herokuapp.com/

Unfortunately heroku has blocked the tvmaze api because it doesn't use https. I recommend you clone the repo and run it locally to see it working.

### Setup
- Clone repo
- yarn is recommended  ```npm install -g yarn```
- Install packages ```yarn```
- Open two terminal windows in the project root
- One for sass ```yarn sass:watch```
- One for React ```yarn start```

### Build for prod
- Run ```yarn sass``` first to compile sass
- Run ```yarn build``` to package the whole thing
- I was using http-server from npm to test prod build ```http-server build```
- Now I've set up ```yarn prod``` to deploy the same way I would on Heroku

```

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "eject": "react-scripts eject",
  "sass": "node-sass src/styles/scss/*.scss --output src/styles/css --source-map-embed --source-map-contents --output-style compressed",
  "sass:watch": "yarn sass --watch",
  "prod": "./node_module/.bin/forever -m 5 index.js"
}

```

### Techs used
- React
- react-router-dom and history
- axios
- skeleton.css
- node-sass

### Notes
- I installed heroku-cli in the project and run it with a yarn script, Ubuntu security prevented me from installing it globally, so ```yarn heroku [some command]```.
- I ran the css libs through sass to minify them into the React project, then react-scripts uses the minified css.
- I'm removing heroku-cli from the app because installing dependancies errors if node version is wrong.

## Development Chonology

**Monday 8th** 2 hours.
- Used create-react-app to start a project.
- Import normalize and skeleton.
- Using react-router-dom and history.
- Skeleton doesn't have a navbar so I'll have to make one, and responsive.
- Just two main views for now.
- Planning, examining the json data, drawing component trees.

**Tuesday 9th** - 1 hour.
- Made basic somewhat responsive navbar.
- Installed and setup node-sass for watch.

**Wednesday 10th** - 4 hours.
- Made request using axios and promise chain.
- Displayed in a list, had trouble with state management, but I was overcomplicating it.
- Created the common component ListItem to be reused.
- Created a page to show a single show, makes a new request.

**Thursday 11th** - 5 hours.
- Added two filters on shedule page.
- Cleaned up a bunch of stuff, fixed a few mistakes.
- Don't need prop-types so far.
- Made favourites page, stored favourite shows in localStorage using JSON.stringify().
- Reorganized component library. Next I'll add favourite episodes.
- Can't refresh after delete item from favourites - edit: fixed it.
- Worked on styling consistency a little.

**Friday 12th** - 3 hours.
- Beginning css refactor, search fields on Homepage done.
- Refactored css more.

Emailed Dan to submit.
