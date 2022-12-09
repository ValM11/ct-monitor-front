var baseUrl = "http://localhost:3001";

export function fetchCheckUser(userCredentials, setPage) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userCredentials),
  };
  let url = baseUrl + "/check-user-role";
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((data) => {
      localStorage.setItem("tokenRole", data);
      setPage(JSON.parse(data).user_role);
    });
}
