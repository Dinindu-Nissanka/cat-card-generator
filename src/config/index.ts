import { Config } from "../types";
import Logger from "../utils/logger";

export const config: Config = {
  baseUrl: process.env.BASE_URL,
};

const isValidURL = (urlString: string): boolean => {
  try {
    const newUrl = new URL(urlString);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
};

export const getConfigs = (): Config => {
  const baseUrl = process.env.BASE_URL;

  if (!isValidURL(baseUrl)) {
    Logger.error(
      `Invalid environment variables were provided. Provided url is not a valid URL`
    );
    throw new Error(
      `Invalid environment variables were provided. Provided url is not a valid URL`
    );
  }

  return { baseUrl };
};
