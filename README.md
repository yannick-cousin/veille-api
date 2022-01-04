# veille-api

Veille  open-source REST API

### base url

`https://yannick-cousin.github.io/veille-api/api`

### [routes](#routes-1)

- [`/all.json`](https://yannick-cousin.github.io/veille-api/api/all.json)
- [`/id`](https://yannick-cousin.github.io/veille-api/api/id/1.json)

---

## Routes

##### `/all.json`

GET all characters as a single JSON object

eg. [`/all.json`](https://yannick-cousin.github.io/veille-api/api/all.json)

##### `/id`

GET character complete informations by id

eg. [`/id/1.json`](https://yannick-cousin.github.io/veille-api/api/id/1.json)

```json
{
  "id": 1,
  "name": "Luke Skywalker",
  "height": 1.72,
  "mass": 73,
  "gender": "male",
  "homeworld": "tatooine",
  "wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
  "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
  "born": -19,
  "bornLocation": "polis massa",
  "died": 34,
  "diedLocation": "ahch-to",
  "species": "human",
  "hairColor": "blond",
  "eyeColor": "blue",
  "skinColor": "light",
  "cybernetics": "Prosthetic right hand",
  "affiliations": [
    "Alliance to Restore the Republic",
    "Red Squadron",
    "Rogue Squadron",
    "Massassi Group",
    "Leia Organa's team",
    "Endor strike team",
    "Jedi Order",
    "Bright Tree tribe",
    "New Republic",
    "Resistance"
  ],
  "masters": ["Obi-Wan Kenobi", "Yoda"],
  "apprentices": [
    "Leia Organa",
    "Ben Solo (along with a dozen apprentices)",
    "Rey"
  ],
  "formerAffiliations": []
}
```

### Notes

/!\ Some properties may not be provided on some characters
