# API Games High Resolution Timer

![](https://img.shields.io/badge/build-passing-brightgreen)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5ad0506135cd47169d6f7f3b8b0594e8)](https://www.codacy.com/gh/apigames-core/highres-timer/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=apigames-core/highres-timer&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/5ad0506135cd47169d6f7f3b8b0594e8)](https://www.codacy.com/gh/apigames-core/highres-timer/dashboard?utm_source=github.com&utm_medium=referral&utm_content=apigames-core/highres-timer&utm_campaign=Badge_Coverage)
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

*   Cloudize Limited
*   Vlad Tansky

## License

This project is licensed under the MIT License
