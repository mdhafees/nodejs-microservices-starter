import express from "express";

// write all imports above this function as I have used a common file to generate app configurations to all services created.
// only include function packages libraries which are needed in all services here. If the requirement is only for one service it can be mentioned in thier respective index.js

const createApp = () => {
    const app = express();
    app.use(express.json());
    return app;
};
export default createApp;
