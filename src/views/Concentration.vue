<template>
	<div name="concentration">
		<iframe  width="425" height="344" src="https://www.youtube.com/embed/F9Bo89m2f6g" frameborder="0" allowfullscreen></iframe>
		 <a class="js-go-to u-icon u-icon--light u-icon--md rounded-circle" href="javascript:;"
                            data-type="static" data-target="#startNow" @click="preguntar()">
                            <span class="fa fa-angle-down u-icon__inner text-purple font-size-18"></span>
            click click</a>
	</div>
</template>
<script>
export default{
	name:'concentration',
	data(){
		return{
			dato:"",
			key:"",
			
		    
		   
		}
	},
	              
	methods:{
		
		//uso foreach para recorrer cada elemento del array
		preguntar() {
			var keywords = ["test1", "test2", "test3"];
		    var ejemplo = "Este es el test3 , es un ejemplo test2";
		    var resultado = "";
		    var pos = -1;

			keywords.forEach(function(element) {
				 	    		//En caso de existir se asigna la posición en pos
	    		pos = ejemplo.search(element.toString());
		    	// //Si existe
		    	if(pos!=-1){
		    		resultado += " Palabra "+element+ "encontrada en la posición "+pos;
		    		console.log(resultado);
		    	}
			});
		}	
// 		//En caso de que no exista.
// 		if(this.pos === -1 && this.resultado === ""){this.resultado = "No existe ninguna de las palabras del array.";}
// 			console.log(this.resultado);
	}
}

</script>