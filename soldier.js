const soldier = {
    name: "Т1емло",
    health: 10,
    weapon: {
      weaponName: "Топ",
      cartridges: 30,
    },
    supplies: 3,
  
    fire: function () {
      if (this.weapon.cartridges <= 0) {
        return "Обойма пуста. Перезарядитесь";
      } else {
        this.weapon.cartridges--;
        return "Бах-бах";
      }
    },
    recharge: function () {
      if ((this.supplies = 0)) {
        return "Не осталось припасов";
      } else {
        this.supplies--;
        this.weapon.cartridges === 30;
        return "Перезарядка";
      }
    },
  
    injure: function () {
      this.health--;
      if (this.health <= 0) {
        return "Ты проиграл";
      }
    },
  
    getstatus: function () {
      let namberCartridges = this.supplies * 30 + this.weapon.cartridges
    return `health: ${this.health} cartridges: ${namberCartridges} `
  },
  };
  soldier.fire()
  console.log(soldier.getstatus())
  
