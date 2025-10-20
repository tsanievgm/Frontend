const user = {
    name: 'Alice',
    age: 25,
    isAdmin: true
};

console.log(user.name);
console.log(user['age']);
console.log()

user.city = 'Paris';

for(let key in user) {
    console.log(key, user[key]);
}
console.log()

console.log(Object.keys(user));
// console.log()
// console.log()