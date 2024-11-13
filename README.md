# Simple WebAuthn demo
Implementation of WebAuthn API written in React and Express.
Demo that shows the future of passwordless authentication.
Users register with a username and one of the supported authenticators.
Login process requires matching username and authenticator pair.

## Installation

### Requirements
  - Node.js
  - MongoDB (local or remote cluster)
### Setup
  - Clone this repo.
  - Run `npm install` in cloned repo.
  - Configure environment variables in `.env` file, MongoDB connection is required for the app to run.
  If the app is run locally then it's not necessary to provide RP Id(Relaying Party ID) as it defaults to localhost, else you must provide RP Id to match your origin e.g.`RP_ID=https://web-auth-n-demo.herokuapp.com/`  
## Launch
### Development
  - First run `npm install` to install dependencies.
  - Client: `npm run client`
  - Server `npm run server`
### Production 
  - First run `npm run build`
  - Then run `npm start` to start the server.
## Notes
### Supported Attestation formats
  - Packed
  - Fido-U2F
  - Android SafetyNet
  - Android Key store (Needs testing)
### License
  - MIT  
 - Implemented following Ackermann Yuriy examples.
 - Implemented following Toni Jukica examples.
