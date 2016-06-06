### API Basejump: Image Search Abstraction Layer
---

#### User stories:

* I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

* I can paginate through the responses by adding a ?offset=2 parameter to the URL.

* I can get a list of the most recently submitted search strings.

##### Images Search Example Usage:

https://vp-images.herokuapp.com/search/freecodecamp

https://vp-images.herokuapp.com/search/freecodecamp?offset=2

##### Images Search Example Output:

```javascript
[
 {
  imgUrl: "https://cdn-images-1.medium.com/max/400/1*5uG9wzkw91KX-			   H75HjvrhQ.png",
  altText: "Freecodecamp",
  thumbnailUrl: "http://ts3.mm.bing.net/th?id=OIP.Mde3a6133082cf34c0d53fad01f1c7c76o0&pid=15.1",
  pageUrl: "https://medium.com/swlh/10-great-websites-to-learn-coding-ff7e411d708d"
 },
 ...
]
```

##### Find Latest Images Example Usage:

https://vp-images.herokuapp.com/images/latest

##### Find Latest Images Example Output:

```javascript
[
 {
  searchTerm: "freecodecamp",
  firstSearchedAt: "6/6/2016, 7:10:31 PM",
  recentlySearchedAt: "6/6/2016, 7:13:40 PM"
 },
 ...
]
```

---

##### UI:

![url-shortener-microservice-ui](https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1465221550/fcc/img-search-ui.png)

#### How To Run This App Locally

* Clone This Repoistory:
```bash
https://github.com/vinaypuppal/Img-search
```

```bash
cd <cloned directory>
```

* Start MongoDB Server: ( Follow this [wiki](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Using-MongoDB-And-Deploying-To-Heroku) for help )
```bash
mongod --port 27017 --dbpath=./data
```
* Get Bing Search API key from [here](https://datamarket.azure.com/dataset/bing/search) and update ```helpers/imgSearch.js``` with API KEY

* Install dependencies and start server:
```bash
npm install
npm run dev
```
---