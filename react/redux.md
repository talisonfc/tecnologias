# Redux

As the requirements for JavaScript sinple-page applications have become increasingle compiceted, **our code must manage state than ever before**. This state can include server response and cache data, as well as locally created data that has not yet been persisted to the server. UI state is also increasingle in complexity, as we need to manage active routes, select tabs, spinners, pagnation controls, and so on.

Manage this ever change is hard. If a model can update another model, then a view can update a model, which update another model, and this, in turn, migth couse another view to update. At some point, you no longer understand what happens in your application as you have lost control over the when, why, and how of ist state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features.

As if this weren't bad enough, consider the new requirements become common in front-end product development. As developers, we are expected to handle optimistic updates, server-side rendering, fetch data before peforme transation, and so on. We find ourselves trying to manage a complexity that we never had to deal with before, and we inevitably ask the question: **is it time to give up?** The answer is no.

This complexity is difficult to handle as we are mixing two concepts that are very hard for the human mind to reason about: mutation and asynchronicity. I call them Mentos and Coke. Both can be great in separation, but together thet create a mess. Livraries like React attempt to solve this problem in the view layer by **removing both asynchrone and direct DOM manupulaiton**. However, managing the state of your data is left up to you. This is where Redux enters.

Following in the steps of Flux, CQRS and Event Sourcing, **Reduz attempts to make state mutations predictable** by imposing certaing restrictions on how when updates can happen. These restrictions are reflected in the thre principles of Redux.

## Core concepts

Consider that we can a structure like this to keep all information about todo app. This structure keep the state of the application.

	{
	  todos: [{
	    text: 'Eat food',
	    completed: true
	  }, {
	    text: 'Exercise',
	    completed: false
	  }],
	  visibilityFilter: 'SHOW_COMPLETED'
	}
	
To change something in the state, you need to **dispatch** an **action**. An action is a plain JavaScript object, that discribe what happened.

Some examples about actions:

	{type: 'ADD_TODO', text: 'Go to swimming pool'}
	{type: 'TOGGLE_TODO', index: 1}
	{type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'}
	
Enforcing that every change is desceibed as an action lets us have a clear understanding of what's going on in the app. If something changed, we know why it changed. Actions are like breadcrumbs of what has happened. Finally, to tie state and actions together, we write a function called a **reducer**. Again, nothing magical about it - **it's just a function that takes state and action as arguments, and returns the next state of the app.** It would be hard to write such a function for a big app, so we write smaller function managing parts of the state.

## Tree principles
### Single source of the truth

**The state of your whole application is stored in an object tree within a single store**

### State is read-only

**The only way to change the state is to emit an action, an object describing what happend**

### Changes are made with pure functions

**To specify how the state tre is transformed by actions, you write pure reducers**

