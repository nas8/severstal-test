const POST_URL = 'https://httpbin.org/post';

export const postData = async () => {
  try {
    const response = await fetch(POST_URL, {
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
    });
    return response;
  } catch (error) {
    return { url: POST_URL, error: 'post error' };
  }
};
