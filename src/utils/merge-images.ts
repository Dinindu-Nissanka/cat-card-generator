import mergeImg from "merge-img";
import { Jimp } from "@jimp/core";

/**
 * Merge two image buffers into one.
 * @param imageBuffers - Image buffers of the two images.
 * @returns Promise<Jimp> - A promise that resolves to a Jimp object representing the merged image.
 */
export const mergeImages = (imageBuffers: Buffer[]): Promise<Jimp> => {
  return mergeImg(
    imageBuffers.map((buff) => {
      return { src: buff, offsetX: 0, offsetY: 0 };
    })
  );
};
