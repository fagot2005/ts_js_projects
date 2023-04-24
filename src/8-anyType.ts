let userData = '{"id": "abc", "Name": "Oleg", "age": 50,"Employ": true}';
let salary: number;
salary = 5000;
let userObj: {
  useId: string;
  userName: string;
  userAge: number;
  userEmploy: boolean;
} = JSON.parse(userData);
console.log(userObj);
console.log(salary)
