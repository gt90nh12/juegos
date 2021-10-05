
<template>
  <div class="about">
   <!-- Skippy -->
   <a id="skippy" class="sr-only sr-only-focusable u-skippy" href="#content">
    <div class="container">
      <span class="u-skiplink-text">Skip to main content</span>
    </div>
  </a>
  <!-- End Skippy -->
  <!-- ========== HEADER ========== -->
  <header id="header" class="u-header u-header--modern u-header--bordered u-header--bg-transparent u-header--white-nav-links u-header--sticky-top-lg menu" v-bind:class="{uscrolled}">
    <!-- Nav -->
    <nav class="js-mega-menu navbar navbar-expand-lg u-header__navbar menu-nav" v-bind:class="{navegadorBlanco}">
      <!-- Logo -->
      <div class="u-header__navbar-brand-wrapper" id="logo_medio">
        <a class="navbar-brand u-header__navbar-brand logo_espacio" href="index.html" aria-label="Space">


         <img alt="Vue logo" class="u-header__navbar-brand-on-scroll" src="../assets/svg/logos/logo.svg">
         <img alt="Vue logo" class="u-header__navbar-brand-mobile" src="../assets/svg/logos/logo-short.svg">
         <img alt="Vue logo" class="u-header__navbar-brand-default" src="../assets/svg/logos/logo-white.svg">
       </a>
     </div>
     <!-- End Logo -->

     <!-- Responsive Toggle Button -->
     <button type="button" class="navbar-toggler btn u-hamburger u-header__hamburger"
     aria-label="Toggle navigation"
     aria-expanded="false"
     aria-controls="navBar"
     data-toggle="collapse"
     data-target="#navBar">
     <span class="d-none d-sm-inline-block">Menu</span>
     <span id="hamburgerTrigger" class="u-hamburger__box ml-3">
      <span class="u-hamburger__inner"></span>
    </span>
  </button>
  <!-- End Responsive Toggle Button -->

  <!-- Navigation -->
  <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse py-0">
    <ul class="navbar-nav u-header__navbar-nav">
      <!-- Home -->
      <a id="homeMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="homeSubMenu">
        Página principal 
        <span class="fa fa-angle-down u-header__nav-link-icon"></span>
      </a>
      <!-- End Home -->
      <!-- Test -->
