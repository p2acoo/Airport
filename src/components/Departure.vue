<template>
  <div class="parent">
    <div>
      <h1>DÉPART(S)</h1>
      <p v-for="(data, index) in datas" :key="index" class="div">
        {{ data.estDepartureAirport }}
      </p>
    </div>
    <div>
      <h1>ARRIVÉE(S)</h1>
      <p v-for="(data, index) in datas" :key="index" class="div">
        {{ data.estArrivalAirport }}
      </p>
    </div>
    <div>
      <h1>HEURE DE DÉPART(S)</h1>
      <p v-for="(data, index) in datas" :key="index" class="div">
        {{ data.firstSeen }}
      </p>
    </div>
    <div>
      <h1>HEURE D'ARRIVÉE(S)</h1>
      <p v-for="(data, index) in datas" :key="index" class="div">
        {{ data.lastSeen }}
      </p>
    </div>
  </div>
</template>

<script>
//retrieve credentials from json file

import json from "./config.json";
export default {
  name: "MyDepart",

  data() {
    return {
      datas: {},
      MyJson: json,
    };
  },
  beforeMount() {
    this.getDate();
    let airport = this.$route.params.airport;
    this.getData(airport, this.getDate().today, this.getDate().tomorrow);
  },
  methods: {
    // retrieve data from opensky API
    async getData(airport, today, tomorrow) {
      let headers = new Headers();
      let username = this.MyJson.username;
      let password = this.MyJson.password;

      headers.append(
        "Authorization",
        "Basic " + btoa(username + ":" + password)
      );

      const response = await fetch(
        "https://opensky-network.org/api/flights/departure?airport=" +
          airport +
          "&begin=" +
          today +
          "&end=" +
          tomorrow +
          "",
        {
          headers: headers,
        }
      );
      const data = await response.json();
      // transform unix timestamp to readable date
      for (let i in data) {
        data[i].firstSeen = new Date(data[i].firstSeen * 1000).toLocaleString(
          "fr-FR"
        );
        data[i].lastSeen = new Date(data[i].lastSeen * 1000).toLocaleString(
          "fr-FR"
        );
      }

      this.datas = data;
    },
    // retrieve today and tomorrow date in unix format

    getDate() {
      let date = new Date();
      let today =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate()-1);
      let tomorrow =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        (date.getDate()+1);

      let todayunix = Math.floor(new Date(today).getTime() / 1000);
      let tomorrowunix = Math.floor(new Date(tomorrow).getTime() / 1000);

      return {
        today: todayunix,
        tomorrow: tomorrowunix,
      };
    },
  },
};
</script>

<style>
.parent {
  animation: drop 0.3s;

  width: 100vw;
  height: auto;
  display: flex;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

.parent div {
  animation: drop 0.3s;

  margin-top: 10px;
}

.parent h1 {
  animation: drop 0.3s;

  color: black;
}

h1 {
  animation: drop 0.3s;

  color: black;
}

.div {
  text-align: center;
  margin-top: 20px;
  height: auto;
  width: 25vw;
  font-size: 16px;
  color: black;
}
</style>
