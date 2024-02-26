<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Application that calculates total amount of water stored given surface profile created with [Nest](https://github.com/nestjs/nest).

## Requirements

- Node.js 20.11.1
- npm 10.4.0
- Postman or other app that is capable of creating http request to localhost

## As local app

### Install

Run following command from root of project:
```bash
$ npm install
```

### Running

Run one of following commands from root of project:
```bash
# development
$ npm run start

# production mode
$ npm run start:prod
```

## As docker container

These steps assume you have Docker installed.

### Install

Run following command from root of project:
```bash
$ docker build --tag rest-api .
```

### Running

Run following command from root of project:
```bash
$ docker compose up
```

## Test

App has test coverage of surface-profile module in following responsibilities:
- controllers
- service
- validation pipe

Run following command from root of project:
```bash
# unit tests
$ npm run test
```

## Using the app
If you want to confirm if app is running, enter http://localhost:3000 in browser of your choice. IF app is running, you should see plain "Hello World" message.

Those steps assume you have postman or other such API calling capable app. Instruction provided here assume that you are familiar with postman.

In address bar put:
```bash
http://localhost:3000/surface-profiles
```
and change request type to GET.

In headers tab add key:
```bash
Content-Type
```
and in value add:
```bash
application/json
```

Now in body tab you can enter your data as long it fits formatting presented below:
```bash
{
    "surfaceProfile": []
}
```
where in [] you should put at least three not negative and integer numbers, ie [2, 1, 2]


Nest is [MIT licensed](LICENSE).
