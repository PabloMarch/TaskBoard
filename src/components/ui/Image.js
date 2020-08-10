const Image = ({ alt = "", src = "", ...rest }) => (
  <img alt={alt} src={src} {...rest} />
);

export default Image;