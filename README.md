# Test Task

This is a test task to implement tweet cards with interactivity on button click.

## Card Appearance

The tweet card has two states: Follow and Following.

## Evaluation Criteria

- The layout should be fixed in pixels, semantic, and valid.
- There should be no errors in the browser console.
- The implementation can be done in native JS using bundlers or in React.
- The interactivity should work according to the technical requirements.
- The code should be well-formatted and without comments.
- The repository should have a descriptive `README.md` file.

## Technical Requirements

1. Implement tweet cards based on the provided design.
2. When the "Follow" button is clicked, the text should change to "Following". The button color should also change. Your follower count should be added to the total count. The initial count is 100,500, and upon button click, it should become 100,501.
3. The final state should persist even if the page is refreshed. For example, if you click the button and refresh the page, the button should still be in the "Following" state with the corresponding color, and the follower count should not revert to the initial value.
4. Clicking the button again should revert the text and color to the initial state. The follower count should also decrease by 1 (e.g., 100,500).
5. The value 100,500 should be declared as a single variable in the code (e.g., `const followerCount = 100500`). In the UI, it should be displayed with a comma (e.g., 100,500).
6. Create your own personal backend using a UI service like mockapi.io. Create a "users" resource and define the user object as described below.

## User

Create users in Mockapi with the following fields: id, user, tweets, followers, avatar (see screenshot below).
The avatar images should have separate URLs specified in the "avatar" property. You can choose the images yourself.
There should be at least 12 users in the database with different values (at your discretion). Implement pagination, displaying 3 tweets per page, and load the rest when the "Load More" button is clicked.
The rest of the requirements are similar to the previously described technical task.

## Follow and Following

Design: [Figma Mockup](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1)

Optional Task:

Implement routing using React Router.

The application should have the following routes:

- `'/'`: Home component (homepage). Styling and layout are up to you.
- `'/tweets'`: Tweets component, displaying the tweet cards. On the Tweets page, there should be a "Back" button that leads back to the home page.

Bonus Task:

Implement filtering. This should be a dropdown with 3 options (styling is up to you): show all, follow, followings.

- show all: display all tweets.
- follow: display tweets with the follow state.
- followings: display tweets with the following state.
