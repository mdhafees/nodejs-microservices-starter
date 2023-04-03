import createApp from "../app";
import routes from "./routes";
import dotenv from 'dotenv';

dotenv.config();
dotenv.config();
const env = process.env.NODE_ENV || "development"
const port = process.env.MIDDLEWARE_APP_PORT || 5002;


const service = () => {
	const app = createApp();
	app.use("/", routes);
	app.listen(port, () => {
		console.info(`middlewareApp server started on port ${port} (${env})`);
	});
};
export default service;
