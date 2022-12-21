const getRandomValue = function getRandomValue(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

const application = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      attackRound: 0,
      logs: [],
      winner: null
    }
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) this.winner = "draw"
      else if (value <= 0) this.winner = "player"
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) this.winner = "draw"
      else if (value <= 0) this.winner = "monster"
    }
  },
  computed: {
    mayUseSpecialAttack() {
      return this.attackRound % 3 !== 0
    }
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(2, 8)
      this.monsterHealth -= attackValue
      this.attackRound += 1
      this.insertLogMessage("player", "attack", attackValue)
      this.attackPlayer()
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(6, 12)
      this.monsterHealth -= attackValue
      this.attackRound += 1
      this.insertLogMessage("player", "attack", attackValue)
      this.attackPlayer()
    },
    attackPlayer() {
      const attackValue = getRandomValue(4, 10)
      this.playerHealth -= attackValue
      this.insertLogMessage("monster", "attack", attackValue)
    },
    healPlayer() {
      const healValue = getRandomValue(8, 16)
      if (this.playerHealth >= 100 - healValue) this.playerHealth = 100
      else this.playerHealth += healValue
      this.attackRound += 1
      this.insertLogMessage("player", "heal", healValue)
      this.attackPlayer()
    },
    insertLogMessage(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      })
    },
    surrenderGame() {
      this.startGame()
      this.winner = "monster"
    },
    startGame() {
      this.monsterHealth = 100
      this.playerHealth = 100
      this.currentRound = 0
      this.logs = []
      this.winner = null
    }
  }
})

application.mount("#monster-game")
