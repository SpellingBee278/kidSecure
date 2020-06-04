// followed by someones post on a random website

const config = require('./config.json');

const fs = require('fs');  function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}jsonReader('./customer.json', (err, customer) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(customer.address) // => "Infinity Loop Drive"
});
const fs2 = require('fs')  ;const customer = {
    company__name: "Newbie Co.",
    order_count_num: 0,
    address__name: "Po Box City",
};
const jsonString = JSON.stringify(customer);fs2.writeFile('./Customer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
});
jsonReader('./customer.json', (err, customer) => {
    if (err) {
        console.log('Error reading file:',err);
        console.log('Error reading file:',err);
        return
    }// increase customer order count by 1
    customer.order_count += 1;  fs.writeFile('./customer.json', JSON.stringify(customer), (err) => {
        if (err) console.log('Error writing file:', err)
    })
});
