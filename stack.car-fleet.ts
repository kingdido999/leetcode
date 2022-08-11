// https://leetcode.com/problems/car-fleet/
interface Car {
  position: number
  speed: number
}

function carFleet(target: number, position: number[], speed: number[]): number {
  // Store car fleets
  let stack: Car[] = []
  // Store cars in descending position
  let cars: Car[] = []

  for (let i = 0; i < position.length; i++) {
    cars.push({
      position: position[i],
      speed: speed[i]
    })
  }

  cars.sort((a, b) => b.position - a.position)

  for (let car of cars) {
    stack.push(car)

    if (stack.length === 1) {
      continue
    }

    const carAhead = stack[stack.length - 2]
    const currCarTimeToDest = (target - car.position) / car.speed
    const carAheadTimeToDest = (target - carAhead.position) / carAhead.speed

    if (currCarTimeToDest <= carAheadTimeToDest) {
      // If the current car will reach destination before or at the same time
      // as the car ahead, then they will become a car fleet.
      // So remove the current car.
      stack.pop()
    }
  }

  return stack.length
};
