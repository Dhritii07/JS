// Target Value in Nested JSON
const data = {
    user: {
        id: 1,
        name: 'Elena',
        address: {
            city: 'Mumbai',
            code: '123456'
        }
    }
}

console.log(data.user.address.code)
console.log(data.user.id)