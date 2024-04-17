# Context Mixtape

You’re a music enthusiast working on getting gigs as a DJ. You’d like to showcase your incredible music taste with a curated selection of your favorite songs, also known as a “mixtape”. Since you already know how to write React code, what better use could there be for practicing React Context?

This application will have you practice your React Context chops by setting up a Context globally to store mixtape viewing settings. It will include a dedicated wrapper component for its Provider that sets up React state and a state updater function.

## Instructions

### Creating a MixtapeContext

1. Let’s start off the project by creating a `MixtapeContext`. You’ll be using that Context object throughout the application to store the playlist data.
<br>
Create a new **MixtapeContext.js** file. In it, create and export a variable named `MixtapeContext` whose value is a new Context object created using the `React.createContext()` API.

2. `MixtapeContext` will be used in this application via a wrapping component. That’ll let you set up state for its value.
<br>
Create and export a function component named `MixtapeProvider`. It should take in two props:

    - children
    - songs

    It should render the `children` wrapped in a `MixtapeContext.Provider`. For now, pass an object that contains the `songs` value as the Provider’s `value`.

3. In addition to the `songs` value, `MixtapeContext` is going to store and provide two pieces of state:

    - `genre`: initially `"all"`; will later be used to filter songs on genre
    - `sortOrder`: initially `"ascending"`; will later be used to sort songs by date

    For each of those two pieces of state, use React’s `useState` to create a piece of state and a state updater function.

4. The `genre` and `sortOrder` values and their updater functions will be useful for consumers of the `MixtapeContext`. Add all four of those variables to the `MixtapeContext.Provider` component’s `value` prop.

### Rendering Songs

5. Now that you’ve created a `MixtapeProvider` component, let’s use it! Open **App.js** and review the `App` component and `songs` variable inside. Feel free to change up the songs however you’d like – as long as each contains an `artist`, `genre`, `name`, and `year`.
<br>
Once you’re done customizing your mixtape, wrap the rendered content of `App` with the `MixtapeProvider`, passing `songs` as a prop.

6. Let’s work on getting the `App` component to render the list of songs. A partially completed `SongList` component is provided for you in the **SongList.js** file. Import that `SongList` into **App.js** and render it inside the `MixtapeProvider`.

7. For `SongsList` to retrieve that songs list, as well as filtering and ordering settings, it’ll need to retrieve the Context object.
<br>
In **SongList.js**, use `useContext()` to retrieve the `genre`, `sortOrder`, and `songs` from `MixtapeContext` at the top of the `SongsList` component.

8. Now that the `SongList` component has access to the provided `songs`, it’s time to render those to the screen. Finally, some better music!
<br>
For convenience, your workspace already has a `Song` component in a **Song.js** file. Each element in the `songs` array has properties that can be directly used as props to the `Song` component.
<br>
Import the `Song` component into **SongList.js** and render each song using `Song`. You should then have a fine looking list of quality music rendered. You can remove the TODO from the `SongList` component now.

### Filtering and Sorting

9. Now that your songs are rendering, we’re going to fill in the genre-filtering and date-sorting controls in the mixtape.
<br>
In **App.js**, import the existing `Controls` component from the **Controls.js** file. Then, render a `Controls` component in the `App` component above the `SongList`. You can remove the TODO from the `Controls` component now.

10. In **Controls.js**, at the beginning of the `Controls` component, retrieve the `genre` and `sortOrder` pieces of state as well as their state updater functions from `MixtapeContext`.

11. Inside the `Controls` component, add a `<select>` as a child of the returned `<div>`. Set its value to the `MixtapeContext`‘s genre and its children should be five `<option>`s:

    - One whose value is `"all"` and text content is `All`
    - One each for `hip hop`, `rap`, `rock`, and `pop`

12. Now that the select has the options it needs, we can use it to control the context. Give the `<select>` an `onChange` event handler that updates the `MixtapeContext`‘s `genre` value.

13. Controlling the genre is only useful if the songs get filtered to that genre. Over in the `SongList` component, filter the songs being rendered based on the `genre` value. If the `genre` is `"all"`, all should render; otherwise, only songs whose `.genre` property matches the context’s `genre` should render.

14. Let’s work on `sortOrder` next. It’ll also be controlled by elements in the `Controls` component. Back in the `Controls` component, this time add in a `<button>` component after the `<select>`. The text of the button should display the current `sortOrder` value.
<br>
Then, give the `<button>` an `onClick` event handler that toggles the order between `"ascending"` and `"descending"`.

15. Finally, head back to the `SongList` component and sort the filtered songs. If the order is `"ascending"`, lower years should come first; if the order is `"descending"`, higher years should come first.
<br>
At this point, all your controls should be connected properly. You should be able to both filter songs on genre and change their sort order. Great!