const GET_URL = 'https://httpbin.org/get';

export const getData = async () => {
  try {
    const response = await fetch(GET_URL, {
      headers: {
        Accept: 'application/json',
      },
    });

    return response;
  } catch (error) {
    return { url: GET_URL, error: 'get error' };
  }
};
