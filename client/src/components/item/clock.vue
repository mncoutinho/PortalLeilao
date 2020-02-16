<template>
	<div class="main">
		<input type="text" id="hours" readonly>
		<input type="text" id="minutes" readonly>
		<input type="text" id="seconds" readonly>
	</div>
</template>

<script>
	function clock(){
		var data = new Date();
		var time = [
			data.getHours(),
			data.getMinutes(),
			data.getSeconds(),
		];
		
		for (var i = 0; i < 3; i++) {
			if (time[i] < 10) {
			time[i] = "0" + time[i];
			}
		}
		
		document.getElementById("hours").value = time[0];
		document.getElementById("minutes").value = ":" + time[1];
		document.getElementById("seconds").value = time[2];
	}
	setInterval(clock,1000);
</script>

<style type="text/css">
	#hours{
		border-style: none; 
		text-align: center;
		color: #696969;
		font-weight: initial;
		font-size: 90px;
		width: 100px;
	}
	#minutes{
		border-style: none;
		text-align: center;
		color: #696969;
		font-weight: initial;
		font-size: 60px;
		width: 90px;
	}	
	#seconds{
		border-style: none;
		text-align: center;
		color: #696969;
		font-weight: initial;
		font-size: 30px;
		width: 35px;
	}
</style>

