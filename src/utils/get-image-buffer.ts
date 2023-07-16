import { Jimp } from "@jimp/core";
import { promisify } from "util";
import { MIME_TYPE } from "../constants";

/**
 * This function is to return the buffer of an image
 * @param image - Jimp image needs to be converted to a buffer
 * @returns
 */
export const getBuffer = (image: Jimp): Promise<Buffer> => {
  const getImageBufferAsync = promisify(image.getBuffer.bind(image));
  return getImageBufferAsync(MIME_TYPE);
};
