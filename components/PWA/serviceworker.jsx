import React, { PureComponent } from 'react';

class ProgressiveWebComponent extends PureComponent {

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('../../static/js/serviceworker.js')
        .then(() => console.log('service worker registered.'))
        .catch(err => console.dir(err));
    }
  }

  render() {
    return null;
  }
}

export default ProgressiveWebComponent;