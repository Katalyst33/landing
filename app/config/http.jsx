export async function $ClientFetch(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      // Create an error with the response and the data for clients to handle

      throw data;
    }

    return data; // Return data for successful responses
  } catch (error) {
    // This will handle network errors and the errors thrown above
    throw error;
  }
}
