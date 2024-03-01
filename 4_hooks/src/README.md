# Weather Planner

We’ve started building a weather planner app that will fetch data about the weather and allow our users to write some notes next to the forecast. A lot of good code has already been written, but there currently isn’t anything rendering to the screen.

## Instructions

1. Let’s read through the code and start to wrap our heads around what is going on here. What part of our code do we think is keeping the component from rendering?
<br>
In our JSX, we are trying to map over an array stored by the `data` state variable, but our effect that fetches this data doesn’t get called until after the first render. So during the first render, data is `undefined` and attempting to call `map()` on `undefined` is causing our error!
<br>
Let’s prevent this error by checking to see if the data has loaded yet. If it hasn’t, then we want our function component to just return a paragraph tag with the text “Loading…”. If the data is no longer undefined, then the data has been loaded, and we can go ahead and render the full JSX!

2. Our data fetching is being done in our effect. Notice how we are currently just using `alert()` messages to keep track of requesting and receiving data from our server. Instead of just stringifying the response data and showing it in an alert message, let’s store that data in our state.
<br>
When the data has been fetched, use our state setter function to store that data in our component’s state!
<br>
Remember that we want to store an array in our `data` state variable, not the whole response object.

3. Type in each of the notes’ input fields in our table. What do you notice? Why do you think this is happening?
<br>
Each time that we type in an input field, the component re-renders to show the new value of that field. Even though we don’t need any new data from the backend, our component is fetching new data after every render!
<br>
Use an empty dependency array to ensure that data is only fetched after our component’s first render.

4. Let’s make one more improvement. Did you notice the buttons at the top of our app? We want our users to be able to choose between planning around daily weather forecasts and weekly weather forecasts. Clicking on these buttons currently doesn’t change anything. Let’s fix that!
<br>
The server has two different endpoints called: `/daily` and `/hourly`. Let’s use the value of the `forecastType` state variable to determine which endpoint our effect should request data from.
<br>
After making this change, our effect behaves differently based on the value of `forecastType`. You could say that how we use our effect depends on it! Add this variable to our dependency array so that the effect is called again, updating `data` appropriately, after re-renders where the user has selected a different forecast type.