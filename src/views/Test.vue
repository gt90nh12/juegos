<template>
    <div class="test">
        <!-- Skippy -->
        <a id="skippy" class="sr-only sr-only-focusable u-skippy" href="#content">
            <div class="container">
                <span class="u-skiplink-text">Skip to main content</span>
            </div>
        </a>
        <!-- End Skippy -->

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main">
            <!-- Hero Section -->
            
            <div class="d-md-flex align-items-md-center height-100vh--lg gradient-overlay-half-dark-v1 bg-img-hero test-fondo">
                <div class="container space-2 space-3--md text-center">
                    <div class="w-md-75 w-lg-60 mt-lg-9 mx-md-auto">
                        <div class="mb-6">
                            <h1 class="display-3 font-size-48--md-down font-weight-medium text-white mb-3">Prueba
                                General</h1>
                            <p class="lead text-light">Realiza la prueba para identificar tu nivel de memorización,
                                concentración y cálculo mental </p>
                        </div>

                        <a class="js-go-to u-icon u-icon--light u-icon--md rounded-circle" href="javascript:;"
                            data-type="static" data-target="#startNow" @click="generartest()">
                            <span class="fa fa-angle-down u-icon__inner text-purple font-size-18"></span>
                        </a>
                    </div>
                </div>
            </div> 
            
            <!-- End Hero Section -->

            <!-- Card Deck -->
            <!-- <div class="container space-2 space-3--lg">
                <div class="card-deck d-block d-lg-flex">
                    <div class="tab-pane" id="settings" role="tabpanel">
                        <div class="card-body">
                            <form class="form-horizontal form-material">
                                <div class="form-group">
                                    <label class="col-md-12">Ordene la palbra</label>
                                    <div class="col-md-12">
                                        <input type="text" placeholder="Johnathan Doe"
                                            class="form-control form-control-line">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="example-email" class="col-md-12">Email</label>
                                    <div class="col-md-12">
                                        <input type="email" placeholder="johnathan@admin.com"
                                            class="form-control form-control-line" name="example-email"
                                            id="example-email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-12">Password</label>
                                    <div class="col-md-12">
                                        <input type="password" value="password" class="form-control form-control-line">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-12">Phone No</label>
                                    <div class="col-md-12">
                                        <input type="text" placeholder="123 456 7890"
                                            class="form-control form-control-line">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-12">Message</label>
                                    <div class="col-md-12">
                                        <textarea rows="5" class="form-control form-control-line"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-12">Select Country</label>
                                    <div class="col-sm-12">
                                        <select class="form-control form-control-line">
                                            <option>London</option>
                                            <option>India</option>
                                            <option>Usa</option>
                                            <option>Canada</option>
                                            <option>Thailand</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <button class="btn btn-success">Update Profile</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- End Card Deck -->
    <div id="openModal" v-bind:class="{mostrarModal: calificacionGeneral}" class="modalDialog">
    <!-- <div id="openModal" class="modalDialog"> -->
    <!-- seccion de evaluacion -->
      <div>
            <div class="container space-2-bottom space-3-bottom--lg mt-n9">
      <div class="card w-lg-90 shadow mx-lg-auto">
        <div class="card-body p-7">
          <!-- Title -->
        <p class="close" @click="CloseModal()">X</p>
          <div class="w-md-80 w-lg-60 text-center mx-md-auto mb-3">
            <h2 class="h3">Edgar Dilmar Peralta Limachi</h2>
            <p>La prueba general es evaluada sobre 100 puntos opteniendo una calificaion de:</p>
          </div>
          <!-- End Title -->

          <div class="bg-purple row justify-content-lg-between text-center text-lg-left">
          <!-- puntuacion -->
            <div class="hlas">
                <div class="cuadro-puntuacion">     
                    <p>{{ resultado }}</p>
                </div>
            </div>
          <!-- finaliza puntuacion -->
            <div class="col-sm-12 col-lg-4 offset-sm-3 offset-lg-0 mb-4 mb-lg-0">
              <!-- Icon Block -->
              <div class="pr-lg-4 text-center">
                <img class="max-width-10 mb-2" src="../assets/svg/cabeza.svg" alt="Image Description">
                <p class="mb-1 text-center text-white letra-calificacion">Puntuación de memorización</p>
                <p class="h1 text-center text-white">{{ concentracion }}</p>
              </div>
              <!-- End Icon Block -->
            </div>

            <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <!-- Icon Block -->
              <div class="pr-lg-4 text-center">
                <img class="max-width-10 mb-2" src="../assets/svg/meditacion.svg" alt="Image Description">
                <p class="mb-1 text-white letra-calificacion">Puntuación de concentración </p>
                <p class="h1 text-white">{{calculo}}</p>
              </div>
              <!-- End Icon Block -->
            </div>

            <div class="col-sm-6 col-lg-4 text-center">
                <img class="max-width-10 mb-2 text-center" src="../assets/svg/matematicas.svg" alt="Image Description">
              <!-- Icon Block -->
              <div class="pr-lg-4">
                <p class="mb-1 text-white text-center letra-calificacion">Puntuación de cálculo</p>
                <p class="h1 text-white text-center">{{memoria}}</p>
              </div>
              <!-- End Icon Block -->
            </div>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="card-footer bg-gray-100 text-center py-4 px-7">
          <a class="text-secondary text-center" href="#">
            Quieres mejorar las tecnicas de memorización, concentración y cálculo mental  
            <span class="fa fa-arrow-right font-size-13 ml-2">EMPECEMOS</span>
          </a>
        </div>
        <!-- End Card Footer -->
      </div>
    </div>
      </div>
    </div>

    <!-- Finaliza seccion de evaluacion -->

            <!--    COMENZANDO CON LA PRUEBA GENERAL  -->
            <div class="container space-2 space-3--lg">
                <div class="card-deck d-block d-lg-flex">
                    <div class="tab-pane" id="settings" role="tabpanel">
                        <div class="card-body">
                            <form class="form-horizontal form-material">
                                <div v-for="(value, key) in datatest" class="test-contenedor-general">
                                    <!-- <label class="col-md-12">{{ key }}: {{ value }}</label> -->
                                    <!-- <div v-if="(value.tipo == 'cerrada')"> -->
                                    <div class="test-contenido" v-for="(dato, descripcion) in value">
                                        <div class="pregunta-cerrada" v-if="(value.tipo == 'cerrada')">
                                           <!--   <div v-if="(descripcion == 'tecnica')">
                                                <label>{{dato}}</label>
                                            </div>
 -->
                                            <label v-if="(descripcion == 'pregunta' )" class="col-md-12 test-pregunta"><span>{{key}}. </span>{{dato}}</label>
                                            <div v-if="(descripcion === 'imagen')">
                                                <img v-if="(value.imagen!='')" v-bind:src="value.imagen" id="descripcion" class="imagen" alt="img" />
                                            </div>
                                            <div class="respuesta-contenedor" v-if="(descripcion == 'respuesta' )">
                                                <div v-for="(respuesta, calificacion) in dato">
                                                    <input  type="radio"  v-bind:name="key" v-bind:id="key" v-bind:value="respuesta">   
                                                        <!--  <div v-if="(calificacion === 'imagen')">
                                                            <img v-bind:src="respuesta.imagen" id="descripcion" class="imagen" alt="img" />
                                                        </div> -->
                                                    <label v-bind:for="key" > {{ calificacion }}</label>
                                                    <!-- <label>{{respuesta}}</label> -->
                                                       <!--  <input v-if="(respuesta === 'true')" type="radio"  v-bind:name="key" v-bind:id="key" v-bind:value="dato">   -->      
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <input type="button"  class="btn-primary" @click="evaluar()" value="Evaluar">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--      FINALIZANDO LA PRUEBA GENERAL   -->

        </main>
        <!-- ========== END MAIN CONTENT ========== -->
        
    </div>
