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

GET all articles as a single JSON object

eg. [`/all.json`](https://yannick-cousin.github.io/veille-api/api/all.json)

##### `/id`

GET article complete informations by id

eg. [`/id/0.json`](https://yannick-cousin.github.io/veille-api/api/id/1.json)

```json
{
  "id": 0,
  "week": 46,
  "year": 2021,
  "member": "Anouchka",
  "url": "https://www.blogdumoderateur.com/classement-langages-populaires-php-sortir-top-10/",
  "description": "Classement des langages populaires : PHP pourrait sortir du top 10, une première en 20 ans",
  "avatar": "https://avatars.githubusercontent.com/u/94181724?s=300&v=4",
  "favorite": 2
}
```
