import "./style.css";

function component() {
  const element = document.createElement("div");

  /*element.innerHTML = _.join(["Hello", "webpack"], " ");*/

  return element;
}
/*OVAN INKLISTRAD SKIT ENL INSTRUKTION.. :D*/
document.body.appendChild(component());

window.onload = function() {
  class game {
    currentmonster: number;
    player: any;
    monstersInput: any;
    monsterList: any;
    actionList: any;

    constructor() {
      this.monstersInput = document.querySelectorAll("#monsters input");
      this.monsterList = [];
      this.currentmonster = 0;
      this.getMonsters();

      this.player = document.querySelector("#playerData");

      this.actionList = document.querySelector("#console");
    }

    getMonsters() {
      for (let monster of this.monstersInput) {
        this.monsterList.push(monster.dataset.name);
        this.monsterList.push(monster.dataset.health);
        this.monsterList.push(monster.dataset.strength);
      }
    }

    logger() {
      let element = document.createElement("p");
      element.innerHTML =
        "You did " +
        this.player.dataset.strength +
        " damage, " +
        this.monsterList[this.currentmonster] +
        " hit you for " +
        this.monsterList[this.currentmonster + 2] +
        " damage!";
      this.actionList.appendChild(element);
    }

    render() {
      var playerName: HTMLInputElement = document.querySelector("#playerName");
      playerName.value = this.player.dataset.name;
      var playerStrength: HTMLInputElement = document.querySelector(
        "#playerStrength"
      );
      playerStrength.value = this.player.dataset.strength;
      var playerHealth: HTMLInputElement = document.querySelector(
        "#playerHealth"
      );
      playerHealth.value = this.player.dataset.health;

      var monsterName: HTMLInputElement = document.querySelector(
        "#monsterName"
      );
      monsterName.value = this.monsterList[this.currentmonster];
      var monsterHealth: HTMLInputElement = document.querySelector(
        "#monsterHealth"
      );
      monsterHealth.value = this.monsterList[this.currentmonster + 1];
      var monsterStrength: HTMLInputElement = document.querySelector(
        "#monsterStrength"
      );
      monsterStrength.value = this.monsterList[this.currentmonster + 2];

      var monsterlogo: HTMLInputElement = document.querySelector(
        "#monsterIcon"
      );
      if (this.currentmonster == 0) monsterlogo.src = "img/skel.jpg";
      if (this.currentmonster == 3) monsterlogo.src = "img/y.jpg";
      if (this.currentmonster == 6) monsterlogo.src = "img/skel.jpg";
      if (this.currentmonster == 9) monsterlogo.src = "img/y.jpg";

      if (go.currentmonster > go.monsterList.length - 1) monsterName.value = "";
      else this.logger();
    }
  }

  var go = new game();
  go.render();

  var fightButton: HTMLInputElement = document.querySelector("#fight");
  fightButton.onclick = function(e) {
    go.player.dataset.health =
      go.player.dataset.health - go.monsterList[go.currentmonster + 2];

    go.monsterList[go.currentmonster + 1] =
      go.monsterList[go.currentmonster + 1] - go.player.dataset.strength;

    if (go.monsterList[go.currentmonster + 1] <= 0)
      go.currentmonster = go.currentmonster + 3;

    if (go.currentmonster > go.monsterList.length - 1) {
      alert("Winner winner Chicken Dinner!");
    }

    go.render();
  };
};
