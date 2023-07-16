export type ProcessArgs = {
  greeting: string;
  who: string;
  width: number;
  height: number;
  color: string;
  size: number;
  filePath: string;
  fileName: string;
};

export type RequestInputParams = {
  text: string;
  width: number;
  height: number;
  color: string;
  size: number;
};

export type ImageBufferParams = {
  buffer: Buffer;
  offsetX: number;
  offsetY: number;
};

export type Config = {
  baseUrl: string;
};
