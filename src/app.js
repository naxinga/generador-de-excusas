window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generador();
  });

  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  
  
  
  function generador() {
  
  let IndiceWho = Math.floor(Math.random() * who.length);
  let IndiceAction = Math.floor(Math.random() * action.length);
  let IndiceWhat = Math.floor(Math.random() * what.length);
  let IndiceWhen = Math.floor(Math.random() * when.length);

    let excusa =
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
