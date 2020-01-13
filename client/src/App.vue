<template>
	<div>
      <Header/>
		<div id="main">
			<Home></Home>
		</div>
       <Footer/>
	</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Home from "./components/pages/home";
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"

export default {
	name: "app",
	components: {
    Header,
    Footer,
    Home,
    
	}
};
</script>

<style>

</style>
