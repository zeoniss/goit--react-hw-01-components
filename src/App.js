import React from "react";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendList";
import Transactions from "./components/Transactions/Transactions";

import statsData from "./data/statistics.json";
import userData from "./data/user.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics items={statsData} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};

export default App;
