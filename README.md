# Team 419 - Business Reviews App

> Project repo for building out a business and restaurant reviews site. This reop contains component containing the title, info, mapping, and headers of each business.

## Related Projects

  - https://github.com/team419/photo-gallery-module
  - https://github.com/team419/comments-module
  - https://github.com/team419/reservations-module

## Requirements

- Node 6.13.0
- React 16.8.6
- Express 4.16.4
- Body Parser 1.19.0
- MySQL 5.7.25

## Development

### Installing Dependencies

From within the root directory:

```sh
brew install mysql@5.7
npm install -g webpack
npm install
mysql.server start
mysql -u root < schema.sql
```
In a new terminal window
```
npm run seed
npm run react-dev
```
In another new terminal window
```
npm start
```
Navigate to localhost:3418 to run component

