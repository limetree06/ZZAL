function refresh() {
  fetch("http://192.249.18.145:443/refresh", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
}
console.log("refresh");
refresh();

function search_local() {
  search = document.getElementById("search_local").value;
  fetch("http://192.249.18.145:443/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hashtag: search,
    }),
  });
}
