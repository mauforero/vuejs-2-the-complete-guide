// Returns a random value between min and max
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      currentRound: 0,
      monsterHealth: 100,
      playerHealth: 100,
      gameStatus: "started",
      battleLogMessages: [],
    };
  },
  computed: {
    monsterHealthBarStyle: function () {
      if (this.monsterHealth < 0) {
        return { width: `0%` };
      }
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthBarStyle: function () {
      if (this.playerHealth < 0) {
        return { width: `0%` };
      }
      return { width: `${this.playerHealth}%` };
    },
    enableSpecialAttack: function () {
      return this.currentRound % 3 !== 0;
    },
    gameHasEnded: function () {
      return this.gameStatus !== "started";
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      // Get a random value between 5 and 10
      const damage = getRandomValue(5, 10);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    attackPlayer() {
      // Get a random value between 5 and 15
      const damage = getRandomValue(5, 15);
      this.playerHealth -= damage;
      this.addLogMessage("monster", "attack", damage);
    },
    doSpecialAttack() {
      this.currentRound++;
      // Get a random value between 8 and 25
      const damage = getRandomValue(8, 25);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      // Get a random value between 5 and 10
      const heal = getRandomValue(5, 10);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.addLogMessage("player", "heal", heal);
      this.attackPlayer();
    },
    surrender() {
      this.gameStatus = "lost";
    },
    startNewGame() {
      this.currentRound = 0;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.gameStatus = "started";
      this.battleLogMessages = [];
    },
    addLogMessage(who, what, value) {
      this.battleLogMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  watch: {
    monsterHealth: function (health) {
      if (health <= 0 && this.playerHealth <= 0) {
        this.gameStatus = "draw";
      } else if (health <= 0) {
        this.gameStatus = "win";
      }
    },
    playerHealth: function (health) {
      if (health <= 0 && this.monsterHealth <= 0) {
        this.gameStatus = "draw";
      } else if (health <= 0) {
        this.gameStatus = "lost";
      }
    },
  },
});

app.mount("#game");
