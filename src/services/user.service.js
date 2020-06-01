export async function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  try {
    const response = await fetch(
      "localhost:5050/users/authenticate",
      requestOptions
    );

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const token = await response.json();

    return token;
  } catch (error) {
    console.log(error);
  }
}
