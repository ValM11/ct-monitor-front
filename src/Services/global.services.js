var baseUrl = "http://localhost:3001";

export function fetchCheckUser(userCredentials, setPage) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userCredentials),
  };
  let url = baseUrl + "/check-user-role";
  return fetch(url, requestOptions).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
