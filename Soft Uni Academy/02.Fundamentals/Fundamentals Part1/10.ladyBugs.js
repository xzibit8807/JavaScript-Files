function solveField(size, ladybugsString, ...commands) {

  ladybugsString = ladybugsString.toString(``);
  let ladybugs = ladybugsString.split(' ').map(Number);
  let field = new Array(size).fill(0);

  for (let i = 0; i < ladybugs.length; i++) {
    let index = ladybugs[i];
    if (index >= 0 && index < size) {
      field[index] = 1;
    }
  }

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    let [index, direction, flyLength] = command.split(' ');
    let currentIndex = Number(index);
    let currentFlyLength = Number(flyLength);

    if (
      currentIndex >= 0 &&
      currentIndex < size &&
      field[currentIndex] === 1
    ) {

      field[currentIndex] = 0;

      let nextIndex =
        direction === 'right'
          ? currentIndex + currentFlyLength
          : currentIndex - currentFlyLength;

      while (field[nextIndex] === 1) {
        nextIndex =
          direction === 'right'
            ? nextIndex + currentFlyLength
            : nextIndex - currentFlyLength;
      }

      if (nextIndex >= 0 && nextIndex < size) {
        field[nextIndex] = 1;
      }
    }
  }

  console.log(field.join(' '));
}

solveField(3, '0 1', '0 right 1', '2 right 1');
