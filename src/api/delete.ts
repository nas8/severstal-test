const DELETE_URL = 'https://httpbin.org/delete';

export const deleteData = async () => {
  try {
    const response = await fetch(DELETE_URL, {
      headers: {
        Accept: 'application/json',
      },
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    return { url: DELETE_URL, error: 'delete error' };
  }
};
