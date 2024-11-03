// TODO: Silakan sesuaikan BASE URL dari endpoint Anda
const BASE_URL = 'https://asclepius-api-434223049433.asia-southeast2.run.app';

const ENDPOINT = {
  predict: `${BASE_URL}/predict`,
  histories: `${BASE_URL}/predict/histories`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    return json;
  }

  static async getHistories() {
    const response = await fetch(ENDPOINT.histories, {
      method: 'GET',
    });

    const json = await response.json();
    return json;
  }
}
