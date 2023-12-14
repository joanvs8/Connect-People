import EventFeed from '../../components/eventFeed/EventFeed';
import User from '../../components/user/User';
import './account.scss';

function Account () {
  return (
    <section className="account">
      <div className="container">
        <h2 className='subtitle'>Account</h2>
        <div className='maincontainer'>
          <User />
          <EventFeed />
        </div>
        <button>ADD EVENT +</button>
      </div>
    </section>
  );
}

export default Account;
