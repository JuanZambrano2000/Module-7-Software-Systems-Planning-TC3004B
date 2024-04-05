# Theme Toggler

In this project, you will be implementing a light/dark theme feature in a Todo list React application. Offering both dark and light modes in your application can improve user experience and accessibility, particularly in low-light conditions, or reduce eye strain. This is most often implemented with a toggle button on the application, allowing users to manually toggle between their preferred modes.

Much of the application has already been built, including a button to change the theme. However, when you run the application, you will see that when you click on the theme button in the top right corner, it doesn’t do anything!

Take a look at **Header.js** where you can see this button’s implementation. As you can see, it’s not properly set up! Now, it’s time for you to utilize your knowledge of React and custom hooks to implement this light/dark mode feature.

## Instructions

### Create Hook

1. The first step in creating this light/dark theme feature will be to implement a custom hook to handle the behavior of the feature. In the end, this custom hook should:

    - manage the state of the theme feature (dark mode vs. light mode)
    - run an effect to update the application’s appearance
    - return an easy-to-use function to toggle between the modes and update the state
    - return an easy-to-use Boolean value that indicates whether or not the application is in dark mode.

    To get started, we’ll make a folder and a file to create and export this custom hook.

    - Create a folder called **hooks**, and in the folder, create a file called **useTheme.js**.

2. Remember, a custom hook is one that makes use of other hooks. For this light/dark theme hook, we will need:

    - `useState()` to manage the state of the current theme of the application
    - `useEffect()` to modify the document’s `data-theme` attribute, which will update the application’s CSS.

    In **useTheme.js**, import `useState()` and `useEffect()` from `react`.

3. Now we can start building the custom hook. Create a function called `useTheme`.

4. Creating a custom hook to manage the theme styling will allow our codebase to be cleaner by separating this complex logic. The first piece of this logic is to manage `theme` state, which will keep track of the current theme setting for the application (`"light"` or `"dark"`).
<br>
In the function body of `useTheme()`, create a state variable called `theme` and a `setTheme` setter function. Choose either `"light"` or `"dark"` as an initial state value.

5. Next, let’s add an effect that is responsible for changing the application’s styling when the `theme` state updates.
<br>
Call `useEffect()` with an empty callback as the first argument (for now) and set `theme` as a dependency.

6. We are using the `data-theme` [custom data attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) to save our `theme` state in the DOM when the page loads. If you look in **index.css**, you will see that we are using the `data-theme` attribute to change the styling of our page when that value is set to `"dark"`.
<br>
At the top of the effect callback, add in the following code:

    ```js
    document.documentElement.setAttribute("data-theme", theme);
    ```

7. Now, let’s create a function that is responsible for changing the theme when we use an `onClick()` event.
<br>
After the `useEffect()`, create a function called `onToggleTheme()`.

8. Inside `onToggleTheme()` call `setTheme()`. When called, `onToggleTheme()` should switch the state from `"light"` to `"dark"` or vice-versa.

9. We’re almost done! We could return the `theme` state value from our hook, however, to give our application more flexibility, we’ll return an easy-to-use boolean that is true if we are in dark mode, false otherwise.
<br>
Create a `const` variable `isDarkTheme` and set its value to be `true` if `theme` is equal to `"dark"`, and `false` otherwise if it is `"light"`.
<br>
Our application will use this value to dynamically render button text in our header depending on the value of `theme`.

10. At the bottom of `useTheme` return an object with the values `onToggleTheme` and `isDarkTheme`.

11. Finally, export `useTheme`. This will allow the custom hook to be used anywhere in our application!

### Create Dark Mode

12. Now that we have exported our custom hook, we are going to add it to our application! The final functionality will be:

    - The page styling will change when the theme-changing button is clicked.
    - The button’s text will dynamically change based on the current theme.

    Inside of **Header.js** in the **header** folder, import `useTheme`.

13. Now that we have imported `useTheme` into our application, this gives us access to the return values inside of the hook.
<br>
Inside the `Header` component, call `useTheme()` to access `onToggleTheme` and `isDarkTheme`.

14. Next, we are going to replace the `console.log()` that is in the `onClick()` prop of the `<button>` element in our Header. Instead, it should toggle the theme state when the button is clicked.
<br>
Assign `onToggleTheme` as the value for the `onClick` prop for the `<button>` element in our Header.
<br>
When the button is clicked the page’s style is updated to “light” or “dark”.

15. We are almost finished! All we are going to do now is use `isDarkTheme` to dynamically change the text of our button.
<br>
In the body of the `button`, use `isDarkTheme` and add the appropriate JSX so the text is either `"Change to 🌞 mode"` or `"Change to 🌚 mode"`. The text should change based on whether `isDarkTheme` is true or false.
