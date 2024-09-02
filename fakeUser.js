const { faker } = require("@faker-js/faker")

const user=[]
for(let i=0;i<100;i++){
    users.push({
        name:faker.name.fullName(),
        email:faker.internet.email(),
        phone:faker.phone.number(),
        address:faker.address.streetAddress(),
    })
}

console.log("Inserting fake  users....")
db.getSibilingDB("test_data").users.insertMany(users)