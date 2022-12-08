var baseUrl = "http://localhost:3001";

export function fetchNewStudy(study) {
  if (Object.keys(study).length !== 0) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(study),
    };
    let url = baseUrl + "/create-study";
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((data) => console.log(data));
  }
}

export function fetchUpdateStudy(study, updatedStudy) {
  if (typeof study[0] !== "undefined") {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStudy),
    };
    console.log(study);
    let url = baseUrl + "/update-study/" + study[0].study_id;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((data) => console.log(data));
  }
}

export function fetchStudies(setStudies) {
  let url = baseUrl + "/studies-codes";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setStudies(data);
    });
}

export function fetchStudyInfo(selectedStudy, setStudyInfos) {
  if (selectedStudy !== "") {
    let url = baseUrl + "/study-info/" + selectedStudy;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStudyInfos(data);
      });
  }
}

export function fetchInvestigator(study, investigatorInfo) {
  if (typeof study !== "undefined") {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(investigatorInfo),
    };
    console.log(study);
    let url = baseUrl + "/add-investigator";
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((data) => console.log(data));
  }
}

export function fetchCheckUser(userCredentials, setPage) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userCredentials),
  };
  let url = baseUrl + "/check-user";
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((data) => {
      setPage(JSON.parse(data).user_role);
    });
}
