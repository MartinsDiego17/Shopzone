import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const getEnv = (key, defaultValue = undefined) => {
  const value = process.env[key];
  if (!value && defaultValue === undefined) {
    throw new Error(`La variable de entorno "${key}" no está definida`);
  }
  return value || defaultValue;
};
