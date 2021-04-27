<template>
  <div class="about">
    <div class="container space-2 space-3--md">
      <div class="row justify-content-md-between align-items-md-center">
        <div class="col-md-6 col-lg-5 mb-9 mb-md-0">
<!--          <object type="image/svg+xml" data="../assets/shuterstock/mobile-apps-illustration.svg"></object> -->
          <img src="../assets/shuterstock/mobile-apps-illustration.svg">
        </div>
        <!-- <div class="col-md-6 contenedor-imagen">
          <img class="img-fluid rounded d-block m-l-none" src="../assets/shuterstock/television-internet-production-technology-concept-600w-205140079.webp">
        </div> -->
        <div class="col-md-6">
          <div class="mb-5">
            <h2 class="display-5 font-size-25--md-down font-weight-medium mb-3">Técnica de la cadena</h2>
            <p class="lead">Se utiliza para memorizar listas cortas de elementos, en las que cada elemento deberá ser ligado o asociado con el siguiente. Asociar o ligar un elemento con otro es lo que aumenta el nivel de recordación. El método de la cadena o de enganche es sumamente sencillo, aunque su práctica y utilidad no tiene límites..</p>
          </div>
          <div class="row mb-3">
            <div class="col-lg-12 order-lg-2 mb-7 mb-lg-0">
                <div class="mb-2">
                  <h2 class="h4">Reglas del juego</h2>
                </div>
                <!-- Contacts List -->
                <ul class="list-unstyled">
                  <li class="media align-items-center pb-2">
                    <img class="max-width-6 mr-3" src="../assets/svg/components/user-type-dark-icon.svg" alt="Image Description">
                    <div class="media-body">
                      <h3 class="h6 mb-0">Nivel del juego:</h3>
                      <small class="text-secondary">Medio</small>
                    </div>
                  </li>

                  <li class="dropdown-divider"></li>

                  <li class="media align-items-center pb-2">
                    <img class="max-width-6 mr-3" src="../assets/svg/components/file-dark-icon.svg" alt="Image Description">
                    <div class="media-body">
                      <h3 class="h6 mb-0">Puntaje del juego:</h3>
                      <a class="small text-secondary" href="#">Cien puntos</a>
                    </div>
                  </li>

                  <li class="dropdown-divider"></li>

                  <li class="media align-items-center pb-2">
                    <img class="max-width-6 mr-3" src="../assets/svg/components/clock-dark-icon.svg" alt="Image Description">
                    <div class="media-body">
                      <h3 class="h6 mb-0">Tiempo de Juego:</h3>
                      <small class="text-secondary">05:00:00</small>
                    </div>
                  </li>
                </ul>
                <!-- End Contacts List -->
            </div>
          </div>
          <p class="btn btn-wide btn-light mb-1 mb-sm-0 mr-2">15/02/2021</p>
          <p class="btn btn-wide btn-success mb-1 mb-sm-0">25/06/2021</p>
        </div>
      </div>
    </div>
		    <img v-bind:src="direccionImagen" />
            <div class="galeria">
          <div v-for="(dato, descripcion) in imagenes">
              <div class="contendor-imagen">
                <img v-bind:src="dato" class="img-responsive" alt="img" />
              </div>
            </div>
          </div>
  </div>
</template>
    <script>
    export default {
        name: "about",
        data() {
            return {
                imagenes: [
		          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg1.jpg?alt=media&token=d48e2eb9-4bca-4380-9ecf-5f66663f8370',
		          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg5.jpg?alt=media&token=9a3b8e7d-54c7-4d74-a1b8-fb1b34d8a180',
		          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg4.jpg?alt=media&token=4f33bb47-61b6-46b5-a3f6-a425921ab9d0',
		          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg3.jpg?alt=media&token=79840513-c943-403a-b9fa-e2fe5415e5af',
		          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg2.jpg?alt=media&token=b77f3a20-51fd-476f-91d5-3c422cc799f7',
		        ],
		        direccionImagen:'',
                timer: ""
            };
        },
        mounted() {
            let _this = this;
            let num = 0;
            // Create and execute timer
            this.timer = setInterval(() => {
              // clear the timer when num is equal to 100
                if (num == 5) {
                    clearInterval(_this.timer);
                    console.log('finalizo el juego')
                }else{
                	this.direccionImagen=this.imagenes[num];
                    console.log(this.imagenes[num]);
                }
                // console.log(num++);
                num++
            }, 5000);
        },
        
    };
    </script>
    <style scoped>
    </style>



<!-- 
<template>
    <div class="memory">
    	<button @click=cadena()>comenzar el juego</button>
    	<div id="cadenaVisualizar"></div>
    <img src="https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg1.jpg?alt=media&token=d48e2eb9-4bca-4380-9ecf-5f66663f8370">
    </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        imagenes: [
          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg1.jpg?alt=media&token=d48e2eb9-4bca-4380-9ecf-5f66663f8370',
          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg5.jpg?alt=media&token=9a3b8e7d-54c7-4d74-a1b8-fb1b34d8a180',
          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg4.jpg?alt=media&token=4f33bb47-61b6-46b5-a3f6-a425921ab9d0',
          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg3.jpg?alt=media&token=79840513-c943-403a-b9fa-e2fe5415e5af',
          'https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/memoria%2Fimg2.jpg?alt=media&token=b77f3a20-51fd-476f-91d5-3c422cc799f7',
        ],
		polling: null
      };
    },
 
	methods: {
		pollData () {
			this.polling = setInterval(() => {
				this.$store.dispatch('RETRIEVE_DATA_FROM_BACKEND')
			}, 3000)
		}
	},
	created () {
		this.pollData()
	}

  }
</script> 


  -->