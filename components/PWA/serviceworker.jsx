import React, { PureComponent } from 'react';

class ProgressiveWebComponent extends PureComponent {

  componentDidMount() {
    
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('../../static/js/serviceworker.js')
        .then(() => console.log('service worker registered.'))
        .catch(err => console.dir(err));
    }

    // if (workbox) {
    //   console.log(`Yay! Workbox is loaded 🎉`);
    //   console.log(workbox);
    // } else {
    //   console.log(`Boo! Workbox didn't load 😬`);
    // }   
    
  }

  render() {
    return null;
  }
}

export default ProgressiveWebComponent;