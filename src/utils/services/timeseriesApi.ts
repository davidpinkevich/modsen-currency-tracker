import { type TypeDataTimeseries } from "@src/types";

import axios, { type AxiosInstance } from "axios";

class TimeseriesService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.URL_TIMESERIES,
      headers: {
        "X-CoinAPI-Key": process.env.APIKEY_COIN,
        Accept: "application/json"
      }
    });
  }

  async getTimeseries({
    from,
    to,
    start,
    end
  }: {
    from: string;
    to: string;
    start: string;
    end: string;
  }): Promise<TypeDataTimeseries | undefined> {
    try {
      const response = await this.axiosInstance.get(`${from}/${to}/history`, {
        params: {
          period_id: "1DAY",
          time_start: start,
          time_end: end
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

const serviceTimeseries = new TimeseriesService();

export { serviceTimeseries };
