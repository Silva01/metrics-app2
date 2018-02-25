<template>
	<div>

		<div id="sidebar">
			<ul>
				<li><a href="#"> <i class="fab fa-accusoft"></i> &nbsp; Config</a></li>
				<li><a href="#"> <i class="fas fa-adjust"></i> &nbsp; Ajustar</a></li>
				<li><a href="#"> <i class="fab fa-audible"></i> &nbsp; Mudar</a></li>
				<li><a href="#"> <i class="fab fa-behance-square"></i> &nbsp; Testar</a></li>
				<li><a href="#"> <i class="fab fa-apple"></i> &nbsp; Apple</a></li>
			</ul>

			<div id="sidebar-btn" v-on:click="exibir()">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>

	</div>
</template>

<script>
import $ from 'jquery'

export default {
    name:'sidebar-menu',
    props:['mostrar'],
    methods:{
        exibir: () => {
            this.mostrar = typeof this.mostrar == 'undefined' ? true : this.mostrar;

            if (this.mostrar) {
              $('#sidebar').toggleClass('visible');
              $('#container-page').toggleClass('ativo');
              $('#card-1').css("width", "60rem");
              this.mostrar = false;
            } else {
              $('#sidebar').toggleClass('visible');
              $('#container-page').toggleClass('ativo');
              $('#card-1').css("width", "64.5rem");
              this.mostrar = true;
            }
        }
    }
}
</script>

<style>
    @import './main.css';
    @import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');
</style>
