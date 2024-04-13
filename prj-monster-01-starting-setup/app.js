// Returns a random value between min and max
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
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
  },
  methods: {
    attackMonster() {
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
  },
});

app.mount("#game");
