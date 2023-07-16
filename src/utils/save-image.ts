import { writeFile } from "fs";
import { promisify } from "util";
import { ENCODING_TYPE } from "../constants";

// Promisify the writeFile function once
const writeFileAsync = promisify(writeFile);

/**
 * This function is to save an image
 * @param filePath - File patch to save the image file
 * @param buffer - Image buffer
 * @returns
 */
export const saveImageAsync = async (
  filePath: string,
  buffer: Buffer
): Promise<void> => {
  return writeFileAsync(filePath, buffer, ENCODING_TYPE);
};