<!--                 <a id="homeMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="homeSubMenu">
                  Página principal 
                  <span class="fa fa-angle-down u-header__nav-link-icon"></span>
                </a> -->
                <router-link to="/test" class="nav-link u-header__nav-link">Prueba general</router-link>
                <router-link to="/memory" class="nav-link u-header__nav-link">Tecnica memoria</router-link>
                <router-link to="/concentration" class="nav-link u-header__nav-link">Tecnica concentración</router-link>
                <router-link to="/calculation" class="nav-link u-header__nav-link">Tecnica calculo</router-link>


                <!-- Menu desplegable tecnicas -->
              <!-- <li class="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="fadeInUp" data-animation-out="fadeOut">
                <a id="blogMegaMenu" class="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false"aria-labelledby="blogSubMenu"> Técnicas de aprendizaje <span class="fa fa-angle-down u-header__nav-link-icon"></span></a>
                <ul id="blogSubMenu" class="list-inline hs-sub-menu u-header__sub-menu mb-0 submenu" style="min-width: 220px;"
                    aria-labelledby="blogMegaMenu">
                  <li class="dropdown-item hs-has-sub-menu">
                    <a id="navLinkBlogClassic" class="nav-link u-header__sub-menu-nav-link" href="memoria.html" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogClassic">Técnicas de memoria </a>
                    End Submenu (level 2)
                  </li>
                  <li class="dropdown-item hs-has-sub-menu">
                    <a id="navLinkBlogGrid" class="nav-link u-header__sub-menu-nav-link" href="concentracion.html" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogGrid">Técnicas de concentración </a> 
                  </li>
                  <li class="dropdown-item hs-has-sub-menu">
                    <a id="navLinkBlogList" class="nav-link u-header__sub-menu-nav-link" href="calculo.html" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuBlogList"> Técnicas de cálculo </a>
                  </li>
                </ul>
              </li> -->
              <!-- Finaliza menu desplegable tecnicas -->
              
              <li class="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="fadeInUp" data-animation-out="fadeOut">
                <router-link to="/registration" class="nav-link u-header__nav-link" >Registro Usuario</router-link>
              </li>
              <!-- End Docs -->

              <!-- SignIn -->
              <li class="nav-item u-header__nav-item-btn">
                <!-- <a  class="btn btn-sm btn-primary" href="#signupModal" role="button" data-modal-target="#signupModal" data-overlay-color="#151b26">
                  <span class="fa fa-user-circle mr-1"></span>
                  Ingresar
                </a> -->
                <router-link to="/login" class="btn btn-sm btn-primary">Ingresar</router-link>
              </li>
              <!-- End SignIn -->

            </ul>
          </div>
          <!-- End Navigation -->
        </nav>
        <!-- End Nav -->

      </header>
      <!-- ========== END HEADER ========== -->


      <!-- ========== MAIN CONTENT ========== -->
      <main id="content" role="main">
        <!-- Hero Section -->
        <div>

          <!-- Main Content -->
          <div class="d-lg-flex align-items-lg-center height-85vh--lg">
            <div class="container space-2 space-0--lg mt-lg-8">
              <div class="row justify-content-lg-between align-items-lg-center">
                <div class="col-lg-5 mb-7 mb-lg-0">
                  <!-- Title -->
                  <span class="d-block text-white  mb-1  contenido_principal" align="justify">El alumno puede estimular y entrenar su memoria, mejorar su capacidad de atención y retención. Este sistema evalúa al estudiante mediante juegos, muestra cuadros estadísticos de la mejoria en memoria, concentración y cálculo mental matemático. </span>
                  <br>
                  <h1 class="display-4 font-size-48--md-down text-white mb-0">Aprendizaje</h1>
                  <!-- End Title -->
                </div>

                <div class="col-lg-5">
                  <!-- Signup Form -->
                  <div class="bg-white shadow-sm rounded p-6">
                    <form class="js-validate">
                      <div class="mb-4">
                        <h2 class="h4" align="center">Sistema de aprendizaje</h2>
                      </div>

                      <!-- Input -->
                      <div class="js-form-message mb-3">
                        <div class="js-focus-state input-group input-group form">
                          <input type="text" class="form-control form__input" name="username" required
                          placeholder="Introduce tu nombre"
                          aria-label="Enter your username">
                        </div>
                      </div>
                      <!-- End Input -->

                      <!-- Input -->
                      <div class="js-form-message mb-3">
                        <div class="js-focus-state input-group input-group form">
                          <input type="email" class="form-control form__input" name="email" required
                          placeholder="Ingresa tu email"
                          aria-label="Enter your email address">
                        </div>
                      </div>
                      <!-- End Input -->

                      <!-- Input -->
                      <div class="js-form-message mb-3">
                        <div class="js-focus-state input-group input-group form">
                          <input type="password" class="form-control form__input" name="password" required
                          placeholder="Ingresa tu password"
                          aria-label="Enter your password">
                        </div>
                      </div>
                      <!-- End Input -->

                      <button type="submit" class="btn btn-block btn-primary">Ingresar</button>
                    </form>
                  </div>
                  <!-- End Signup Form -->
                </div>
              </div>
            </div>
          </div>
          <!-- End Main Content -->
        </div>

        <div class="d-lg-flex align-items-lg-center height-15vh--lg">
          <!-- Bottom Content -->
          <div class="container space-2 space-0--lg">
            <!-- Slick Carousel -->
            <div class="js-slick-carousel u-slick"
            data-autoplay="true"
            data-speed="5000"
            data-infinite="true"
            data-slides-show="6"
            data-responsive='[{
            "breakpoint": 1200,
            "settings": {
            "slidesToShow": 4
          }
        }, {
        "breakpoint": 992,
        "settings": {
        "slidesToShow": 4
      }
    }, {
    "breakpoint": 768,
    "settings": {
    "slidesToShow": 3
  }
}, {
"breakpoint": 576,
"settings": {
"slidesToShow": 3
}
}, {
"breakpoint": 480,
"settings": {
"slidesToShow": 2
}
}]'>
<div class="js-slide">
  <img class="u-clients" src= "@/assets/img/clients/fitbit.png" alt="Image Description">
</div>
<div class="js-slide">
  <img class="u-clients" src="@/assets/img/clients/embark.png" alt="Image Description">
</div>
<div class="js-slide">
  <img class="u-clients" src="@/assets/img/clients/uber.png" alt="Image Description">
</div>
<div class="js-slide">
  <img class="u-clients" src="@/assets/img/clients/stripe.png" alt="Image Description">
