import minimist from "minimist";
import { ProcessArgs } from "../types";
import Logger from "./logger";
import {
  DEFAULT_COLOR,
  DEFAULT_FILE_NAME,
  DEFAULT_GREETING,
  DEFAULT_HEIGHT,
  DEFAULT_SIZE,
  DEFAULT_WHO,
  DEFAULT_WIDTH,
} from "../constants";

/**
 * Fetches and validates the command-line arguments.
 * @returns ProcessArgs - Object containing the validated arguments.
 * @throws Error - If any of the arguments are invalid.
 */
export const getArgs = (): ProcessArgs => {
  const {
    greeting = DEFAULT_GREETING,
    who = DEFAULT_WHO,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    color = DEFAULT_COLOR,
    size = DEFAULT_SIZE,
    filePath = process.cwd(),
    fileName = DEFAULT_FILE_NAME,
  } = minimist(process.argv.slice(2));

  if (!Number.isInteger(width) || width <= 0) {
    Logger.error(
      `Invalid arguments were provided. Width should be a positive integer value`
    );
    throw new Error(
      `Invalid arguments were provided. Width should be a positive integer value`
    );
  }

  if (!Number.isInteger(height) || height <= 0) {
    Logger.error(
      `Invalid arguments were provided. Height should be a positive integer value`
    );
    throw new Error(
      `Invalid arguments were provided. Height should be a positive integer value`
    );
  }

  if (!Number.isInteger(size) || size <= 0) {
    Logger.error(
      `Invalid arguments were provided. Size should be a positive integer value`
    );
    throw new Error(
      `Invalid arguments were provided. Size should be a positive integer value`
    );
  }

  return { greeting, who, width, height, color, size, fileName, filePath };
};
