# Features (client)

* Features is a BDD collaboration tool bringing technical and non-technical people together to work on Scenarios.

## Features... so meta

* Auto import of feature files from Git (SSH or https)
* View feature files with auto Gherkin colour highlighting
* Multiple project support per user

## Technologies
* [React 15.x](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [React Router 3.x](https://reacttraining.com/react-router/)
* [Semantic UI](https://react.semantic-ui.com/introduction)
* [Axios](https://github.com/mzabriskie/axios)
* [Formsy React](https://github.com/christianalfoni/formsy-react)

## Server-side
See https://github.com/ademuk/features-service#technologies

## Installation

### Dependencies
```
$ yarn
```

### Set environment vars
```
REACT_APP_API_URL=http://<service_hostname>:<service_port>/api # i.e. http://features-service.appyharry.com:8000/api
REACT_APP_WEBSOCKET_API_URL=ws://<service_hostname>:<service_port>/api # i.e. ws://features-service.appyharry.com:8000/api
```

### Starting the client web server
```
$ pip install honcho
$ honcho start
```
