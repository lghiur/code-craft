const move = require('./rover');

describe('Mars rover', () => {
  it("It turns Right from North", () => {
    expect(move('R', {coordinates: [4,7], orientation: 'N'})).toStrictEqual({ coordinates: [4, 7], orientation: 'E'});
  });
  it("It turns Right from East", () => {
    expect(move('R', {coordinates: [4,7], orientation: 'E'})).toStrictEqual({ coordinates: [4, 7], orientation: 'S'});
  });
  it("It turns Right from South", () => {
    expect(move('R', {coordinates: [4,7], orientation: 'S'})).toStrictEqual({ coordinates: [4, 7], orientation: 'W'});
  });
  it("It turns Right from West", () => {
    expect(move('R', {coordinates: [4,7], orientation: 'W'})).toStrictEqual({ coordinates: [4, 7], orientation: 'N'});
  });

  it("It turns Left from North", () => {
    expect(move('L', {coordinates: [4,7], orientation: 'N'})).toStrictEqual({ coordinates: [4, 7], orientation: 'W'});
  });
  it("It turns Left from West", () => {
    expect(move('L', {coordinates: [4,7], orientation: 'W'})).toStrictEqual({ coordinates: [4, 7], orientation: 'S'});
  });
  it("It turns Left from South", () => {
    expect(move('L', {coordinates: [4,7], orientation: 'S'})).toStrictEqual({ coordinates: [4, 7], orientation: 'E'});
  });
  it("It turns Left from East", () => {
    expect(move('L', {coordinates: [4,7], orientation: 'E'})).toStrictEqual({ coordinates: [4, 7], orientation: 'N'});
  });

  it('orientation doesnt change if it moves forward', () => {
    expect(move('F', {coordinates: [4,7], orientation: 'E'})).toStrictEqual({ coordinates: [5, 7], orientation: 'E'});
  });
  it('orientation doesnt change if it moves backward', () => {
    expect(move('B', {coordinates: [4,7], orientation: 'E'})).toStrictEqual({ coordinates: [3, 7], orientation: 'E'});
  });

  it("It moves forward when orientation is N", () => {
    expect(move('F', {coordinates: [4, 7], orientation: 'N'})).toStrictEqual({ coordinates: [4, 8], orientation: 'N'});
  });
  it("It moves forward when orientation is E", () => {
    expect(move('F', {coordinates: [4, 7], orientation: 'E'})).toStrictEqual({ coordinates: [5, 7], orientation: 'E'});
  });
  it("It moves forward when orientation is S", () => {
    expect(move('F', {coordinates: [4, 7], orientation: 'S'})).toStrictEqual({ coordinates: [4, 6], orientation: 'S'});
  });
  it("It moves forward when orientation is W", () => {
    expect(move('F', {coordinates: [4, 7], orientation: 'W'})).toStrictEqual({ coordinates: [3, 7], orientation: 'W'});
  });

  it("It moves backwards when orientation is N", () => {
    expect(move('B', {coordinates: [4, 7], orientation: 'N'})).toStrictEqual({ coordinates: [4, 6], orientation: 'N'});
  });
  it("It moves backwards when orientation is E", () => {
    expect(move('B', {coordinates: [4, 7], orientation: 'E'})).toStrictEqual({ coordinates: [3, 7], orientation: 'E'});
  });
  it("It moves backwards when orientation is S", () => {
    expect(move('B', {coordinates: [4, 7], orientation: 'S'})).toStrictEqual({ coordinates: [4, 8], orientation: 'S'});
  });
  it("It moves backwards when orientation is W", () => {
    expect(move('B', {coordinates: [4, 7], orientation: 'W'})).toStrictEqual({ coordinates: [5, 7], orientation: 'W'});
  });

  it('can execute two orientation changes', () => {
    expect(move('LL', {coordinates: [4, 7], orientation: 'W'})).toStrictEqual({ coordinates: [4, 7], orientation: 'E'});
  });
  it('can move forward from Norh to West with one position', () => {
    expect(move('LF', {coordinates: [4, 7], orientation: 'N'})).toStrictEqual({ coordinates: [3, 7], orientation: 'W'});
  });
  it('can do a full circle movement to the Left: LFLFLFLF', () => {
    expect(move('LFLFLFLF', {coordinates: [4, 7], orientation: 'N'})).toStrictEqual({ coordinates: [4, 7], orientation: 'N'});
  });
});