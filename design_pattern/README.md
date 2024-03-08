# REACT Programming Patterns

## Instructions

1. Let’s start separating the logic from the `GuineaPigs` component into a new container component called `GuineaPigsContainer`.
<br>
Inside the **containers/** folder, create a new file named **GuineaPigsContainer.js** and copy - paste the content of `GuineaPigs` component. 

2. Let’s start separating some of the rendering logic from `GuineaPigs` component into a new presentational component called `GuineaPigsSlideShow`.
<br>
Inside **components/**, create a new file named **GuineaPigsSlideShow.js**.
<br>
Next, open +*components/GuineaPigsSlideShow.js** and create and export a functional component called `GuineaPigsSlideShow`. Using object destructuring, extract the `src` and `isFavorite` props.

3. Open **containers/GuineaPigsContainer.js**.
<br>
Locate the `div` with the `id` of `guineaPigsSlideShow`. Copy this `div` and its content.
<br>
Now, open **components/GuineaPigsSlideShow.js**. Inside the function, let’s return the JSX you’ve copied.
<br>
Finally, the `img`‘s `src` attribute value will automatically pick up its new value from the `src` prop. We’ll need to fix the `className` attribute value from `currentGP === favoriteGP? "favorite" : ""` to `isFavorite? "favorite" : ""` since we no longer have direct access to `currentGP` and `favoriteGP`.

4. Let’s start separating the form rendering logic from GuineaPigs component into a new presentational component called GuineaPigsForm.
<br>
Inside **components/**, create a new file named **GuineaPigsForm.js**.
<br>
Next, open **components/GuineaPigsForm.js** and create and export a functional component called `GuineaPigsForm`. Using object destructuring, extract `favoriteGP`, `onSelectFavorite`, and `onResetFavorite` props.

5. Open **containers/GuineaPigsContainer.js**.
<br>
Locate the `<div>` element with the `id` of `guineaPigsForm`. Copy this `div` and its content.
<br>
Now, open **components/GuineaPigsForm.js**. Inside the function, let’s return the JSX you’ve copied.
<br>
Finally, replace `resetFavoriteHandler` with `onResetFavorite` and replace `favoriteChangeHandler` with `onSelectFavorite`.

6. Import in **containers/GuineaPigsContainer.js** the two presentation components we created earlier, **components/GuineaPigsForm.js** and **components/GuineaPigsSlideShow.js**.

7. Next, in the return statement, go ahead and delete the content inside the fragment (`<></>`). Inside the fragment, render the `GuineaPigsSlideShow` with the `src` prop with the value of the `src` state constant and set the value of the `isFavorite` prop to `true` when `currentGP` is equal to `favoriteGP` and `false` otherwise.

8. Inside the fragment, under `GuineaPigsSlideShow`, render the `GuineaPigsForm` with the `favoriteGP` prop with the value of the `favoriteGP` state constant, and set the prop `onSelectFavorite` equal to the `favoriteChangeHandler` function, and the `onResetFavorite` prop equal to `resetFavoriteHandler` function.

9. Let’s change the component’s name in **containers/GuineaPigsContainer.js** from `GuineaPigs` to `GuineaPigsContainer` and fix the export from `GuineaPigs` to `GuineaPigsContainer`.
<br>
Navigate to the **index.js** file and:
<br>
    - Remove `GuineaPigs` import from **./components/GuineaPigs.js** and import `GuineaPigsContainer` from **./containers/GuineaPigsContainer**.
    - Replace `root.render(<GuineaPigs />)` with `root.render(<GuineaPigsContainer />)`

    Finally, you should see the application load and “look” the same to the user but for the developer, our application is cleaner and more maintainable.