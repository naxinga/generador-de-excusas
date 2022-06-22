window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generador();
  });

  var who = ["The dog", "My grandma", "His turtle", "My bird"];
  var action = ["ate", "peed", "crushed", "broke"];
  var what = ["my homework", "the keys", "the car"];
  var when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function generador() {
    var IndiceWho = Math.floor(Math.random() * who.length);
    var IndiceAction = Math.floor(Math.random() * action.length);
    var IndiceWhat = Math.floor(Math.random() * what.length);
    var IndiceWhen = Math.floor(Math.random() * when.length);

    var excusa =
      who[IndiceWho] +
      " " +
      action[IndiceAction] +
      " " +
      what[IndiceWhat] +
      " " +
      when[IndiceWhen];

    return excusa;
  }

  console.log(generador());
  document.getElementById("excuse").innerHTML = generador();
};
