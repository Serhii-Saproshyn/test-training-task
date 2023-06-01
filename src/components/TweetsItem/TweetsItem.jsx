const TweetsItem = ({ id, user, tweets, followers, avatar }) => {
  return (
    <li>
      <p>{user}</p>
      <img src={avatar} alt={user}></img>
    </li>
  );
};

export default TweetsItem;
