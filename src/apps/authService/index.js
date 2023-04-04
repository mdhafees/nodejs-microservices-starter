import createApp from "../../app";
import googleAuth from "./routes/google/auth";
import localAuth from "./routes/local/auth";
import session from "express-session"
import passport from "../../config/auth/passportConfig";
import dotenv from 'dotenv';

dotenv.config();
const env = process.env.NODE_ENV || "development"
const port = process.env.AUTH_SERVICE_PORT || 5002;

const service = () => {
	const app = createApp();

	app.use(session({
		secret: 'SECRET_KEY',
		resave: false,
		saveUninitialized: false
	}));

	app.use(passport.initialize());
	app.use(passport.session());


	app.use("/auth/google", googleAuth);
	app.use("/auth/local", localAuth);
	app.listen(port, () => {
		console.info(`Auth Service server started on port ${port} (${env})`);
	});
};
export default service;
