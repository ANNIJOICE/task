/*var user={
	Name:"anni",
	age:21
}
var user1={
	...user,
	Name:"muruga"
}
console.log(user);
console.log(user1);
var numbers=[1,2,3,4,5,6,7,8,9,10];
value=numbers.map(x=>x*3);
console.log(value);
odd=value.reduce((accumulator,values)=>{
	if(values%2!=0)
	{
		console.log(values);
	}
},0)*/
let numbers=[1,2,3,4,5,6,7,8,9,10];
var odd=numbers.reduce((accumulator,values)=>{
	if(values%2!=0)
{
accumulator.push(values*3);
}
return accumulator;	
},[]);
console.log(odd);

