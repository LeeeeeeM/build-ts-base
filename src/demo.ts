import result from './mod2'

import isOdd = require('./mod3')
import { isEven } from './mod3'

console.log(result, '<-  result') // xxx随便写一个注释，用于测试ts配置是否去掉注释

console.log(isOdd(3), isEven(3))
