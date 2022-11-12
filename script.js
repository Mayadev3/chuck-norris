document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();
  let input = document.querySelector("#category").value;

  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.chucknorris.io/jokes/search?query=${input}`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText);
      console.log(response);
      console.log(response.total);
      let output = "";
      response.result.forEach((answer) => {
        output += `<li>${answer.value}</li>`;
        document.querySelector(".jokes").innerHTML = output;
      });
    }
  };

  xhr.send();
}
