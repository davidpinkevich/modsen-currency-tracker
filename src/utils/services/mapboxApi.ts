import { type MapboxItem, type TypeDataMapbox } from "@src/types";

import axios, { type AxiosInstance } from "axios";

class MapboxService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.URL_MAPBOX,
      headers: {
        Accept: "application/json"
      }
    });
  }

  async getBanks(
    language: string,
    limit: number,
    proximity: number[]
  ): Promise<MapboxItem[] | undefined> {
    try {
      const response: TypeDataMapbox = await this.axiosInstance.get("", {
        params: {
          access_token: process.env.APIKEY_MAP,
          language,
          limit,
          proximity: proximity.join(",")
        }
      });
      return response.data.features;
    } catch (error) {
      console.error(error);
    }
  }
}

const serviceMapbox = new MapboxService();

export { serviceMapbox };
