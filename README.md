# Timestamp Microservice
Project built for [https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)

User story:

- I can submit a form object that includes a file upload.
- The from file input field has the "name" attribute set to "upfile". We rely on this in testing.
- When I submit something, I will receive the file name, and size in bytes within the JSON response.

# Usage
## Setup
- `git clone https://github.com/askov/file-metadata-microservice`
- `cd file-metadata-microservice`
- `npm i`
- `npm run dev`

With default settings you can reach app at http://localhost:3000

## Tests
- `npm test`

## Env
In order to have working hrefs, set HOST in .env

