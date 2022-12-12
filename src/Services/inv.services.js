var baseUrl = "http://localhost:3001";

export function fetchInvStudies(inv, setInvStudies) {
  var token = JSON.parse(localStorage.getItem("tokenRole"));
  const requestOptions = {
    method: "GET",
    headers: { ...{ "Content-Type": "application/json" }, ...token },
  };
  let url = baseUrl + "/studies-inv/" + inv;
  fetch(url, requestOptions)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      setInvStudies(data);
    });
}

export function fetchStudyPatients(study, inv, setStudyPatients) {
  var token = JSON.parse(localStorage.getItem("tokenRole"));
  const requestOptions = {
    method: "GET",
    headers: { ...{ "Content-Type": "application/json" }, ...token },
  };
  let url = baseUrl + "/patients-study/" + study + "/" + inv;
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setStudyPatients(data);
    });
}

export function fetchPatientVisit(table, patient, visit, setPatientVisit) {
  var token = JSON.parse(localStorage.getItem("tokenRole"));
  const requestOptions = {
    method: "GET",
    headers: { ...{ "Content-Type": "application/json" }, ...token },
  };
  let url = baseUrl + "/patients-info/" + table + "/" + patient + "/" + visit;
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setPatientVisit(data);
    });
}

export function fetchAddPatientInfo(table, patientInfo) {
  var token = JSON.parse(localStorage.getItem("tokenRole"));
  const requestOptions = {
    method: "POST",
    headers: { ...{ "Content-Type": "application/json" }, ...token },
    body: JSON.stringify(patientInfo),
  };
  let url = baseUrl + "add-patient-info/" + table;
  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((data) => console.log(data));
}

export function fetchUpdatePatientInfo(table, patient, visit, patientInfo) {
  var token = JSON.parse(localStorage.getItem("tokenRole"));
  const requestOptions = {
    method: "POST",
    headers: { ...{ "Content-Type": "application/json" }, ...token },
    body: JSON.stringify(patientInfo),
  };
  let url =
    baseUrl + "/update-patient-info/" + table + "/" + patient + "/" + visit;
  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((data) => console.log(data));
}
