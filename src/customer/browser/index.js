var Customer = require('../customer.js');
var makeSync = require('./sync.js');

module.exports = Customer.factory(function(id) {
    return makeSync(new Customer(id));
});
