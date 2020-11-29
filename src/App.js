import './App.css';
import Profile from './components/Profile/Profile';
import StatisticList from './components/StatisticsList/StatisticList';
import FriendList from './components/FriendsList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticList title="My Uploads" stats={statisticalData} />
      <FriendList items={friends} />
      <TransactionHistory props={transactions} />
    </div>
  );
}

export default App;
