<template>
    <div class="full-container">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <button class="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarCollapse" 
                    aria-controls="navbarCollapse" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" 
                 id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                       <router-link to="/home">Home</router-link>
                    </li>
                    nspb
                    <li class="nav-item">
                        <router-link to="/adicionarItem">item</router-link>
                    </li>  
                </ul>
                <img class="navbar-nav mr-auto" height="25px" src="../../assets/logo.png">
                <form class="form-inline mt-2 mt-md-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  
    
}
</script>