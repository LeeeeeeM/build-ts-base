import result from './mod2'

import isOdd = require('./mod3')
import { isEven } from './mod3'

console.log(result, '<-  result') // xxx随便写一个注释，用于测试ts配置是否去掉注释

console.log(isOdd(3), isEven(3))

interface User {
  name: string
  age: number
}


type UserResult = User | User[]

const userList: User[] = [
  {
    name: 'zs',
    age: 10
  }, {
    name: 'ls',
    age: 11
  }, {
    name: 'wanger',
    age: 12
  }
]

function fetchUser<User>(): Promise<UserResult | null> {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > 0.5 ? resolve(userList) : reject(null)
    }, 1000)
  })
}

fetchUser().then(users => {
  console.log(users)
}).catch(err => {
  console.log('can\'t get users ===>', err)
})