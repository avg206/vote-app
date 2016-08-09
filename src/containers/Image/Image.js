import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const loader = (
  <div className="ui active dimmer">
    <div className="ui loader" />
  </div>
);

const Image = ({ src, loading }) => (
  <div className="ui segment fluid rounded image image-segment">
    <img src={src} alt="" />
    { loading ? loader : null }
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  src: state.image.src,
  loading: state.loader.isLoading,
});

export default connect(mapStateToProps)(Image);
