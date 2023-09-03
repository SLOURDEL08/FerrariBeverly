import React from 'react';

function DiscoverBtn({ customClassName }) {
  return (
    <div className={`discoverbtn ${customClassName}`}>
      <span>DISCOVER MORE</span>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6981 20.9748C24.8223 20.4271 24.7326 19.827 24.404 19.3314C24.2884 19.157 24.1517 19.0082 24.0001 18.8862L18.1016 13.3496L21.2905 20.5609L18.1666 27.5996L24.0524 22.0749C24.182 21.9622 24.2997 21.829 24.401 21.676C24.5455 21.4581 24.6438 21.2199 24.6981 20.9748Z" fill="currentcolor"></path><circle xmlns="http://www.w3.org/2000/svg" opacity="0.2" cx="20" cy="20" r="18" transform="rotate(-90 20 20)" stroke="currentcolor" stroke-width="2"></circle></svg>

    </div>
  );
}

export default DiscoverBtn;