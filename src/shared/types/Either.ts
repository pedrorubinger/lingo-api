class Left<L, R> {
  value: L

  constructor(value: L) {
    this.value = value
  }

  isLeft(): this is Left<L, R> {
    return true
  }

  isRight(): this is Right<L, R> {
    return false
  }
}

class Right<L, R> {
  value: R

  constructor(value: R) {
    this.value = value
  }

  isLeft(): this is Left<L, R> {
    return false
  }

  isRight(): this is Right<L, R> {
    return true
  }
}

type Either<L, R> = Left<L, R> | Right<L, R>

const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}

export { Left, Right, Either, left, right }
