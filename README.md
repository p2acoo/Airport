# Airport

## Airport project for school :

This is a project for school in Vue.Js, this website get informations of the API "opensky-network.org".
This website print departures and arrivals of an airport.
You can select the airport on the top of the website :

![image](https://user-images.githubusercontent.com/78920246/162047340-3b82f374-c98a-4523-94d7-ac56b43c8991.png)

You can select if you want departures of arrivals :

![image](https://user-images.githubusercontent.com/78920246/162047434-bb40e6e8-85eb-482b-98c9-eac2e97bd5ef.png)

## Project setup
```
npm install
```
### SETUP CONFIG FILE !!

Create a json file named config.json, in /components . In this json, write password, username and the list of airports do you want informations.
This is the schema :
```
{
   "password": "",
   "username": "",
   "airport": [
      "LFPG",
      ...
   ]
}
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

