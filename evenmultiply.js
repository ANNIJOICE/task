let checkNumbers=[1,2,3,4,5,6,7,8]
let even=checkNumbers.reduce((storageplace,values)=>{
	if(values%2==0){
		storageplace.push(values*5);
	}return storageplace;
},[]);
console.log(even);