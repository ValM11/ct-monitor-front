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
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedStudy),
  };
  let url = baseUrl + "/update-study/" + study;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((data) => console.log(data));
}

export function fetchStudies(setStudyList) {
  let url = baseUrl + "/studies-codes";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setStudyList(data);
    });
}

export function fetchStudyInfo(selectedStudy, selectedSite, setSiteInfos) {
  if (selectedStudy !== "") {
    let url = (url = baseUrl + "/study-info/" + selectedSite);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSiteInfos(data);
      });
  }
}
