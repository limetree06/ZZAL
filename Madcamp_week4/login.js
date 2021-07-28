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
        alert("로그인 성공하였습니다.");
        location.href = "http://172.10.18.145:443";
      }
    })
    .catch((error) => console.log("error", error));
}
