const num1Element = document.getElementById('num1') as HTMLInputElement ;
const num2Element = document.getElementById('num2') as HTMLInputElement ;
const buttonElement = document.querySelector('button')!

const numResult: number[] = [];
const textResult: string [] = [];
type NumorString = number | string;
type Result = {val:number , timestamp: Date};
function add(num1: NumorString,num2:NumorString){
	if(typeof num1=='number' && typeof num2=='number'){
		return num1+num2
	} else if(typeof num1=='string' && typeof num2=='string'){
		return num1+ ' ' +num2
	}
	
}

// console.log(add(1,21))
// console.log(add('1','5'))
function printResult(resultobj : Result){
	console.log(resultobj.val,resultobj.timestamp)
}
buttonElement.addEventListener('click',()=>{
	const num1 = num1Element.value;
	const num2 = num2Element.value;
	const result = add(+num1,+num2);
	numResult.push(result as number)
	const stringResult = add(num1,num2);
	textResult.push(stringResult as string)
	console.log(result)
	console.log(stringResult)
	printResult({val: result as number,timestamp: new Date()});
	console.log(numResult,stringResult)
})

const myPromise = new Promise<string>((resolve,reject)=>{
	setTimeout(()=>{
		resolve('It Worked')
},1000)
})

myPromise.then((result)=>{
	console.log(result.split('W'));
});