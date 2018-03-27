<template>
  <div class="topnav">
    <a id="logo-metrics" href="javascript:void(0)" v-on:click="exibir()">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="40" height="40"
             viewBox="0 0 64 64"
             style="enable-background:new 0 0 64 64;;fill:#000000;">
          <linearGradient id="SVGID_1__43591" gradientUnits="userSpaceOnUse" x1="32.0002" y1="16.5013" x2="32.0002" y2="23.2929" spreadMethod="reflect">
            <stop offset="0" style="stop-color:#6DC7FF"></stop>
            <stop offset="1" style="stop-color:#E6ABFF"></stop>
          </linearGradient>
          <polygon style="fill:url(#SVGID_1__43591);" points="23,20.002 32,17.002 41,20.002 41,20.002 32,23.002 "></polygon>
          <linearGradient id="SVGID_2__43591" gradientUnits="userSpaceOnUse" x1="32" y1="10.0006" x2="32" y2="55.2617" spreadMethod="reflect">
            <stop offset="0" style="stop-color:#1A6DFF"></stop>
            <stop offset="1" style="stop-color:#C822FF"></stop>
          </linearGradient>
          <path style="fill:url(#SVGID_2__43591);" d="M56.635,21.134l-3.378-1.133l3.378-1.132C57.464,18.591,58,17.844,58,16.967  c0-0.88-0.538-1.628-1.37-1.907l-14.619-4.902c-0.615-0.207-1.294-0.207-1.909,0L32,12.874l-8.101-2.717  c-0.626-0.209-1.285-0.209-1.901-0.002l-7.458,2.501c-3.608,1.21-7.08,2.373-7.172,2.403C6.537,15.34,6,16.089,6,16.969  c0.001,0.876,0.537,1.622,1.367,1.9l3.376,1.132l-3.372,1.131c-0.832,0.278-1.369,1.026-1.369,1.906  c0,0.879,0.537,1.627,1.369,1.905L13,26.831v19.512c0,1.245,0.833,2.342,2.072,2.729l14.724,4.595  c0.711,0.221,1.457,0.332,2.204,0.332s1.493-0.111,2.204-0.332l14.725-4.596C50.167,48.685,51,47.588,51,46.343V26.831l5.629-1.887  C57.462,24.664,58,23.916,58,23.036C58,22.16,57.464,21.412,56.635,21.134z M40.738,12.054c0.205-0.068,0.43-0.068,0.635,0  l14.626,4.919l-5.944,1.993l-15.01-5.003L40.738,12.054z M17.162,20.001L32,15.055l14.838,4.946L32,24.948L17.162,20.001z   M8.002,16.957c0.078-0.026,3.558-1.192,7.174-2.405l7.459-2.5c0.1-0.034,0.204-0.051,0.309-0.051c0.106,0,0.214,0.018,0.318,0.053  l5.693,1.909l-15.001,5L8.002,16.957z M13.945,21.037l15.01,5.003l-5.695,1.908c-0.203,0.07-0.428,0.068-0.635,0l-14.619-4.92  L13.945,21.037z M15.669,47.163c-0.4-0.125-0.669-0.455-0.669-0.82v-5.491l16,4.889v6.155c-0.205-0.038-0.41-0.078-0.608-0.14  L15.669,47.163z M48.332,47.162l-14.724,4.595c-0.199,0.062-0.404,0.101-0.608,0.14v-6.155l16-4.889v5.491  C49,46.708,48.731,47.038,48.332,47.162z M49,38.762L33,43.65V32h-2v11.65l-16-4.888v-11.26l6.99,2.344  C22.299,29.949,22.622,30,22.945,30s0.646-0.052,0.952-0.155L32,27.129l8.102,2.716c0.617,0.207,1.294,0.207,1.907,0L49,27.501  V38.762z M41.372,27.949c-0.203,0.07-0.428,0.068-0.635,0l-5.693-1.908l15.001-5l5.949,2.007L41.372,27.949z"></path>
        </svg>
      </span>
    </a>
    <div class="logout-btn" v-on:click="logout()">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           width="40" height="40"
           viewBox="0 0 64 64"
           style="enable-background:new 0 0 64 64;;fill:#000000;">
        <path style="fill:#85CBF8;" d="M51,57H13c-3.314,0-6-2.686-6-6V13c0-3.314,2.686-6,6-6h38c3.314,0,6,2.686,6,6v38  C57,54.314,54.314,57,51,57z"></path>
        <path style="fill:#7BBEEB;" d="M51,57H13c-3.314,0-6-2.686-6-6V32h50v19C57,54.314,54.314,57,51,57z"></path>
        <path style="fill:#ED7899;" d="M41.849,17.908L32,27.757l-9.849-9.849c-0.391-0.391-1.024-0.391-1.414,0l-2.828,2.828  c-0.391,0.391-0.391,1.024,0,1.414L27.757,32l-9.849,9.849c-0.391,0.391-0.391,1.024,0,1.414l2.828,2.828  c0.391,0.391,1.024,0.391,1.414,0L32,36.243l9.849,9.849c0.391,0.391,1.024,0.391,1.414,0l2.828-2.828  c0.391-0.391,0.391-1.024,0-1.414L36.243,32l9.849-9.849c0.391-0.391,0.391-1.024,0-1.414l-2.828-2.828  C42.873,17.518,42.24,17.518,41.849,17.908z"></path>
        <path style="fill:#F283A5;" d="M46,21l-9.696,11.654L46,42l0,0c-1.105,1.105-2.895,1.105-4,0L22,22c-1.105-1.105-1.105-2.895,0-4  l0,0l10,10l10.437-10.437L46,21z"></path>
        <g>
          <path style="fill:#8D6C9F;" d="M51,6H13c-3.86,0-7,3.14-7,7v38c0,3.86,3.14,7,7,7h38c3.86,0,7-3.14,7-7V13C58,9.14,54.86,6,51,6z    M56,51c0,2.757-2.243,5-5,5H13c-2.757,0-5-2.243-5-5V34c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1V13c0-2.757,2.243-5,5-5h38   c2.757,0,5,2.243,5,5v17c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1V51z"></path>
          <path style="fill:#8D6C9F;" d="M46.799,20.029l-2.828-2.828c-0.78-0.781-2.05-0.78-2.829,0L32,26.343l-9.142-9.142   c-0.778-0.779-2.048-0.78-2.829,0l-2.828,2.828c-0.78,0.78-0.78,2.049,0,2.829L26.343,32l-9.142,9.142   c-0.78,0.78-0.78,2.049,0,2.829l2.828,2.828c0.779,0.78,2.049,0.779,2.829,0L32,37.657l9.142,9.142   c0.39,0.39,0.902,0.585,1.415,0.585c0.512,0,1.024-0.195,1.414-0.585l2.828-2.828c0.78-0.78,0.78-2.049,0-2.829L37.657,32   l9.142-9.142C47.579,22.078,47.579,20.809,46.799,20.029z M35.536,31.293c-0.391,0.391-0.391,1.023,0,1.414l9.849,9.85   l-2.829,2.828l-9.849-9.849c-0.195-0.195-0.451-0.293-0.707-0.293s-0.512,0.098-0.707,0.293l-9.85,9.849l-2.828-2.829l9.849-9.849   c0.391-0.391,0.391-1.023,0-1.414l-9.849-9.85l2.829-2.828l9.849,9.849c0.391,0.391,1.023,0.391,1.414,0l9.849-9.849l2.829,2.829   L35.536,31.293z"></path>
          <path style="fill:#8D6C9F;" d="M13,30c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C14,30.448,13.552,30,13,30z"></path>
          <path style="fill:#8D6C9F;" d="M46,30c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C47,30.448,46.552,30,46,30z"></path>
          <path style="fill:#8D6C9F;" d="M51,30c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C52,30.448,51.552,30,51,30z"></path>
          <path style="fill:#8D6C9F;" d="M18,34c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C17,33.552,17.448,34,18,34z"></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">

  import * as $ from 'jquery'

  export default {
      name: 'nav-bar-metrics',
      methods: {
          logout: function() {
              sessionStorage.removeItem('token');
              window.location.href = '#/login';
          },
          exibir: function ():void {
            this.mostrar = typeof this.mostrar == 'undefined' ? true : this.mostrar;

            if (this.mostrar) {
              $('#sidebar').toggleClass('visible');
              $('#container-page').toggleClass('ativo');
              $('#timer-metrics').css('display', 'block');
              this.menuEspandido = true;
              this.mostrar = false;
            } else {
              $('#sidebar').toggleClass('visible');
              $('#container-page').toggleClass('ativo');
              $('#timer-metrics').css('display', 'none');
              this.menuEspandido = false;
              this.mostrar = true;
            }

            let dropdownContentGraf = document.getElementById('options-grafico');
            let dropdownContentTempo = document.getElementById('options-tempo');

            if (dropdownContentTempo.style.display === "block") {
              dropdownContentTempo.style.display = "none";
            }

            if (dropdownContentGraf.style.display === "block") {
              dropdownContentGraf.style.display = "none";
            }
          }
      }
  }
</script>

<style>
  .topnav {
    overflow: hidden;
    display: block;
    background-image: linear-gradient(to left, #2069b4, #191933);
    box-shadow: 6px 0px 20px #0d0d0d;
  }

  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: -1px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: #151718;
  }

  .topnav a.active {
    background-color: #4CAF50;
    color: white;
  }

  .logout-btn {
    margin-left: 90%;
    cursor: pointer;
  }

  #logo-metrics {
    padding: -1px 16px;
  }
</style>
