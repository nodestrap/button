# &lt;Button&gt;&lt;/Button&gt;
A clickable component for initiating an action.

## Preview

```jsx
<Button tag='a' theme='primary' size='lg' gradient={true} outlined={true} press={true} onClick={() => alert('hello world')} >
    click me
</Button>
```
Rendered to:
```html
<a class="c1 thPrimary szLg gradient outlined pressed">
    click me
</a>
```

## Features
* Includes all features in [`<ActionControl />`](https://www.npmjs.com/package/@nodestrap/action-control).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/button
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
