const btn1 = document.getElementById("btn1convert"),
			cls = document.getElementById("cls_id"),
			txt = document.getElementById("txt_id"),
			cel = document.getElementById("cel_id"),
			matrix1 = [
	['1',' ','.',',','!'],
	['2','a','b','c'],
	['3','d','e','f'],
	['4','g','h','i'],
	['5','j','k','l'],
	['6','m','n','o'],
	['7','p','q','r','s'],
	['8','t','u','v'],
	['9','w','x','y','z'],
	['0','-','_','@','*','+']
];

function translate1(){
	const value = txt.value.normalize('NFD').toLowerCase();
	if(value){
		cel.value = isNaN(value) ? textToNum1(value) : numToText1(value);
	}else{
		btn1.value = '???';
		setTimeout( ()=>{ btn1.value = "Convert"; },1000 );
	}
}

function textToNum1(txt){
	let string = "";
	for(let i = 0; i < txt.length; i++){
		for(let x = 0; x < matrix1.length; x++){
			if(matrix1[x].indexOf(txt[i]) != -1){
				string += x+''+matrix1[x].indexOf(txt[i])+'';
			}
		}
	}
	return string;
}

function numToText1(num){
	if( num.length % 2)
		return "invalid";
	let string = "";
	for(let i = 0; i < num.length; i+=2){
		const i1 = parseInt(num[i]);
		const i2 = parseInt(num[i+1]);
		const letter = matrix1[i1][i2];
		if(!letter)
			return "invalid";
		string += matrix1[i1][i2];
  }
  return string;
}

btn1.addEventListener("click",translate1);

cls.addEventListener("click",()=>{
	txt.value = cel.value = null;
});

document.body.addEventListener("keypress",e=>{
	if(e.keyCode == 13){
  	translate1();
  }
});
