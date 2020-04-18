import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Router from '../../Router';
export default function Home() {

  return (
    <div className="home_wrapper">
        <Sidebar/>
        <Router/>
    </div>
  );
}
