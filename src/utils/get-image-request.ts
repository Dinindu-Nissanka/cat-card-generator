import axios, { AxiosResponse } from "axios";
import { getConfigs } from "../config";
import { ENCODING_TYPE } from "../constants";
import { RequestInputParams } from "../types";

/**
 * This function is to return a promise object that contains a get request to fetch an image
 * @param {object} param - Object contains the request parameters to fetch an image
 * @param {string} param.text - Image text
 * @param {string} param.width - Image width
 * @param {string} param.height - Image height
 * @param {string} param.color - Image color
 * @param {string} param.size - Image size
 * @returns
 */
export const getImageRequest = ({
  text,
  width,
  height,
  color,
  size,
}: RequestInputParams): Promise<AxiosResponse> => {
  const { baseUrl } = getConfigs();
  return axios.get(`${baseUrl}/${text}`, {
    params: {
      width,
      height,
      color,
      s: size,
    },
    responseEncoding: ENCODING_TYPE,
  });
};
