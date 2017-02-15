## Note Lister

## Challenges

1. For every note, I should have a button that when clicked, deletes the note from the database on the API and removes it from the list.

2. When visiting '/notes/3' directly, the current note on my application level state is not getting updated...

This means that we will see 'Select a note to get started' and we cant' actually share this URL.

Fix this! When visiting '/notes/3' directly I should see that particular note detail.

Hints:

1. We can access dynamic portions of route params on the props of the component that was rendered. If we have a dynamic portion called ':id', our component will have 'props.params.id' equal to whatever that value is in the URL.
2. Our `mapStateToProps` takes in a second argument that will be all of the props that our component already has.
