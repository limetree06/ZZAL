function signup() {
  username = document.getElementById("username").value;
  password = document.getElementById("psw").value;
  psw_repeat = document.getElementById("psw-repeat").value;

  fetch("http://192.249.18.145:443/signup", {
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
        swal("Notice", "이미 등록되어 있는 닉네임 입니다.");
      } else if (res.status === 200) {
        swal("Notice", "회원가입 성공하였습니다. 로그인 하여주세요");
        window.location.href = "./login.html";
      }
    })
    .catch((error) => console.log("error", error));

  document.getElementById("username").value = "";
  document.getElementById("psw").value = "";
  document.getElementById("psw-repeat").value = "";
}
