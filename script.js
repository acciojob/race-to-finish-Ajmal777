window.promises = [];

for(let i=0; i<5; i++){
	promises.push(new Promise((res)=>{
		const random = Math.floor(Math.random()*5)+1;
		setTimeout(()=>{
			res(i);
		}, random*1000);
	}));
}
const output = document.getElementById('output');
Promise.any(promises)
	.then((val)=>{
		output.innerHTML = val;
	})
	.catch((error)=>{
		output.innerHTML = error;
	})