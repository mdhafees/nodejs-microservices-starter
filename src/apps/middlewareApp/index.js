import dotenv from 'dotenv';
dotenv.config();

import createApp from "../../app";
import routes from "./routes";

const env = process.env.NODE_ENV || "development"
const port = process.env.MIDDLEWARE_APP_PORT || 5002;


const service = () => {
	const app = createApp();
	app.use("/", routes);
	app.listen(port, () => {
		console.info(`MiddlewareApp server started on port ${port} (${env})`);
	});
};
export default service;
