//Задача 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames() {
  return weapons.filter(item => item.name != '').map(item => item.name);
}

function getCountReliableWeapons(reliab) {
  return (weapons.filter(item => item.durability > reliab)).length
}

function hasReliableWeapons(reliab) {
  return weapons.findIndex(item => item.durability > reliab) >= 0 ? true : false
}

function getReliableWeaponsNames(reliab) {
  return weapons.filter(item => item.durability > reliab).map(item => item.name)
}

function getTotalDamage() {
  return weapons.reduce((sum,item) => {
    return sum + item.attack
  }, 0)
}
