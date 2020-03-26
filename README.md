# Location Finder

<!-- https://webahead5.github.io/LocationInfo/ -->
Let's Check the [Website](https://webahead5.github.io/LocationInfo/):heart:
---
The website is built in a way that the weather will be modified according to Your location, So when the user enters the web page the pictures and the weather will be automaticly modified to be his location's.

However, the info will change according the city that you are searching for whenever a valid city name is inserted to the search bar. 


### APIS USED 

- GET USER IP: https://api.ipify.org
- GET LOCATION FROM IP: http://api.ipstack.com/
- GET WEATHER INFO: http://api.openweathermap.org
- GET LOCATION PICTURE: https://api.ipify.org/
- GET LOCATION MAP: https://js.api.here.com
---


### Functionality

Default infomation will be provided based on your current location (based on your IP), and you can type in any City in the search bar to get new information.


![alt text](https://i.ibb.co/0VyX4nK/Location-App.png)


### The APIs Work Flow :cyclone:

![The work flow](https://i.imgur.com/RavD7Ui.png)
---
```graphviz
digraph {
  compound=true
  rankdir=RL

  graph [ fontname="Source Sans Pro", fontsize=20 ];
  node [ fontname="Source Sans Pro", fontsize=18];
  edge [ fontname="Source Sans Pro", fontsize=12 ];


  subgraph core {
    c [label="IP\nFinder\nAPI" color=red] [shape=circle]
  }
  
  c -> sync [ltail=session lhead=session]

  subgraph cluster1 {
     concentrate=true
    a [label="Location Picture\nAPI"][color=blue] [shape=box]
    b [label="Weather\nAPI"] [color=blue][shape=box]
    sync [label="Location\nAPI" shape=plaintext ]
    b -> sync  [dir="both"]
    sync -> a [dir="both"]
  }
}
```

---
:dog:
---

---
The pictures of the locations are randomly picked from [PixaBay's](https://pixabay.com) API According the search key word.


# :100: :muscle: :tada:

---

### Thank you! :sheep: 