</div>
<div class="js-slide">
  <img class="u-clients" src="@/assets/img/clients/mapbox.png" alt="Image Description">
</div>
<div class="js-slide">
  <img class="u-clients" src="@/assets/img/clients/alphabet.png" alt="Image Description">
</div>
<div class="js-slide">
  <img class="u-clients" src="@/assets/img/clients/hubspot.png" alt="Image Description">
</div>
<div class="js-slide">
  <img class="u-clients" src="@/assets/img/clients/netflix.png" alt="Image Description">
</div>
</div>
<!-- End Slick Carousel -->
</div>
<!-- End Bottom Content -->
</div>
<!-- End Hero Section -->

<hr class="my-0">

<!-- Features Section -->
<div class="container space-2 space-3--lg">
  <div class="row justify-content-lg-between">
    <div class="col-md-4 col-lg-4 mb-7 mb-md-0">
      <div class="tab-vertical tab-vertical-md py-5 mr-lg-7">
        <div class="pr-md-7 mb-5">
          <h3 class="h4">Aprendizaje</h3>
        </div>

        <!-- Tab Nav -->
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link active tab-vertical__nav-link" id="v-pills-features-tab" data-toggle="pill" href="#v-pills-features" role="tab" aria-controls="v-pills-features" aria-selected="true" v-on:click="datosEstudiante">
            1. Memoria {{ calculoJuegoEmparejamiento }}
          </a>
          <a class="nav-link tab-vertical__nav-link" id="v-pills-key-benefits-tab" data-toggle="pill" href="#v-pills-key-benefits" role="tab" aria-controls="v-pills-key-benefits" aria-selected="false">
            2. Concentración
          </a>
          <a class="nav-link tab-vertical__nav-link" id="v-pills-company-tab" data-toggle="pill" href="#v-pills-company" role="tab" aria-controls="v-pills-company" aria-selected="false">
            3. Cáculo mental
          </a>
        </div>
        <!-- End Tab Nav -->
      </div>
    </div>

    <div class="col-md-8">
      <!-- Tab Content -->
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-features" role="tabpanel" aria-labelledby="v-pills-features-tab">
          <div class="row">
            <div class="col-sm-6 mb-7 mb-sm-9">
              <!-- Icon Block -->
              <div class="pr-lg-4">
                <img class="max-width-9 mb-2" src="../assets/svg/components/idea-primary-icon.svg" alt="Image Description">
                <p align="justify">La memoria es la facultad de registrar la información de toda actividad mental, ideas, hechos pasados e imágenes captadas por el cerebro. Es procesada y almacenada que interactúa de manera constante. Retiene información a corto y largo plazo, para luego ser codificada por el cerebro. Tiene la capacidad de recordar la información del archivo mental mediante la memoria sensorial.  (Olcese, 2011)</p>
              </div>
              <!-- End Icon Block -->
            </div>                                   
          </div>
        </div>

        <div class="tab-pane fade" id="v-pills-key-benefits" role="tabpanel" aria-labelledby="v-pills-key-benefits-tab">
          <div class="row align-items-lg-center">
            <div class="col-lg-5 mb-7 mb-7 mb-lg-0">
              <img class="max-width-9 mb-2" src="../assets/svg/components/arrow-red-icon.svg" alt="Image Description">
              <p align="justify">La concentración es un estímulo determinado por la capacidad de la mente, para controlar, dirigir, analizar el campo de la atención, desempeña los procesos de lectura, escritura, razonamiento, etc. La concentración se relaciona superficialmente en la atención, que permite captar otros elementos como conceptos o ideas previas con una información nueva, que se almacena en la memoria como se observa en la figura. (Flores, 2010)</p>
            </div>

          </div>
        </div>

        <div class="tab-pane fade" id="v-pills-company" role="tabpanel" aria-labelledby="v-pills-company-tab">
          <div class="row">
           <div class="col-sm-6 mb-7 mb-sm-9">
            <!-- Icon Block -->
            <div class="pr-lg-4">
              <img class="max-width-9 mb-2" src="../assets/svg/components/puzzle-primary-icon.svg" alt="Image Description">
              <p align="justify">Según (Coto, 2012) el cálculo mental es desarrollar la destreza, realizar cálculos mentales, no sólo es de importancia para el aprendizaje de las matemáticas, sino para desarrollar aspectos tales como la memoria, concentración, atención, agilidad mental, etc., siendo uno de los mejores y más útiles ejercicios de gimnasia cerebral que puede haber sin alguna ayuda externa para el desarrollo de la mente</p>

            </div>
            <!-- End Icon Block -->
          </div>

        </div>
      </div>
    </div>
    <!-- End Tab Content -->
  </div>
