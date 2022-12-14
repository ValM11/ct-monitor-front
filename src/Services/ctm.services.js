var baseUrl = "http://localhost:3001";

export function fetchNewStudy(study) {
  if (Object.keys(study).length !== 0) {
    var token = JSON.parse(localStorage.getItem("tokenRole"));
    const requestOptions = {
      method: "POST",
      headers: { ...{ "Content-Type": "application/json" }, ...token },
      body: JSON.stringify(study),
    };
    let url = baseUrl + "/create-study";
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

export function fetchUpdateStudy(study, updatedStudy) {
  if (typeof study[0] !== "undefined") {
    var token = JSON.parse(localStorage.getItem("tokenRole"));
    const requestOptions = {
      method: "POST",
      headers: { ...{ "Content-Type": "application/json" }, ...token },
      body: JSON.stringify(updatedStudy),
    };
    let url = baseUrl + "/update-study/" + study[0].study_id;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

export function fetchStudies(setStudies) {
  var token = JSON.parse(localStorage.getItem("tokenRole"));
  const requestOptions = {
    method: "GET",
    headers: { ...{ "Content-Type": "application/json" }, ...token },
  };
  let url = baseUrl + "/studies-codes";
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setStudies(data);
    });
}

export function fetchStudyInfo(selectedStudy, setStudyInfos) {
  if (selectedStudy !== "") {
    var token = JSON.parse(localStorage.getItem("tokenRole"));
    const requestOptions = {
      method: "GET",
      headers: { ...{ "Content-Type": "application/json" }, ...token },
    };
    let url = baseUrl + "/study-info/" + selectedStudy;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setStudyInfos(data);
      });
  }
}

export function fetchInvestigator(study, investigatorInfo) {
  if (typeof study[0] !== "undefined") {
    var token = JSON.parse(localStorage.getItem("tokenRole"));
    const requestOptions = {
      method: "POST",
      headers: { ...{ "Content-Type": "application/json" }, ...token },
      body: JSON.stringify(investigatorInfo),
    };
    let url1 = baseUrl + "/add-investigator";
    fetch(url1, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    let url2 = baseUrl + "/link-investigator-study";
    fetch(url2, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
