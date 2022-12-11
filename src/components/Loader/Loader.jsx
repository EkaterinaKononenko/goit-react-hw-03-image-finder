import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={1300}
    height={900}
    viewBox="0 0 1300 900"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="6" y="77" rx="2" ry="2" width="138" height="120" />
    <rect x="168" y="77" rx="2" ry="2" width="138" height="120" />
    <rect x="327" y="78" rx="2" ry="2" width="138" height="120" />
    <rect x="6" y="219" rx="2" ry="2" width="138" height="120" />
    <rect x="168" y="217" rx="2" ry="2" width="138" height="120" />
    <rect x="327" y="214" rx="2" ry="2" width="138" height="120" />
    <rect x="6" y="355" rx="2" ry="2" width="138" height="120" />
    <rect x="168" y="357" rx="2" ry="2" width="138" height="120" />
    <rect x="327" y="355" rx="2" ry="2" width="138" height="120" />
    <rect x="7" y="496" rx="2" ry="2" width="138" height="120" />
    <rect x="167" y="496" rx="2" ry="2" width="138" height="120" />
    <rect x="326" y="497" rx="2" ry="2" width="138" height="120" />
  </ContentLoader>
);

export default MyLoader;