</div>
</div>
<!-- End Features Section -->

<!-- Mockup Section -->
<div class="bg-gray-100">
  <div class="container space-2-top space-3-top--lg">
    <!-- Title -->
    <div class="w-md-80 w-lg-80 text-center mx-md-auto mb-9">
      <div class="mb-5">
        <h2 class="h1">Videos de técnicas de aprendizaje</h2>
        <p class="lead">Para la formación académica, el estudiante aprendera nuevas técnicas de memoria, concentración y cálculo mental matemático.</p>
      </div>

      <!-- Fancybox -->
      <a class="js-fancybox u-media-player" href="javascript:;"
      data-src="//vimeo.com/167434033"
      data-speed="700"
      data-animate-in="zoomIn"
      data-animate-out="zoomOut"
      data-caption="Space - Responsive Website Template">
      <span class="u-media-player__icon u-media-player__icon--xl u-media-player__icon--box-shadow">
        <span class="fa fa-play u-media-player__icon-inner"></span>
      </span>
    </a>
    <!-- End Fancybox -->
  </div>
  <!-- End Title -->

  <!-- SVG Mockup -->
  <div class="w-lg-50 mx-auto">
   <!--  <object type="image/svg+xml" data="svg/mockups/devices-1.svg"></object>-->
 </div>
 <br/>
 <!-- End SVG Mockup -->
</div>
</div>
<!-- End Mockup Section -->



<!-- Divider -->
<div class="w-50 w-lg-35 mx-auto">
  <hr class="my-0">
</div>
<!-- End Divider -->

<!-- Testimonials Section -->
<div class="container space-2 space-3--lg">
  <div class="row justify-content-lg-center">
    <div class="col-md-6 col-lg-5 mb-7 mb-md-0">
      <!-- Testimonials -->
      <div class="text-center px-lg-4">
        <div class="mb-2">
          <img class="u-avatar rounded-circle mx-auto mb-2" src="../assets/img/100x100/img14.jpg" alt="Image Description">
          <h4 class="h6">Matemáticas</h4>
        </div>
        <blockquote class="text-secondary mb-0">
          Profesor.
          <br>
          Estudios realizados.
          <br>
          Descripción.
        </blockquote>
      </div>
      <!-- End Testimonials -->
    </div>

    <div class="col-md-6 col-lg-5">
      <!-- Testimonials -->
      <div class="text-center px-lg-4">
        <div class="mb-2">
          <img class="u-avatar rounded-circle mx-auto mb-2" src="../assets/img/100x100/img4.jpg" alt="Image Description">
          <h4 class="h6">Cívica</h4>
        </div>
        <blockquote class="text-secondary mb-0">
          Profesor.
          <br>
          Estudios realizados.
          <br>
          Descripción.
        </blockquote>
      </div>
      <!-- End Testimonials -->
    </div>

    <div class="col-md-6 col-lg-5">
      <!-- Testimonials -->
      <div class="text-center px-lg-4">
        <div class="mb-2">
          <img class="u-avatar rounded-circle mx-auto mb-2" src="../assets/img/100x100/img2.jpg" alt="Image Description">
          <h4 class="h6">Literatura</h4>
        </div>
        <blockquote class="text-secondary mb-0">
          Profesor.
          <br>
          Estudios realizados.
          <br>
          Descripción.
        </blockquote>
      </div>
      <!-- End Testimonials -->
    </div>
  </div>
</div>
<!-- End Testimonials Section -->

