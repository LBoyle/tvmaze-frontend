# tvmaze-frontend
Tech test - Consume the tvmaze API using React

# Setup
- Clone repo
- yarn is recommended  ```npm install -g yarn```
- Install packages ```yarn```
- Open two terminal windows in the project root
- One for sass ```yarn sass:watch```
- One for React ```yarn start```

```

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "eject": "react-scripts eject",
  "sass": "node-sass src/styles/scss/*.scss --output src/styles/css --source-map-embed --source-map-contents --output-style compressed",
  "sass:watch": "yarn sass --watch"
}

```

### Rota
- Monday 8th - 2 hours.
- Tuesday 9th - 1 hour.

### Tools used
- Atom
- Insomnia REST client
- Will try the chrome extensions
- ZSH

### Techs used
- React
- react-router-dom and history
- axios
- skeleton.css
- node-sass

## Development Chonology

**Monday 8th**

Used create-react-app to start a project.

Import normalize and skeleton.

Using react-router-dom and history.

Skeleton doesn't have a navbar so I'll have to make one, and responsive.

Just two main views for now.

Planning, examining the json data, drawing component trees.

**Tuesday 9th**

Made basic somewhat responsive navbar.

Installed and setup node-sass for watch.
