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
    };
  },
  computed: {
    monsterHealthBarStyle: function () {
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthBarStyle: function () {
      return { width: `${this.playerHealth}%` };
    },
    enableSpecialAttack: function () {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      // Get a random value between 5 and 10
      const damage = getRandomValue(5, 10);
      this.monsterHealth -= damage;
      console.log(`monsterHealth: ${this.monsterHealth}`);
      this.attackPlayer();
    },
    attackPlayer() {
      // Get a random value between 5 and 15
      const damage = getRandomValue(5, 15);
      this.playerHealth -= damage;
      console.log(`playerHealth: ${this.playerHealth}`);
    },
    doSpecialAttack() {
      this.currentRound++;
      // Get a random value between 8 and 25
      const damage = getRandomValue(8, 25);
      this.monsterHealth -= damage;
      console.log(`monsterHealth: ${this.monsterHealth}`);
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
      this.attackPlayer();
    },
  },
});

app.mount("#game");
