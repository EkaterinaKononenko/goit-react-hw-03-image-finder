import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={1700}
    height={1200}
    viewBox="0 0 1700 1200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="6" y="57" rx="2" ry="2" width="260" height="218" />
    <rect x="5" y="295" rx="2" ry="2" width="260" height="218" />
    <rect x="5" y="535" rx="2" ry="2" width="260" height="218" />
    <rect x="-35" y="777" rx="2" ry="2" width="300" height="260" />
    <rect x="287" y="58" rx="2" ry="2" width="260" height="218" />
    <rect x="286" y="298" rx="2" ry="2" width="260" height="218" />
    <rect x="286" y="535" rx="2" ry="2" width="260" height="218" />
    <rect x="286" y="776" rx="0" ry="0" width="260" height="218" />
    <rect x="565" y="777" rx="2" ry="2" width="260" height="218" />
    <rect x="566" y="538" rx="2" ry="2" width="260" height="218" />
    <rect x="566" y="299" rx="2" ry="2" width="260" height="218" />
    <rect x="567" y="56" rx="2" ry="2" width="260" height="218" />
    <rect x="296" y="786" rx="0" ry="0" width="260" height="218" />
  </ContentLoader>
);

export default MyLoader;
