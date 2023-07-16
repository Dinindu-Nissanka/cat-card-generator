import dotenv from "dotenv";
import {
  getBuffer,
  getImageRequest,
  mergeImages,
  saveImageAsync,
} from "./utils";
import Logger from "./utils/logger";
import { getArgs } from "./utils/get-args";
import { ENCODING_TYPE } from "./constants";
import { Jimp } from "@jimp/core";

// Load environment variables from the .env file
dotenv.config();

const main = async () => {
  try {
    // fetch and validate the arguments passed through the process execution
    const { greeting, who, width, height, color, size, filePath, fileName } =
      getArgs();

    // Generate a Promise request to download the image
    const imageRequests = [greeting, who].map((text: string) =>
      getImageRequest({
        text,
        width,
        height,
        color,
        size,
      })
    );

    // Fetch both get requests asynchronously
    const fetchedImages = await Promise.all(imageRequests);

    // Merge two images into single image
    const mergedImage: Jimp = await mergeImages(
      fetchedImages.map((image) => new Buffer(image.data, ENCODING_TYPE))
    );

    // Get the buffer of the newly created image so it can be saved
    const imageBuffer = await getBuffer(mergedImage);

    // Save the image
    const fileOut = `${filePath}/${fileName}`;
    await saveImageAsync(fileOut, imageBuffer);
    Logger.info(`Successfully created the image in ${fileOut}`);
  } catch (error) {
    Logger.error(
      `Error occurred while fetching and generating the image. ${error}`
    );
  }
};

main();
