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

function search() {
  search = document.getElementById("search").value;
  fetch("http://192.249.18.145:443/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      search: search,
    }),
  });
}
