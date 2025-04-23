// const users = [
//     { id: 1, name: "Ali", age: 25, isOnline: true },
//     { id: 2, name: "lola", age: 30, isOnline: false },
//     { id: 3, name: "Piter", age: 22, isOnline: true },
//     { id: 4, name: "Bob", age: 27, isOnline: false },
// ];
//
// let online=users.filter(user=>user.isOnline);
// console.table(online)
//
//
// const usersWithStatus=users.map(user=> ({
//         ...user,
//     status: user.isOnline? "Active":"Offline",
// }));
// console.table(usersWithStatus);
//
// const user=users.find(user =>user.id===3);
//
// if (user){
//     console.log("ИМЯ ПОЛЬЗОВАТЕЛЯ с ID=3:", user.name);
// } else {
//     console.log("Пользователь с id=3 не найден.");
// };
//
// const totalAge=users.reduce((sum,user) =>sum+user.age,0);
// const averageAge=totalAge/users.length;
// console.log("Средний возраст пользователей:", averageAge);




const roles = { admin: "Alice", user: "Bob", guest: "Charlie" };
console.log(invertObject(roles));

function invertObject(obj) {
    return Object.fromEntries(Object.entries(obj).map(([key,value]) => [value,key])
    );
}