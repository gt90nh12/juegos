<template>
    <div class="student">
        <!-- ============================================================== -->
        <!-- Start Page Content -->
        <!-- ============================================================== -->
        <!-- Row -->
        <div class="row">
            <!-- Column -->
            <div class="col-md-12 col-lg-4 col-xlg-3">
                <div class="card">
                    <div class="card-body">
                        
                        <div class="user-profile">
                            <!-- User profile image -->
                            <div class="profile-img"> <img src="../assets/imagenesmoster/5.jpg" alt="user" /> </div>
                            <!-- User profile text-->
                            <div class="profile-text"> 
                                <a href="#" class="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true" v-if="user">    
                                {{ user.displayName}}
                                <span class="caret"></span>
                                </a>

                                <a href="#" class="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true" v-else>    
                                Estudiante
                                <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu animated flipInY">
                                    <a href="#" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
                                    <a href="#" class="dropdown-item"><i class="ti-wallet"></i> My Balance</a>
                                    <a href="#" class="dropdown-item"><i class="ti-email"></i> Inbox</a>
                                    <div class="dropdown-divider"></div> 
                                    <a href="#" class="dropdown-item"><i class="ti-settings"></i> Account Setting</a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item"><i class="fa fa-power-off" @click="logout()"></i> Logout</a>
                                    <button @click="logout()">salir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr>
                    </div>
                   
                </div>
            </div>
            <!-- Column -->
            <!-- Column -->
            <div class="col-md-12 col-lg-8 col-xlg-9">
                <div class="card">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs profile-tab" role="tablist">
                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home"
                                role="tab">Técnica de la memoria</a> </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#profile"
                                role="tab">Técnica de la concentración</a> </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#settings"
                                role="tab">Técnica del cálculo</a> </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane active" id="home" role="tabpanel">
                            <div class="card-body">
                                <div class="profiletimeline">
                                    <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/imagenesmoster/1.jpg" alt="user"
                                                class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><a href="#" class="link">John Doe</a> <span class="sl-date">5 minutes
                                                    ago</span>
                                                <p>assign a new task <a href="#"> Design weblayout</a></p>
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-6 mb-3"><img
                                                            src="../assets/imagenesmoster/img1.jpg"
                                                            class="img-responsive radius" /></div>
                                                    <div class="col-lg-3 col-md-6 mb-3"><img
                                                            src="../assets/imagenesmoster/img2.jpg"
                                                            class="img-responsive radius" /></div>
                                                    <div class="col-lg-3 col-md-6 mb-3"><img
                                                            src="../assets/imagenesmoster/img3.jpg"
                                                            class="img-responsive radius" /></div>
                                                    <div class="col-lg-3 col-md-6 mb-3"><img
                                                            src="../assets/imagenesmoster/img4.jpg"
                                                            class="img-responsive radius" /></div>
                                                </div>
                                                <div class="like-comm"> <a href="javascript:void(0)" class="link mr-2">2
                                                        comment</a> <a href="javascript:void(0)" class="link mr-2"><i
                                                            class="fa fa-heart text-danger"></i> 5 Love</a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/imagenesmoster/2.jpg" alt="user"
                                                class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div> <a href="#" class="link">John Doe</a> <span class="sl-date">5 minutes
                                                    ago</span>
                                                <div class="mt-3 row">
                                                    <div class="col-md-3 col-xs-12"><img
                                                            src="../assets/imagenesmoster/img1.jpg" alt="user"
                                                            class="img-responsive radius" /></div>
                                                    <div class="col-md-9 col-xs-12">
                                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Integer nec odio. Praesent libero. Sed cursus ante dapibus
                                                            diam. </p> <a href="#" class="btn btn-success"> Design
                                                            weblayout</a>
                                                    </div>
                                                </div>
                                                <div class="like-comm mt-3"> <a href="javascript:void(0)"
                                                        class="link mr-2">2 comment</a> <a href="javascript:void(0)"
                                                        class="link mr-2"><i class="fa fa-heart text-danger"></i> 5
                                                        Love</a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/imagenesmoster/3.jpg" alt="user"
                                                class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><a href="#" class="link">John Doe</a> <span class="sl-date">5 minutes
                                                    ago</span>
                                                <p class="mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                                                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                                                    sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                                                </p>
                                            </div>
                                            <div class="like-comm mt-3"> <a href="javascript:void(0)"
                                                    class="link mr-2">2 comment</a> <a href="javascript:void(0)"
                                                    class="link mr-2"><i class="fa fa-heart text-danger"></i> 5 Love</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="sl-item">
                                        <div class="sl-left"> <img src="../assets/imagenesmoster/4.jpg" alt="user"
                                                class="img-circle" /> </div>
                                        <div class="sl-right">
                                            <div><a href="#" class="link">John Doe</a> <span class="sl-date">5 minutes
                                                    ago</span>
                                                <blockquote class="mt-2">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--second tab-->
                        <div class="tab-pane" id="profile" role="tabpanel">
                            <div class="card-body">
                                <!-- Rooms Section -->
                                <div class="container space-1 space-2--sm">
                                    <div class="row">
                                        <!-- Room -->
                                        <div class="col-sm-6 col-lg-4 mb-5">
                                            <a class="card bg-img-hero lift-lg shadow-2-lg-hover border-0 gradient-overlay-half-dark-v2-2 min-height-320 text-white rounded-pseudo p-4 h-100"
                                                href="#"
                                                style="background-image: url(../../assets/img/demo/hotel/room-1.jpg);">

                                                <div class="mb-3">
                                                    <span
                                                        class="badge badge-pill badge-dark bg-black-opacity-0_3 font-weight-normal text-uppercase px-3">Best
                                                        Offer</span>
                                                </div>

                                                <div class="mt-auto">
                                                    <h5 class="font-weight-normal">Deluxe Room</h5>

                                                    <div class="d-flex align-items-center small text-white">
                                                        <div class="d-flex align-items-center mr-4">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <rect width="24" height="24" fill="none" />
                                                                    <path
                                                                        d="M2,4H0C0,1.239,2.239,0,5,0H15c2.761,0,5,1.239,5,4H18c0-1.657-1.343-2-3-2H5C3.343,2,2,2.343,2,4Z"
                                                                        transform="translate(2 18)" fill="#000000"
                                                                        opacity="0.3" />
                                                                    <rect width="22" height="6" rx="1"
                                                                        transform="translate(1 14)" fill="#000000" />
                                                                    <path
                                                                        d="M10,7H8V6A1,1,0,0,0,7,5H3A1,1,0,0,0,2,6V7H1A1,1,0,0,1,0,6V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V6a1,1,0,0,1-1,1H16V6a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Z"
                                                                        transform="translate(3 6)" fill="#000000"
                                                                        opacity="0.3" />
                                                                </svg>
                                                            </i>
                                                            5 beds
                                                        </div>

                                                        <div class="d-flex align-items-center">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="21"
                                                                    height="9" viewBox="0 0 21 9">
                                                                    <path
                                                                        d="M15.525,9H5.476A5,5,0,0,1,.506,4.552L0,0H21l-.506,4.552A4.994,4.994,0,0,1,15.525,9ZM18,1.75a.751.751,0,0,0-.75.751,4.008,4.008,0,0,1-1.7,3.4.75.75,0,0,0,.9,1.2,5.488,5.488,0,0,0,2.3-4.6A.751.751,0,0,0,18,1.75Z"
                                                                        transform="translate(0 0)" fill="#000000" />
                                                                </svg>
                                                            </i>
                                                            3 bathrooms
                                                        </div>
                                                    </div>

                                                    <hr class="border-white-opacity-0_3">

                                                    Starts from <span
                                                        class="text-primary font-weight-medium">$1.520.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- End Room -->

                                        <!-- Room -->
                                        <div class="col-sm-6 col-lg-4 mb-5">
                                            <a class="card bg-img-hero lift-lg shadow-2-lg-hover border-0 gradient-overlay-half-dark-v2-2 min-height-320 text-white rounded-pseudo p-4 h-100"
                                                href="#"
                                                style="background-image: url(../../assets/img/demo/hotel/room-2.jpg);">

                                                <div class="mt-auto">
                                                    <h5 class="font-weight-normal">Luxury Room</h5>

                                                    <div class="d-flex align-items-center small text-white">
                                                        <div class="d-flex align-items-center mr-4">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <rect width="24" height="24" fill="none" />
                                                                    <path
                                                                        d="M2,4H0C0,1.239,2.239,0,5,0H15c2.761,0,5,1.239,5,4H18c0-1.657-1.343-2-3-2H5C3.343,2,2,2.343,2,4Z"
                                                                        transform="translate(2 18)" fill="#000000"
                                                                        opacity="0.3" />
                                                                    <rect width="22" height="6" rx="1"
                                                                        transform="translate(1 14)" fill="#000000" />
                                                                    <path
                                                                        d="M10,7H8V6A1,1,0,0,0,7,5H3A1,1,0,0,0,2,6V7H1A1,1,0,0,1,0,6V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V6a1,1,0,0,1-1,1H16V6a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Z"
                                                                        transform="translate(3 6)" fill="#000000"
                                                                        opacity="0.3" />
                                                                </svg>
                                                            </i>
                                                            3 beds
                                                        </div>

                                                        <div class="d-flex align-items-center">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="21"
                                                                    height="9" viewBox="0 0 21 9">
                                                                    <path
                                                                        d="M15.525,9H5.476A5,5,0,0,1,.506,4.552L0,0H21l-.506,4.552A4.994,4.994,0,0,1,15.525,9ZM18,1.75a.751.751,0,0,0-.75.751,4.008,4.008,0,0,1-1.7,3.4.75.75,0,0,0,.9,1.2,5.488,5.488,0,0,0,2.3-4.6A.751.751,0,0,0,18,1.75Z"
                                                                        transform="translate(0 0)" fill="#000000" />
                                                                </svg>
                                                            </i>
                                                            2 bathrooms
                                                        </div>
                                                    </div>

                                                    <hr class="border-white-opacity-0_3">

                                                    Starts from <span
                                                        class="text-primary font-weight-medium">$1.100.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- End Room -->

                                        <!-- Room -->
                                        <div class="col-sm-6 col-lg-4 mb-5">
                                            <a class="card bg-img-hero lift-lg shadow-2-lg-hover border-0 gradient-overlay-half-dark-v2-2 min-height-320 text-white rounded-pseudo p-4 h-100"
                                                href="#"
                                                style="background-image: url(../../assets/img/demo/hotel/room-3.jpg);">

                                                <div class="mt-auto">
                                                    <h5 class="font-weight-normal">Premium Room</h5>

                                                    <div class="d-flex align-items-center small text-white">
                                                        <div class="d-flex align-items-center mr-4">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <rect width="24" height="24" fill="none" />
                                                                    <path
                                                                        d="M2,4H0C0,1.239,2.239,0,5,0H15c2.761,0,5,1.239,5,4H18c0-1.657-1.343-2-3-2H5C3.343,2,2,2.343,2,4Z"
                                                                        transform="translate(2 18)" fill="#000000"
                                                                        opacity="0.3" />
                                                                    <rect width="22" height="6" rx="1"
                                                                        transform="translate(1 14)" fill="#000000" />
                                                                    <path
                                                                        d="M10,7H8V6A1,1,0,0,0,7,5H3A1,1,0,0,0,2,6V7H1A1,1,0,0,1,0,6V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V6a1,1,0,0,1-1,1H16V6a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Z"
                                                                        transform="translate(3 6)" fill="#000000"
                                                                        opacity="0.3" />
                                                                </svg>
                                                            </i>
                                                            3 beds
                                                        </div>

                                                        <div class="d-flex align-items-center">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="21"
                                                                    height="9" viewBox="0 0 21 9">
                                                                    <path
                                                                        d="M15.525,9H5.476A5,5,0,0,1,.506,4.552L0,0H21l-.506,4.552A4.994,4.994,0,0,1,15.525,9ZM18,1.75a.751.751,0,0,0-.75.751,4.008,4.008,0,0,1-1.7,3.4.75.75,0,0,0,.9,1.2,5.488,5.488,0,0,0,2.3-4.6A.751.751,0,0,0,18,1.75Z"
                                                                        transform="translate(0 0)" fill="#000000" />
                                                                </svg>
                                                            </i>
                                                            1 bathrooms
                                                        </div>
                                                    </div>

                                                    <hr class="border-white-opacity-0_3">

                                                    Starts from <span
                                                        class="text-primary font-weight-medium">$920.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- End Room -->

                                        <!-- Room -->
                                        <div class="col-sm-6 col-lg-4 mb-5">
                                            <a class="card bg-img-hero lift-lg shadow-2-lg-hover border-0 gradient-overlay-half-dark-v2-2 min-height-320 text-white rounded-pseudo p-4 h-100"
                                                href="#"
                                                style="background-image: url(../../assets/img/demo/hotel/room-4.jpg);">

                                                <div class="mt-auto">
                                                    <h5 class="font-weight-normal">Cooper Room</h5>

                                                    <div class="d-flex align-items-center small text-white">
                                                        <div class="d-flex align-items-center mr-4">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <rect width="24" height="24" fill="none" />
                                                                    <path
                                                                        d="M2,4H0C0,1.239,2.239,0,5,0H15c2.761,0,5,1.239,5,4H18c0-1.657-1.343-2-3-2H5C3.343,2,2,2.343,2,4Z"
                                                                        transform="translate(2 18)" fill="#000000"
                                                                        opacity="0.3" />
                                                                    <rect width="22" height="6" rx="1"
                                                                        transform="translate(1 14)" fill="#000000" />
                                                                    <path
                                                                        d="M10,7H8V6A1,1,0,0,0,7,5H3A1,1,0,0,0,2,6V7H1A1,1,0,0,1,0,6V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V6a1,1,0,0,1-1,1H16V6a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Z"
                                                                        transform="translate(3 6)" fill="#000000"
                                                                        opacity="0.3" />
                                                                </svg>
                                                            </i>
                                                            2 beds
                                                        </div>

                                                        <div class="d-flex align-items-center">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="21"
                                                                    height="9" viewBox="0 0 21 9">
                                                                    <path
                                                                        d="M15.525,9H5.476A5,5,0,0,1,.506,4.552L0,0H21l-.506,4.552A4.994,4.994,0,0,1,15.525,9ZM18,1.75a.751.751,0,0,0-.75.751,4.008,4.008,0,0,1-1.7,3.4.75.75,0,0,0,.9,1.2,5.488,5.488,0,0,0,2.3-4.6A.751.751,0,0,0,18,1.75Z"
                                                                        transform="translate(0 0)" fill="#000000" />
                                                                </svg>
                                                            </i>
                                                            1 bathrooms
                                                        </div>
                                                    </div>

                                                    <hr class="border-white-opacity-0_3">

                                                    Starts from <span
                                                        class="text-primary font-weight-medium">$550.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- End Room -->

                                        <!-- Room -->
                                        <div class="col-sm-6 col-lg-4 mb-5">
                                            <a class="card bg-img-hero lift-lg shadow-2-lg-hover border-0 gradient-overlay-half-dark-v2-2 min-height-320 text-white rounded-pseudo p-4 h-100"
                                                href="#"
                                                style="background-image: url(../../assets/img/demo/hotel/room-5.jpg);">

                                                <div class="mt-auto">
                                                    <h5 class="font-weight-normal">Regular Room</h5>

                                                    <div class="d-flex align-items-center small text-white">
                                                        <div class="d-flex align-items-center mr-4">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <rect width="24" height="24" fill="none" />
                                                                    <path
                                                                        d="M2,4H0C0,1.239,2.239,0,5,0H15c2.761,0,5,1.239,5,4H18c0-1.657-1.343-2-3-2H5C3.343,2,2,2.343,2,4Z"
                                                                        transform="translate(2 18)" fill="#000000"
                                                                        opacity="0.3" />
                                                                    <rect width="22" height="6" rx="1"
                                                                        transform="translate(1 14)" fill="#000000" />
                                                                    <path
                                                                        d="M10,7H8V6A1,1,0,0,0,7,5H3A1,1,0,0,0,2,6V7H1A1,1,0,0,1,0,6V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V6a1,1,0,0,1-1,1H16V6a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Z"
                                                                        transform="translate(3 6)" fill="#000000"
                                                                        opacity="0.3" />
                                                                </svg>
                                                            </i>
                                                            1 beds
                                                        </div>

                                                        <div class="d-flex align-items-center">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="21"
                                                                    height="9" viewBox="0 0 21 9">
                                                                    <path
                                                                        d="M15.525,9H5.476A5,5,0,0,1,.506,4.552L0,0H21l-.506,4.552A4.994,4.994,0,0,1,15.525,9ZM18,1.75a.751.751,0,0,0-.75.751,4.008,4.008,0,0,1-1.7,3.4.75.75,0,0,0,.9,1.2,5.488,5.488,0,0,0,2.3-4.6A.751.751,0,0,0,18,1.75Z"
                                                                        transform="translate(0 0)" fill="#000000" />
                                                                </svg>
                                                            </i>
                                                            1 bathrooms
                                                        </div>
                                                    </div>

                                                    <hr class="border-white-opacity-0_3">

                                                    Starts from <span
                                                        class="text-primary font-weight-medium">$300.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- End Room -->

                                        <!-- Room -->
                                        <div class="col-sm-6 col-lg-4 mb-5">
                                            <a class="card bg-img-hero lift-lg shadow-2-lg-hover border-0 gradient-overlay-half-dark-v2-2 min-height-320 text-white rounded-pseudo p-4 h-100"
                                                href="#"
                                                style="background-image: url(../../assets/img/demo/hotel/room-6.jpg);">
                                                
                                                <div class="mt-auto">
                                                    <h5 class="font-weight-normal">Budget Room</h5>

                                                    <div class="d-flex align-items-center small text-white">
                                                        <div class="d-flex align-items-center mr-4">
                                                            <i class="svg-icon svg-icon-xs text-white mr-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <rect width="24" height="24" fill="none" />
                                                                    <path
                                                                        d="M2,4H0C0,1.239,2.239,0,5,0H15c2.761,0,5,1.239,5,4H18c0-1.657-1.343-2-3-2H5C3.343,2,2,2.343,2,4Z"
                                                                        transform="translate(2 18)" fill="#000000"
                                                                        opacity="0.3" />
                                                                    <rect width="22" height="6" rx="1"
                                                                        transform="translate(1 14)" fill="#000000" />
                                                                    <path
                                                                        d="M10,7H8V6A1,1,0,0,0,7,5H3A1,1,0,0,0,2,6V7H1A1,1,0,0,1,0,6V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V6a1,1,0,0,1-1,1H16V6a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Z"
                                                                        transform="translate(3 6)" fill="#000000"
                                                                        opacity="0.3" />
                                                                </svg>
                                                            </i>
                                                            1 bed
                                                        </div>
                                                    </div>

                                                    <hr class="border-white-opacity-0_3">

                                                    Starts from <span
                                                        class="text-primary font-weight-medium">$50.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- End Room -->
                                    </div>
                                </div>
                                <!-- End Rooms Section -->
                            </div>
                        </div>
                        <div class="tab-pane" id="settings" role="tabpanel">
                            <div class="card-body">
                                <form class="form-horizontal form-material">
                                    <div class="form-group">
                                        <label class="col-md-12">Full Name</label>
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
                                            <input type="password" value="password"
                                                class="form-control form-control-line">
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
                </div>
            </div>
            <!-- Column -->
        </div>
        <!-- Row -->
        <!-- ============================================================== -->
        <!-- End PAge Content -->
        <!-- ============================================================== -->
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name:"logout",
    data() {
        return {
            user: null
        }
    },
    methods:{
        logout()
        {
            firebase.auth().signOut().then(() => {
                this.$router.push({name: 'login'})
            })

            // firebase.auth().signOut()
            // .then(function(){
            //     console.log('salir');
            // })
            // .catch(function(error){
            //     console.log(error);
            // })
        },

    },
    created (){
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.user = user
                console.log(user)
            }else{
                this.user = null
            }
        })
    }
}

</script>