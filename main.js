const person={
first_name:'Monica',
last_name:'Geller',
phone:'915-996-9739',
email:'monica37@gmail.com',
address:{
street:{
street_num:'495',
street_name:'Grove street',},
city:'New york',
country:'USA',
},
};

for(let key in person){
	if((person[key]) instanceof Object){
		for(let innerkey in person[key]){
			if(person[key][innerkey] instanceof Object){
				for(let values in person[key][innerkey]){
				console.log(`${innerkey}=>${person[key][innerkey][values]}`);
			}
		}
		else{
		console.log(`${innerkey}=>${person[key][innerkey]}`);
		}
		}
	}
	else{
		console.log(`${key}=>${person[key]}`);
	}
}









