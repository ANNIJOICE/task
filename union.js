let array1=[1,2,3,4,5],array2=[5,4,8,6,3];
let union=[...new Set([...array1,...array2])];
console.log(union);
let inter=array1.reduce((accumulator,values)=>{
	if(array2.includes(values)){
		accumulator.push(values);
	}
	return accumulator;
},[]);
console.log(inter);
var diff=array1.filter((x)=>{
	if (!(array2.includes(x))) {
		return x;
	}
});
var diff1=array2.filter((x)=>{
	if (!(array1.includes(x))) {
		return x;
	}
});
console.log(diff);
console.log(diff1);
