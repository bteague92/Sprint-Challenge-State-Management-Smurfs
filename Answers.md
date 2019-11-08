1. What problem does the context API help solve?

It helps avoid prop drilling by allowing you to pass props through one provider.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where all the state is held, the reducer is what sends changes to the store to change state, and actions are what triggers the reducer to make changes to the state in the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is held in the store and hold state that can be used in the entire app, component state is held in the component and can only be used in that component unless passed down by props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to run asyncronous code. It makes it to where functions can run along side each other until an end condition is met

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. Context API is cleaner but I really like having all of the state in one place.