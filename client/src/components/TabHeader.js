import React from 'react';
import '../css/TabHeader.css';

function TabHeader({activeTab, setActiveTab}) {

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    }
  
    return (
      <div className="tabs-container">
        <div className="tabs">
          <div className={activeTab === 'All' ? 'tab active-tab all-tab' : 'tab all-tab'} onClick={() => handleTabClick('All')}>
            <span>ALL</span>
          </div>
          <div className={activeTab === 'Upcoming' ? 'tab active-tab upcoming-tab' : 'tab upcoming-tab'} onClick={() => handleTabClick('Upcoming')}>
            <span>UPCOMING</span>
          </div>
          <div className={activeTab === 'Ongoing' ? 'tab active-tab ongoing-tab' : 'tab ongoing-tab'} onClick={() => handleTabClick('Ongoing')}>
            <span>ONGOING</span>
          </div>
          <div className={activeTab === 'Past' ? 'tab active-tab past-tab' : 'tab past-tab'} onClick={() => handleTabClick('Past')}>
            <span>PAST</span>
          </div>
        </div>
      </div>
    );
}

export default TabHeader;
