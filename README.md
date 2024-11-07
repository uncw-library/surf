The app is an html static site from randallwebvm.

It lives at libary.uncw.edu/surf.  This app is in a separate container from library.uncw.edu drupal, and gets any request going to /surf.

You can run a dev box on your machine with `docker compose up`, and push the changes to gitlab & rancher.

See the site at http://localhost:8001/surf

## Rancher production

```
docker build --platform linux/amd64 -t uncwlibrary/surf .
docker push uncwlibrary/surf
```