</template>

<script>
    import firebase from 'firebase'
    import db from '@/firebase/init'
    let jsonTest = {};
    let dbfirebase = db.database();
    let testdb =  dbfirebase.ref('pruebas/general');
    testdb.on("value", function(snapshot) {
        jsonTest = snapshot.val();
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    }); 
    export default {
        data() {
            return {
                calificacionGeneral: false,
                datatest : '',
                concentracion:0,
                memoria:0,
                calculo:0,
                numero:0,
                resultado:0,
                numeroPreguntas:15,
                opcionesRespuesta:'',
                calificacion:0
            }
        },
        methods:{
            generartest(){              
                this.datatest = jsonTest;  
            },
            evaluar(){
                this.calificacion =  100 / this.numeroPreguntas;
                for (this.numero = 1; this.numero < this.numeroPreguntas; this.numero++) {
                    // console.log(this.numero)
                    this.opcionesRespuesta = document.getElementsByName(this.numero)
                    for (var i = 1; i < this.opcionesRespuesta.length; i++) {
                        if (this.opcionesRespuesta[i].checked){
                            if(this.opcionesRespuesta[i].value == "concentracion"){
                                // this.resultado = this.resultado + this.calificacion;
                                this.concentracion = this.concentracion + this.calificacion; 
                            }
                            if(this.opcionesRespuesta[i].value == "calculo"){
                                // this.resultado = this.resultado + this.calificacion;
                                this.calculo = this.calculo + this.calificacion; 
                            }
                            if(this.opcionesRespuesta[i].value == "memoria"){
                                // this.resultado = this.resultado + this.calificacion;
                                this.memoria = this.memoria + this.calificacion; 
                            }
                        }
                    }
                }

                // this.concentracion = this.concentracion.toFixed(2)
                this.concentracion = Math.round(this.concentracion)
                this.calculo = Math.round(this.calculo)
                this.memoria = Math.round(this.memoria)
                this.resultado = this.concentracion + this.calculo + this.memoria
                this.calificacionGeneral = true;

            },
            // showModal() {
            // },
            CloseModal() {
              this.calificacionGeneral = false;
            }
        }
    }




















































</script>