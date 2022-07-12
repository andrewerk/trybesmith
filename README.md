# Welcome to the Trybesmith Project Repository!

This individual project was developed within Trybe Course. The main goal was to build a CRUD RESTful API in TypeScript for a MMROPG shop back-end. With this application, you can add new users, login and receive a authentication token for other requests, add new products and new orders.

## Read the docs and deploy URL

This API is fully documented with OpenAPI Specification in the url:
`DEPLOY URL`


## Running locally

To run this application locally, you will need to clone this repository with:

```git clone git@github.com:andrewerk/trybesmith.git```

Then, just go to the project root with:

```cd trybesmith```

Once you are at the project root directory, set the .env file correctly (just remove .example, without changing its content).

Finally, build the containers to run the API with docker-compose:

```docker-compose up -d```

The API will be listening on `http://localhost:3000`! :rocket:

If the images created for this application are removed, when rebuilding the Database will be restored.


## Skills developed during this Project

During this project, we had to apply new knowledge about TypeScript, software backend architecture, especially about MSC (Model - Service - Controller), REST constraints to build a RESTful API, reinforce Node.js and Express concepts, and JWT Authentication. 
