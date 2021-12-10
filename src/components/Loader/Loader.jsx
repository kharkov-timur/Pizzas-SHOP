import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="33" y="284" rx="10" ry="10" width="197" height="19" />
    <rect x="8" y="318" rx="10" ry="10" width="259" height="78" />
    <rect x="8" y="417" rx="10" ry="10" width="96" height="22" />
    <circle cx="131" cy="140" r="130" />
    <rect x="150" y="411" rx="19" ry="19" width="117" height="38" />
  </ContentLoader>
);

export default Loader;
