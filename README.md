# veille-api

Veille  open-source REST API

### base url

`https://yannick-cousin.github.io/veille-api/api`

### [routes](#routes-1)

For articles :

- [`/articles.json`](https://yannick-cousin.github.io/veille-api/api/all.json)
- [`/id-articles`](https://yannick-cousin.github.io/veille-api/api/id/0.json)

For members :
- [`/members.json`](https://yannick-cousin.github.io/veille-api/api/members.json)
- [`/id-members`](https://yannick-cousin.github.io/veille-api/api/id-members/0.json)

For favorite :
- - [`/favorite.json`](https://yannick-cousin.github.io/veille-api/api/favorite.json)
- [`/id-favorite`](https://yannick-cousin.github.io/veille-api/api/id-favorite/0.json)

For comments :
- - [`/comments.json`](https://yannick-cousin.github.io/veille-api/api/comments.json)
- [`/id-members`](https://yannick-cousin.github.io/veille-api/api/id-comments/0.json)

---

## Routes

##### `/articles.json`

GET all articles as a single JSON object

eg. [`/articles.json`](https://yannick-cousin.github.io/veille-api/api/all.json)

##### `/id`

GET article complete informations by id

eg. [`/id-articles/0.json`](https://yannick-cousin.github.io/veille-api/api/id/1.json)

```json
{
  "id": 0,
  "week": 46,
  "year": 2021,
  "member": "Anouchka",
  "url": "https://www.blogdumoderateur.com/classement-langages-populaires-php-sortir-top-10/",
  "description": "Classement des langages populaires : PHP pourrait sortir du top 10, une première en 20 ans",
  "avatar": "https://avatars.githubusercontent.com/u/94181724?s=300&v=4",
  "favorite": 2,
  "tags": [
    "langages"
  ]
}
```

##### `/members.json`

GET all members as a single JSON object

eg. [`/all.json`](https://yannick-cousin.github.io/veille-api/api/members.json)

##### `/id`

GET member complete informations by id

eg. [`/id-members/0.json`](https://yannick-cousin.github.io/veille-api/api/id-members/0.json)

```json
{
  "id": 0,
  "name": "Anouchka",
  "admin": true,
  "avatar": "https://avatars.githubusercontent.com/u/94181724?s=300&v=4",
  "rank": 0
}
```
