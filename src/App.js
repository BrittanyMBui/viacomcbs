import React, {Component} from 'react';
import './App.css';
import Layout from './Layout/Layout';
import Content from './Content/Content';

function App() {

    return (
      <div className="App">
        <Layout>
            <Content/>
        </Layout>
      </div>
    );
}

export default App;