declare function isOdd(x:number):boolean

declare namespace isOdd {
  export function isEven(x:number):boolean
}

export = isOdd