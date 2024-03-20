function dungeonGame(input) {
    let rooms = input[0].split('|');
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let isDead = false;
    let dungeonLength = rooms.length;
  
    for (let i = 0; i < dungeonLength; i++) {
      let [name, value] = rooms[i].split(' ');
  
      if (name === 'potion') {
        let healing = Number(value);
        let healed = Math.min(health + healing, 100);
        let amountHealed = healed - health;
        health = healed;
        console.log(`You healed for ${amountHealed} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else if (name === 'chest') {
        let coinsFound = Number(value);
        coins += coinsFound;
        console.log(`You found ${coinsFound} coins.`);
      } else {
        let monster = name;
        let attack = Number(value);
        health -= attack;
  
        if (health > 0) {
          console.log(`You slayed ${monster}.`);
        } else {
          console.log(`You died! Killed by ${monster}.`);
          console.log(`Best room: ${i + 1}`);
          isDead = true;
          break;
        }
      }
  
      bestRoom = i + 1;
    }
  
    if (!isDead) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
      console.log(`Best room: ${bestRoom}`);
    }
  }
  
  dungeonGame(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
  