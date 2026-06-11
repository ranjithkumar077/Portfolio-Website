import { useState } from 'react';

export default function LoadingScreen({ loading }) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className={`loading-screen ${loading ? '' : 'hidden'}`}>
      {/* Premium dark aurora background elements */}
      <div className="loading-bg-orbs">
        <div className="loading-orb loading-orb-1" />
        <div className="loading-orb loading-orb-2" />
        <div className="loading-orb loading-orb-3" />
      </div>
      <div className="loading-grid" />

      {/* Loading content */}
      <div className="loading-content-wrap">
        <div className="loading-profile-ring">
          {!imgErr ? (
            <img
              src="/profile.jpg"
              alt="B. Ranjith Kumar"
              onError={() => setImgErr(true)}
            />
          ) : (
            <div className="loading-profile-ring-inner" style={{ fontSize: '1.25rem' }}>RANJITH KUMAR</div>
          )}
        </div>
        <div className="loading-name">B. Ranjith Kumar</div>
        <div className="loading-role">AI Engineer · Data Science</div>
        <div className="loading-bar-wrap">
          <div className="loading-bar" />
        </div>
      </div>
    </div>
  );
}

