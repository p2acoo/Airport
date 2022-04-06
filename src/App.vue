<template>
  <nav>
    <div class="dropdown">
      <span
        >AIRPORTS
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7 10l5 5 5-5H7z" /></svg
      ></span>
      <div class="dropdown-content">
        <a
          v-for="data in datas"
          v-bind:key="data"
          v-on:click="changeAirport(data)"
        >
          {{ data }}<br
        /></a>
      </div>
    </div>
    <div class="links">
      <router-link :to="'/departure/' + this.current" id="departureLink"
        >Départ(s)</router-link
      >
      <router-link :to="'/arrival/' + this.current" id="arrivalLink"
        >Arrivée(s)</router-link
      >
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
//retrieve airports from json file
import json from "./components/config.json";
export default {
  data() {
    return {
      current: "",
      datas: json.airport,
    };
  },
  methods: {
    changeAirport(airport, current) {
      console.log(current);
      this.current = airport;
      window.location.href.includes("arrival")
        ? window.location.replace("/arrival/" + airport)
        : window.location.replace("/departure/" + airport);
    },

    url() {
      this.current = window.location.href.split("/")[4];
      // add default airport if nothing selected
      if (this.current == undefined) {
        this.current = "LFPG";
      }
    },
  },
  mounted() {
    this.url();
  },
};
</script>

<style>
svg {
  fill: black;
}
* {
  margin: 0;
}

#app {
  transition: all 0.3s;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

nav {
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: #487346;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%234c8e43' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%236aac5f' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%234c8e43' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%236aac5f' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%2389CC7C' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%23768c3a' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%2396ac58' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23B6CC76' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%2396ac58' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%23768c3a' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23B6CC76' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%23768c3a' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23B6CC76' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%2396ac58' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23B6CC76' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E");
}

.links {
  width: min-content;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50px;
  background: rgb(255, 251, 239);
}

a {
  border-radius: 50px;
  text-decoration: none;
  padding: 0.45rem;
  font-weight: bold;
  color: #2c3e50;
}

.links a.router-link-exact-active {
  animation: spawn 1s;

  color: aliceblue;
  background-color: #42b983;
}

@keyframes spawn {
  from {
    background-color: #42b98300;
  }

  to {
    background-color: #42b983;
  }
}

@keyframes drop {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

.dropdown {
  border-radius: 12px;
  padding: 4px;
  margin: 2px;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  position: relative;
  display: inline-block;
  background: rgb(255, 251, 239);
}

.dropdown-content {
  border-radius: 25px;
  animation: drop 0.3s;
  display: none;
  position: absolute;
  background: rgb(255, 251, 239);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
