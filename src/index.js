import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import GovorkovJSApp from './App';


ReactDOM.render(<GovorkovJSApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


  // <React.StrictMode>
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>
  // </React.StrictMode>