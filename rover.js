const turnRight = (orientation) => ({
  'N': 'E',
  'E': 'S',
  'S': 'W',
  'W': 'N'
}[orientation]);

const turnLeft = (orientation) => ({
  'N': 'W',
  'W': 'S',
  'S': 'E',
  'E': 'N'
}[orientation]);

const getEndOrientation = (prevOrientation, command) => {
  if(!['R', 'L'].includes(command)) {
    return prevOrientation;
  }

  if(command === 'R') {
    return turnRight(prevOrientation);
  }

  return turnLeft(prevOrientation);
};

const moveForward = ([x, y], orientation) => ({
  'N': [x, y + 1],
  'E': [x + 1, y],
  'S': [x, y - 1],
  'W': [x - 1, y],
}[orientation]);

const getEndPosition = ([x, y], orientation, command) => {
  if(!['F', 'B'].includes(command)) {
    return [x, y];
  }

  if(command === 'F') {
    return moveForward([x, y], orientation);
  }

  return {
    'B': {
      'N': [x, y - 1],
      'E': [x - 1, y],
      'S': [x, y + 1],
      'W': [x + 1, y],
    }
  }[command][orientation];
};

const move = (instructions, rover) => {
  let commands = instructions.split('');
  let endRover = {...rover};

  commands.forEach((cmd) => {
    endRover = {
      ...endRover,
      orientation: getEndOrientation(endRover.orientation, cmd),
      coordinates: getEndPosition(endRover.coordinates, endRover.orientation, cmd)
    };
  });

  return endRover;
};

module.exports = move;