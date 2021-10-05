<template>
	<div name="concentration">
		<div class="container space-2 space-3--md">
      <div class="row justify-content-md-between align-items-md-center">
        <div class="col-md-6 col-lg-5 mb-9 mb-md-0">
          <img src="../assets/shuterstock/mobile-apps-illustration.svg">
        </div>
        <div class="col-md-6">
          <div class="mb-5">
            <h2 class="display-5 font-size-25--md-down font-weight-medium mb-3">Juego de la concentración</h2>
            <p class="lead">Video</p>
          </div>
          <div class="row mb-3">
            <div class="col-lg-12 order-lg-2 mb-7 mb-lg-0">
              <div class="mb-2">
                <h2 class="h4">Reglas del juego</h2>
              </div>
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
                    <a class="small text-secondary" href="#">Treinta y tres</a>
                  </div>
                </li>
                <li class="dropdown-divider"></li>
                <li class="media align-items-center pb-2">
                  <img class="max-width-6 mr-3" src="../assets/svg/components/clock-dark-icon.svg" alt="Image Description">
                  <div class="media-body">
                    <h3 class="h6 mb-0">Tiempo de Juego:</h3>
                    <small class="text-secondary">00:00:30</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p class="btn btn-wide btn-light mb-1 mb-sm-0 mr-2">15/02/2021</p>
          <p class="btn btn-wide btn-success mb-1 mb-sm-0">25/06/2021</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h5 class="w-lg-55 wont-weight-normal text-sm-center mx-auto mb-8">Visualicé el video desde un principio hasta su finalización, para responder preguntas del contenido presentado.<br class="d-none d-xl-inline-block"> a jugar!.</h5>
      <div class="row text-sm-center">
        <!-- Feature Item -->
        <div class="col-6 col-sm mb-5 mb-sm-0">
          <i class="svg-icon svg-icon-sm text-primary mb-3">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" id="Path-50" fill="#000000" opacity="0.3"></path>
                <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" id="check-path" fill="#000000"></path>
              </g>
            </svg>
          </i>
          <h6 class="font-weight-medium text-gray-700" @click="iniciar()">Iniciar juego</h6>
        </div>
        <div class="col-6 col-sm mb-5 mb-sm-0">
          <i class="svg-icon svg-icon-sm text-primary mb-3">
            <svg width="24px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="40"></rect>
                <path d="M3.95709826,8.41510662 L11.47855,3.81866389 C11.7986624,3.62303967 12.2013376,3.62303967 12.52145,3.81866389 L20.0429,8.41510557 C20.6374094,8.77841684 21,9.42493654 21,10.1216692 L21,19.0000642 C21,20.1046337 20.1045695,21.0000642 19,21.0000642 L4.99998155,21.0000673 C3.89541205,21.0000673 2.99998155,20.1046368 2.99998155,19.0000673 C2.99998155,19.0000663 2.99998155,19.0000652 2.99998155,19.0000642 L2.99999828,10.1216672 C2.99999935,9.42493561 3.36258984,8.77841732 3.95709826,8.41510662 Z" fill="#000000" opacity="0.3"></path>
                <path d="M13.8,12 C13.1562,12 12.4033,12.7298529 12,13.2 C11.5967,12.7298529 10.8438,12 10.2,12 C9.0604,12 8.4,12.8888719 8.4,14.0201635 C8.4,15.2733878 9.6,16.6 12,18 C14.4,16.6 15.6,15.3 15.6,14.1 C15.6,12.9687084 14.9396,12 13.8,12 Z" fill="#000000" opacity="1"></path>
              </g>
            </svg>
          </i>
          <h6 class="font-weight-medium text-gray-700">Nivel basico</h6>
        </div>
        <div class="col-6 col-sm mb-5 mb-sm-0">
          <i class="svg-icon svg-icon-sm text-primary mb-3">
            <svg width="24px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.3476862,4.32173209 11.9473121,4.11839309 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 Z" fill="#000000"></path>
              </g>
            </svg>
          </i>
          <h6 class="font-weight-medium text-gray-700"><span>{{puntaje}}</span> puntos</h6>
        </div>
        <div class="col-6 col-sm mb-5 mb-sm-0">
          <i class="svg-icon svg-icon-sm text-primary mb-3">
            <svg width="24px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="40"></rect>
                <polygon fill="#000000" opacity="0.3" points="12 2 4 19 20 19"></polygon>
                <rect fill="#000000" x="11" y="11" width="2" height="11" rx="1"></rect>
              </g>
            </svg>
          </i>
          <h6 class="font-weight-medium text-gray-700">00 m:<span></span></h6>
        </div>
        <div class="col-6 col-sm">
          <i class="svg-icon svg-icon-sm text-primary mb-3">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect opacity="0.300000012" x="0" y="0" width="24" height="24"></rect>
                <polygon fill="#000000" fill-rule="nonzero" opacity="0.3" points="7 4.89473684 7 21 5 21 5 3 11 3 11 4.89473684"></polygon>
                <path d="M10.1782982,2.24743315 L18.1782982,3.6970464 C18.6540619,3.78325557 19,4.19751166 19,4.68102291 L19,19.3190064 C19,19.8025177 18.6540619,20.2167738 18.1782982,20.3029829 L10.1782982,21.7525962 C9.63486295,21.8510675 9.11449486,21.4903531 9.0160235,20.9469179 C9.00536265,20.8880837 9,20.8284119 9,20.7686197 L9,3.23140966 C9,2.67912491 9.44771525,2.23140966 10,2.23140966 C10.0597922,2.23140966 10.119464,2.2367723 10.1782982,2.24743315 Z M11.9166667,12.9060229 C12.6070226,12.9060229 13.1666667,12.2975724 13.1666667,11.5470105 C13.1666667,10.7964487 12.6070226,10.1879981 11.9166667,10.1879981 C11.2263107,10.1879981 10.6666667,10.7964487 10.6666667,11.5470105 C10.6666667,12.2975724 11.2263107,12.9060229 11.9166667,12.9060229 Z" fill="#000000"></path>
              </g>
            </svg>
          </i>
          <h6 class="font-weight-medium text-gray-700" @click="juegoFinalizado()">Finalizar</h6>
        </div>
      </div>
    </div>
    <div class="video">
      <video class="video-etiqueta" controls>
        <source src="https://firebasestorage.googleapis.com/v0/b/aprendizaje-57cdc.appspot.com/o/concentracion%2FBOLIVIA%20TE%20ESPERA_001.mp4?alt=media&token=0da5de2a-5353-4d02-b8f4-c3c217565bd4" type="video/mp4">
          <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
          </video> 
        </div>
        <div class="cuestionario">
          <div class="cuestionario-preguntas">
            <form class="form-horizontal form-material">
              <div v-for="(value, key) in questions" class="test-contenedor-general">
                <!-- <label class="col-md-12">{{ key }}: {{ value }}</label> -->
                <!-- <div v-if="(value.tipo == 'cerrada')"> -->
                  <div class="test-contenido" v-for="(dato, descripcion) in value">
                    <div class="pregunta-cerrada" v-if="(value.tipo == 'cerrada')">
                                            <!-- <div v-if="(descripcion == 'imagen')">
                                                <img v-bind:src="imagen">
                                              </div> -->
                                           <!--   <div v-if="(descripcion == 'tecnica')">
                                                <label>{{dato}}</label>
                                            </div>
                                          -->
                                          <label v-if="(descripcion == 'pregunta' )" class="col-md-12 test-pregunta"><span>{{key}}. </span>{{dato}}</label>
                                          <div class="respuesta-contenedor" v-if="(descripcion == 'respuesta' )">
                                            <div v-for="(respuesta, calificacion) in dato">
                                              <label v-bind:for="key" >{{ calificacion }}</label>
                                              <!-- <label>{{respuesta}}</label> -->
                                              <input  type="radio"  v-bind:name="key" v-bind:id="key" v-bind:value="respuesta">        
                                              <!-- <input v-if="(respuesta === 'true')" type="radio"  v-bind:name="key" v-bind:id="key" v-bind:value="dato">         -->
                                            </div>
                                          </div>
                                        </div> 
                                      </div>
                                    </div>
                                    <!-- <input type="button"  class="btn-primary" @click="evaluar()" value="Evaluar"> -->
                                  </form>
                                </div>
                              </div>
                            </div>
                          </template>
                          <script>
                            /*---------------------------  FIREBASE ---------------------------*/
                            import firebase from 'firebase'
                            import db from '@/firebase/init'
                            let jsonVideo = {};
                            let dbfirebase = db.database();
                            let concentrationdb = dbfirebase.ref('concentracion/video/avanzado');
                            concentrationdb.on("value", function(snapshot) {
                              jsonVideo = snapshot.val(); console.log(jsonVideo);
                            }, function (errorObject) {
                              console.log("The read failed: " + errorObject.code);
                            }); 
                            /*----------------------- Finaliza firebase -----------------------*/
                            export default{
                             name:'concentration',
                             data(){
                              return{
                               reglasJuego:{
                                "video":"https://www.youtube.com/watch?v=E-Bv9bLDhF8",
                                "tiempoVideo":"5:32",
                                "calificacion":"50",
                                "tiempoJuego":"5"
                              },
                              puntaje:0,
                              calificacion:0,
                              resultado:0,
                              numeroPreguntas:10,
                              questions:'',
                            }
                          },
                          methods:{
                            videoQuestions(){
                              this.questions = jsonVideo;
                            },
                            iniciar(){
                              this.questions = jsonVideo;
                              var tiempoDeJuego = this.reglasJuego.tiempoJuego;console.log(tiempoDeJuego);
                              var segundos = 0;
                              var timer = setInterval(function(){
                                if(segundos == tiempoDeJuego){
                                  clearInterval(timer);
                                  alert("Juego Finalizado");
                                }
                                segundos++;console.log(segundos);
                              },1000);
                            },
                            evaluar(){
                              this.calificacion = 100 / this.numeroPreguntas;
                              for (this.numero = 1; this.numero < this.numeroPreguntas; this.numero++) {
                                // console.log(this.numero)
                                this.opcionesRespuesta = document.getElementsByName(this.numero)
                                for (var i = 1; i < this.opcionesRespuesta.length; i++) {
                                  if (this.opcionesRespuesta[i].checked){
                                    if(this.opcionesRespuesta[i].value == "true"){
                                      this.resultado = this.resultado + this.calificacion;
                                    }
                                  }
                                }
                              }
                              console.log(this.resultado);
                            },
                            juegoFinalizado(){
                              this.calificacion = 100 / this.numeroPreguntas;
                                for (this.numero = 1; this.numero < this.numeroPreguntas; this.numero++) {
                                  // console.log(this.numero)
                                  this.opcionesRespuesta = document.getElementsByName(this.numero)
                                  for (var i = 1; i < this.opcionesRespuesta.length; i++) {
                                    if (this.opcionesRespuesta[i].checked){
                                      if(this.opcionesRespuesta[i].value == "true"){
                                        this.resultado = this.resultado + this.calificacion;
                                      }
                                    }
                                  }
                                }
                              var calificacionJuego ={
                                aprendizaje:"concentracion",
                                nombe:"video",
                                puntaje:this.resultado
                              } 
                              var estudiante="7062007520132301";
                              dbfirebase.ref("calificacion/concentracion").child(estudiante).push(calificacionJuego);  
                              console.log(this.resultado); 
                            }
              }
            }

          </script> 