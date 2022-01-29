# Lyons Therapy

Website for Lyons Therapy.

## Get started ##

### Requirements: ###

* Ensure Node.js version 14.15.0 or higher is installed.
* Ensure npm is installed.
* Download or clone this package.

Then in CLI, navigate to the root directory and enter:

```
  npm i
```

To install all packages.

> Please note that npm may show security vulnerabilities. These are caused by packages used by Gatsby. Gatsby have said that these are safe to ignore. Gatsby is a _static site building tool_ and so the vulnerabilities will not be apparent once the site is built. Please see this article for more info: [npm audit: Broken by Design](https://overreacted.io/npm-audit-broken-by-design/)

### Environment: ###

To deploy to the server, a .env file is required.
This must contain the following:
* **LIVE_DEPLOY** _Set to `true` to enable deployment to the server._
* **FTP_HOST** _Set URL to the site's domain using ftp protocol._
* **FTP_USER** _Set to authorised ftp account._
* **FTP_PASSWORD** _Set to authorised ftp account's password._

### Commands: ###

```
  npm run develop
```

Create pages dynamically as they are edited and serve in development mode. The site will be available on http://localhost:8000 or your local IP with port 8000.

```
  npm run serve
```

Clears the current cache and builds the site in production mode to `/public/`, then serve. The site will be available on http://localhost:9000 or your local IP with port 9000.

```
  npm run deploy
```

Clears the current cache and builds the site in production mode to `/public/`, then deploy to host supplied in .env

> Please note that under the hood this repository uses Gatsby js and so all Gatsby CLI commands will also work.