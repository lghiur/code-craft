const getEndOrientation = (prevOrientation, command) => {
  if(!['R', 'L'].includes(command)) {
    return prevOrientation;
  }

  return {
    'R': {
      'N': 'E',
      'E': 'S',
      'S': 'W',
      'W': 'N'
    },
    'L': {
      'N': 'W',
      'W': 'S',
      'S': 'E',
      'E': 'N'
    }
  }[command][prevOrientation];
};

const getEndPosition = ([x, y], orientation, command) => {
  if(!['F', 'B'].includes(command)) {
    return [x, y];
  }

  return {
    'F': {
      'N': [x, y + 1],
      'E': [x + 1, y],
      'S': [x, y - 1],
      'W': [x - 1, y],
    },
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