let array1=[1,2,3],array2=[4,3,2];
let union= [...new Set([...array1,...array2])];
console.log(union);
let intersection=array1.reduce((storageplace,values)=>{
	if(array2.includes(values)){
		storageplace.push(values)
	}
return storageplace;
},[]);
console.log(intersection);
var diff=array1.filter((x)=>{
	if(array2.includes(x)){}
		else{
			return x;
		}
});
var diff1=array2.filter((y)=>{
	if(array1.includes(y)){}
		else{
			return y;
		}
});console.log([...diff,...diff1]);