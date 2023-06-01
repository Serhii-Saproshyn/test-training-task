import React, { useEffect, useState } from "react";
import fetchUsers from "api/api";

import TweetsItem from "components/TweetsItem/TweetsItem";

const TweetsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUsers();
      setData(response.data);
    };

    fetchData();
  }, []);
  return (
    <ul>
      {data.map(({ id, user, tweets, followers, avatar }) => (
        <TweetsItem
          key={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};

export default TweetsList;
