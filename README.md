# API Games High Resolution Timer

![](https://img.shields.io/badge/build-passing-brightgreen)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/44d12a9566524e54b859fb489df3e3ad)](https://www.codacy.com/gh/apigames-public/highres-timer/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=apigames-public/highres-timer&amp;utm_campaign=Badge_Grade)
![](https://img.shields.io/npm/v/@apigames/highres-timer)
![](https://img.shields.io/badge/license-MIT-blue)

High resolution timer for the API Games Platform and SDKs.

* * *

This package provides a basic high resolution timer for the API Games Platform and SDKs.  It allows a consumer to get a start time structure and then to query the elapsed time some time later.  The elapsed time is returned in milliseconds.

## List of features

*   Simple with only two functions
*   Works in Node and all browsers

## Typescript Code Demo

```ts

  const startTime: HighresTimeType = startTime();
  doSomethingThatTakesTime();
  const elapsedTimeMS: number = elapsedTime(startTime);

```

## Javascript Code Demo

```js

  const startTime = startTime();
  doSomethingThatTakesTime();
  const elapsedTimeMS = elapsedTime(startTime);

```

## Download & Installation

```shell 
$ npm i @apigames/highres-timer 
```

## Authors or Acknowledgments

*   API Games Limited
*   Vlad Tansky

## License

This project is licensed under the MIT License
