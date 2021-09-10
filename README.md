# Broadcast

A lightweight logging utility for node. Uses the console `info`, `warn`, and `error` methods, and is a lightweight wrapper around it.

Comes with the kleur methods built in (under the `style` key) to allow you to easily style your console messages for easier debugging and visibility.

## Usage

```js
import broadcaster from '@kerimhudson/broadcast'


const broadcast = broadcaster()
broadcast.info('This is a console.log!');
broadcast.warn(broadcast.style.bold('MAKE IT BOLD!'));
```

Inspired by [console-log-level](https://github.com/watson/console-log-level).