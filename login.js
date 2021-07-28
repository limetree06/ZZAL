function signin() {
  username = document.getElementById("username").value;
  password = document.getElementById("pass").value;

  console.log(typeof username);
  console.log(typeof password);

  fetch("http://192.249.18.145:443/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => {
      if (res.status === 400) {
        alert("등록되지 않은 아이디나 비밀번호 입니다.");
      } else if (res.status === 200) {
        alert("로그인 성공하였습니다");
        window.location.href = "./imagesPage.html";
      }
    })
    .catch((error) => console.log("error", error));
}

function link_click() {
  var obj = document.getElementById("copyImg");
  var ctr = document.body.createControlRange();
  ctr.addElement(obj);
  ctr.execCommand("copy");
  alert("복사되었습니다. Ctrl+V를 이용하시면 됩니다.");
}
