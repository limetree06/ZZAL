function search() {
  keyword = document.getElementById("search").value;

  fetch("http://192.249.18.145:443/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyword: keyword,
    }),
  })
    .then((res) => {
      if (res.status === 400) {
        alert("fail");
      } else if (res.status === 200) {
        alert("success");
      }
    })
    .catch((error) => console.log("error", error));
}
