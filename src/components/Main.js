import React from 'react';
import './Main.css';
import Empty from './Empty';
import ChatWindow from '../containers/ChatWindow';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => (
    activeUserId === null ?
    <Empty user={user} activeUserId={activeUserId} /> :
    <ChatWindow activeUserId={activeUserId} />
  );

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
