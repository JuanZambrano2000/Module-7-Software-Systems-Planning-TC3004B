# Video Player

For this project, you’ll make three React components work together to create a responsive video player.

## Instructions

1. Take a look at your video player in the browser. It looks pretty good! But if you try interacting with it, you’ll find that there’s zero functionality.
<br>
Take a look at the `App` component. This component has one property stored as state using `useState()`: a `src` containing the address of a video file. `App`‘s job is to pass this `src` down to a stateless component, and to pass the ability to change the `src` down to a different stateless component.
<br>
Passing `src` is the easier part, so let’s do that first.
<br>
Inside of `App`‘s return statement, give `<Video />` an attribute. Make this attribute’s name `src`, and the attribute’s value equal to `src`.

2. Let’s make `<Video />` play its passed-in video file!
<br>
Select **Video.js**.
<br>
In `Video`‘s return statement, give `<video />` a `src` attribute. Make `src` equal to the passed-in video file.

3. Alright, the video player works! Now, let’s make the menu work as well.
<br>
You’ve made `App` pass the `src` down to `<Video />`. Now `App` needs to pass the ability to change the `src` down to `<Menu />`. If you want to pass the ability to change state, then first, you need to define a function that calls the state setter function returned by `useState()`.
<br>
In **App.js**, define a function called `onSelectVideoHandler()` with a single string parameter called `newVideo`. Use `newVideo` to get a new source from `VIDEOS` and use this as an argument to `setSrc`.

4. If you pass `onSelectVideoHandler()` to `<Menu />`, then you will give `<Menu />` the ability to update `<App />`‘s state.
<br>
In `App`‘s return statement, give `Menu` an `onSelectVideo` attribute. Set `onSelectVideo`‘s value equal to the `onSelectVideoHandler()` function.

5. Alright, now you just have to attach this passed-in function to an event listener!
<br>
Select **Menu.js**.
<br>
In `Menu`‘s return statement, give the `<form>` element an `onClick` attribute. Set `onClick`‘s value equal to the passed-in `onSelectVideo` function.
<br>
Try selecting a video in the browser.
<br>
It doesn’t work! Do you know why?
<br>
`onSelectVideo` expects a string as an argument. But event handlers are automatically passed event objects, not strings.
<br>
Let’s fix this next.

6. Before using `onSelectVideo`, we’ll need to wrap it in a new function that can take an event object as an argument.
<br>
Define a new function in `Menu` named `clickHandler()` with a single parameter called `event`.
<br>
Inside the body of `clickHandler()`, declare a new constant named `name`. Set `name` equal to `event.target.value`. This will equal the value of a clicked radio button.
<br>
Next, call `onSelectVideo()` with `name` as an argument.

7. Only one more step! You need to use your new wrapper function as an event handler.
<br>
In `Menu`‘s return statement, replace `{props.onSelectVideo}` with `{clickHandler}`.

8. `App` passes down `src` to `Video`. `Video` uses this info to display the chosen video.
<br>
App also passes down the ability to change `src` to `Menu`. `Menu` uses this ability to let a user select a new video.
<br>
You’ve put together a responsive video player and applied a React programming pattern often used by professional React developers.