<!-- CTA - Revisar este contenido de sistema-->
    <!--<div class="gradient-overlay-half-primary-v1">
      <div class="bg-img-hero" style="background-image: url(img/bg/bg2.png);">
        <div class="container">
          <div class="row align-items-lg-center text-center text-lg-left space-2">
            <div class="col-lg-7">
              <h2 class="text-white">Sistema de aprendizaje</h2>
            </div>

            <div class="col-lg-5 text-lg-right">
              <a class="btn btn-light mb-2 mb-sm-0" href="../../starter/index.html">Leer mas</a>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- End CTA -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->

  <!-- ========== FOOTER ========== -->
  <footer class="bg-dark pt-1">
    <div class="container space-1">
      <div class="row justify-content-md-between">
        <div class="col-6 col-md-6 col-lg-6 order-lg-1 mb-5 mb-lg-0">
          <h3 class="font-weight-medium gam">APRENDIZAJE</h3>
          <p class="">Ubicación del colegio</p>
        </div>
        <div class="col-6 col-md-3 col-lg-3 order-lg-1 mb-5 mb-lg-0">
          <h3 class="h6 text-white mb-3">Contactos</h3>

          <!-- List -->
          <div class="list-group list-group-flush list-group-transparent">

            <a class="list-group-item list-group-item-action" href="#">
              <span class="fab min-width-3 text-center mr-2"><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAR4LEzZup8HCAAABFklEQVQ4y42RP0oDQRjFvxVZq10kJxBFUNwDWFh6AVnWc+g5FnSJ5Aqp9AbaWdgbIRgIalqxCCmMJPnZTCZO5pt1XzPMe+/H/PlE1kRGRY8JE3pUZFInYjrM+asZN8Th+gOa7gMIHUJqa/WMmYk/yElIOKNvL3bkA5Wtt6zXYmTcKx94MVHuuIVxn31gbKLEcVPjjpfOhs3m6k9E6+kKeDfrqQMsd2/+lUpzeN959KtxSx84YGHCEQUpKbmtLzjUJtENDq6rT3qHb7U+ZU902Xe4KiUktvn06l+rT9CQSw+4kDoRM3DqQ7akXpw7QCH/i0dbfyJqAhzbEZ40qIuIcAfAbcO6CLtM+WFfyzY1MxpyLRINtOwXs8CbbeVpyHQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMzBUMTE6MTk6NTQrMDA6MDBJSVugAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTMwVDExOjE5OjU0KzAwOjAwOBTjHAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="></span>
                Plaza Principal 16 de Julio
              </a>
              <a class="list-group-item list-group-item-action" href="#">
                <span class="fab  min-width-3 text-center mr-2"><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAz1BMVEUAAAD//////v7//v7//f3//////v7//////v7//////v7//f3//v7//v7//f3//v7//////v7//////v7//////f3//////////v7//////v7//v7//////////v7//////////////v7//////////v7//v7//v7//////////////////f3//////////////f3//v7//v7//////v7//////v7//////f3//v7//v7//////////f3//v7//v7//v7//v7//////v4AAABX3yHFAAAAQ3RSTlMAUuj0hyn5Texh1oaww4PxQ9IJ+zyieEC8AsXhC0n8TB0w/ko+0+3CX0sodYgKAXmE3/McrkfHP6Dy5gdBga3U6/hQhMvyLwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAR4LEi392TlvAAAAtUlEQVQoz3XQ1xKCMBAF0FVQsIGKBRsodrF3scv//5MkszjjEu5Tcs8kmQ0kkn4QSQYa3gdJUUgjKBRUhAyFLEKOQh6hQEFD0CkUEUoUyhLvjUpkkCqHWqSHOuvNRhSgGUCrLYAOOyILgI9i2QLosm/RewJRHCZ9thwMR2NtMp2huOwZa75Yrgycd40i893G9MNsw9tcx//P7x1bjQHY7WMA4HCMAYDT+YK9R0e63u6P5+vtfb4zyjXnbqW9DwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMS0zMFQxMToxODo0NSswMDowMMxWO7QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDEtMzBUMTE6MTg6NDUrMDA6MDC9C4MIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==">
                </span>
                282-1670 / 282-2061
              </a>
              <a class="list-group-item list-group-item-action" href="#">
                <span class="fab min-width-3 text-center mr-2"><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAR4LDyUMbt1BAAAAs0lEQVQ4y82SOw6CQABER06gCQQSLmNnoQWJXo4TYLbRQguNhYfRwp6EjmeBa+QTWBria3feTDa70v9BxJkCFwpOhMI4hS17sSB1jhsCkUhseA6GX+wkEgEGf3DHEDAnBX3sbc9O1b3mAVagZ+fbXaFaU3On1t0W7I5PRklJhv/b3S3YnZi42V0xg47nv+siaaVl+6hb6MEb+/emEIpR+cLTbZRwFRFHcqfPnXMgHHuFCXgDkhDjVYOdSFMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDEtMzBUMTE6MTU6MzcrMDA6MDCk8qg0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTMwVDExOjE1OjM3KzAwOjAw1a8QiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="></span>
                  info@elcolegio.gob.bo
                </a>
              </div>
              <!-- End List -->
            </div>
            <div class="col-6 col-md-3 col-lg-3 order-lg-1 mb-5 mb-lg-0">
              <h3 class="h6 text-white mb-3">Redes sociales</h3>

              <a href="#">
                <span class="fab fa-facebook-f min-width-3 text-center mr-2"></span>

              </a>
              <a href="#">
                <span class="fab fa-twitter min-width-3 text-center mr-2"></span>
              </a>

              <a href="#">
                <span class="fab fa-github min-width-3 text-center mr-2"></span>

              </a>

            </div>

          </div>
        </div>
        <div class="pie">

          <div class="pie_derechos">
            <label class="small text-muted">Todos los derechos reservados. &copy; 2020</label>
          </div>
          <div class="pie_redes">
            <a href="#">
              <span class="fab min-width-3 text-center mr-2"><img src="../assets/svg/logos/logo-white.svg"></span>
            </a>
          </div>
          <div class="pie_privaci">
            <label class="small text-muted">Política de privacidad</label>
          </div>

        </div>
      </footer>
      <!-- ========== END FOOTER ========== -->

      <!-- ========== SECONDARY CONTENTS ========== -->
      <!-- Panel Sidebar Navigation -->

      <!-- End Panel Sidebar Navigation -->

      <!-- Signup Modal Window -->
      <!--  <div id="signupModal" class="js-signup-modal u-modal-window" style="width: 500px;"> -->
        <div id="signupModal" class="" style="width: 500px;">
          <!-- Modal Close Button -->
          <button class="btn btn-sm btn-icon btn-text-secondary u-modal-window__close" type="button" onclick="Custombox.modal.close();">
            <span class="fas fa-times"></span>
          </button>
          <!-- End Modal Close Button -->


        </div>
        <!-- End Signup Modal Window -->
        <!-- ========== END SECONDARY CONTENTS ========== -->
        <!-- Go to Top -->
        <a class="js-go-to u-go-to" href="javascript:;"
        data-position='{"bottom": 15, "right": 15 }'
        data-type="fixed"
        data-offset-top="400"
        data-compensation="#header"
        data-show-effect="slideInUp"
        data-hide-effect="slideOutDown">
        <span class="fa fa-arrow-up u-go-to__inner"></span>
      </a>
    </div>


  </template>

  <script>
    //Extraemos informcaion de la base de datos FIREBASE
    import db from '@/firebase/init'
    let calculoJuegoEmparejamiento=0;
    let concentraciónJuegoVideo=0;
    let memoriaTecnicaCadena=0;
    let testGeneral=0;
    let rudeEstudiante="806200262016001";
    let jsonEstudiante = {};
    let estudianteCalificacion = {};
    let dbfirebase = db.database();
    let estudiantedb =  dbfirebase.ref('estudiante'); 
    export default {
      data() {
        return{
          calculoJuegoEmparejamiento:0,
          uscrolled:false,
          navegadorBlanco:false,
          estudiante:{},
        }
      },
      methods:{
        handleScroll (event) {
          // Any code to be executed when the window is 
          this.uscrolled = (window.scrollY > 0);
          // console.log(this.uscrolled);
        },
        scrollbarBlanco (event) {
          // Any code to be executed when the window is 
          this.navegadorBlanco = (window.scrollY > 0);
          //console.log(this.navegadorBlanco);
        },
        datosEstudiante(){
          estudiantedb.on("value", function(snapshot) {
            jsonEstudiante = snapshot.val();
            for (const property in jsonEstudiante){
              // La variable (property) obtiene el RUDE del estudiante en la tabla NoSQL
              // La variable jsonEstudiante[property] obtiene, el nodo del registro del estudiante (Esta información es almacenada en la variable estudianteCalificacion)
              if(rudeEstudiante == property){
                calculoJuegoEmparejamiento = jsonEstudiante[property].calculo.juego_emparejamiento;
                concentraciónJuegoVideo = jsonEstudiante[property].concentracion.juego_video;
                memoriaTecnicaCadena = jsonEstudiante[property].memoria.tecnica_cadena;
                testGeneral = jsonEstudiante[property].test.memoria;
                console.log(calculoJuegoEmparejamiento, concentraciónJuegoVideo, memoriaTecnicaCadena, testGeneral);
              }
            }
          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
        },
      },
      created () {
        // this.datosEstudiante()
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.scrollbarBlanco);
      },
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.scrollbarBlanco);
      },
    }
  </script>