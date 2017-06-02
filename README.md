# Features (client)

* Features is a BDD collaboration tool bringing technical and non-technical people together to work on Scenarios
* Created by [Adem Gaygusuz](https://adem.io)

## Features... so meta

* Auto import of feature files from Git (SSH or https)
* View feature files with auto Gherkin colour highlighting
* Multiple project support per user

### Screenshots

#### Auto import
<img src="https://github.com/ademuk/features/raw/master/screenshots/auto-import.png" alt="Auto import screenshot" width="500">

#### Gherkin highlighting
<img src="https://github.com/ademuk/features/raw/master/screenshots/gherkin-highlighting.png" alt="Gherkin highlighting screenshot" width="500">

## Technologies
* [React 15.x](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* WebSockets
* [React Router 3.x](https://reacttraining.com/react-router/) - Looking to move to the new declarative v4 soon
* [Semantic UI](https://react.semantic-ui.com/introduction)
* [Axios](https://github.com/mzabriskie/axios)
* [Formsy React](https://github.com/christianalfoni/formsy-react)

### Server-side
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

## Author

* Created by [Adem Gaygusuz](https://adem.io)
* Email address: <adem@ardweb.co.uk>
* [@ademuk](https://www.twitter.com/ademuk) on Twitter

## License

Features is licensed under the MIT License. (See LICENSE)
