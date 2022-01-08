var moment = require('moment')
var now = moment(new Date());
console.log(now)

var utc = moment(new Date()).utc()

console.log(utc.format('DD MM YYYY hh:mm:ss'))
console.log(now.format('DD MM YYYY hh:mm:ss'))

