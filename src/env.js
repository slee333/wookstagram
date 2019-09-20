// Loading all configurations from .env file. That is why we need "dotenv"

import dotenv from "dotenv";
import path from "path"
dotenv.config({ path: path.resolve(__dirname, ".env") });

// All these are  imported to server.js
