# Location Finder

<!-- https://webahead5.github.io/FaceDetect/ -->
Let's Check the [Website](https://webahead5.github.io/FaceDetect/):heart:
---
The website is built in a way that the weather will be modified according to Your location, So when the user enters the web page the pictures and the weather will be automaticly modified to be his location's.

However, the info will change according the city that you are searching for whenever a valid city name is inserted to the search bar. 

---

### The APIs Work Flow :cyclone:

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

