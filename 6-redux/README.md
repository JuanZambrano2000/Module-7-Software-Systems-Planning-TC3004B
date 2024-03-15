# Redux Road

Now that we have a solid understanding of Redux’s core concepts, it’s time to put them into practice.

In this project, your objective is to create a text-based adventure game using reducers, state, and actions. The state will serve as a reflection of the game’s current status, encompassing elements such as the player’s inventory, distance covered, and time spent on the journey. Each occurrence within the game will be depicted as an action, allowing players to collect supplies, embark on travels, and occasionally, if they dare, encounter mishaps like overturning their wagon and losing their provisions.

By completing this project, you’ll practice your skills in:

- State management
- Redux usage pattern
- Immutable state updates
- Defining and using actions

## Instructions

### Initial State and Reducer

1. First, define the starting point of our game. The player begins on day 0 at kilometer 0 with 100 units of supplies.
<br>
Define an `initialWagonState` with three properties:
    - supplies starting at 100
    - distance travelled, starting at 0
    - days on the road, starting at 0

2. Define an empty reducer that will manage the state of the game. You can give it any name you prefer.
<br>
Like any Redux reducer, it should be a function with `state` and `action` parameters. It should set `state` to `initialWagonState` if no value is provided.

3. Add a `switch` statement to your reducer. The default case should return the `state`.

4. A player may gather supplies, which takes them a day and doesn’t cover any distance.
<br>
If the `action.type` is `'gather'`, return a new state object with:
    - 15 more supplies
    - The same distance
    - 1 more day
Make sure to return a new object to comply with the three rules of reducers.

5. A player may travel for any number of days, which costs 20 supplies for each day but adds 10 kilometers each day.
<br>
If the `action.type` is `'travel'`, assume that the `action.payload` contains the number of days to travel. Return a new state object with:
    - 20 less supplies for each day
    - 10 more kilometers of distance traveled for each day
    - The number of days added to days

6. If a player drives off-road or across deep rivers, the wagon may tip! You’ll need to spend some supplies and a day to fix it.
<br>
If the `action.type` is `'tippedWagon'`, return a new state object with:
    - 30 less supplies
    - The same distance
    - 1 more day

### Play

7. Let’s try our game out.
<br>
Start a game by calling the reducer with an `undefined` state and empty action object and storing the result in a new variable called `wagon` (Initialize it with `let`). Then print the `wagon` value to the console.
<br>
Our initial `wagon` state should look like this:

    ```js
    {
        supplies: 100,
        distance: 0,
        days: 0
    }
    ```

8. Our first day will be dedicated to travel.
    - Call the reducer with the `wagon` state and an action with `type: 'travel'` and `payload: 1`.
    - Store the returned new state back into `wagon`.
    - Print the new state.
    
    Our `wagon` state should look like this:

    ```js
    {
        supplies: 80,
        distance: 10,
        days: 1
    }
    ```

9. On the second day, we stop to gather supplies.
    - Call the reducer with the new `wagon` state and an action with `type: 'gather'` and no payload.
    - Store the new state back into `wagon`.
    - Print the new state.

    Our `wagon` state should look like this:

    ```js
    {
        supplies: 95,
        distance: 10,
        days: 2
    }
    ```

10. On the third day, we try to ford a rushing river…and our wagon tips over, spilling some supplies.
    - Call the reducer with the new `wagon` state and an action with `type: 'tippedWagon'`.
    - Store the new state back into `wagon`
    - Print the new state.

    Our `wagon` state should look like this:

    ```js
    {
        supplies: 65,
        distance: 10,
        days: 3
    }
    ```

11. On the following day, we set out for a long 3 days of travel.
- Call the reducer with the new `wagon` state and an action with `type: 'travel'` and a `payload: 3`.
- Store the new state back into `wagon`.
- Print the new state.

    Our final `wagon` state should look like this:

    ```js
    {
        supplies: 5,
        distance: 40,
        days: 6
    }
    ```

12. Currently, the player can continue traveling even if their supplies are negative! Fix this in the `'travel'` case.
<br>
If there are not sufficient supplies to travel the given number of days, return the current state.