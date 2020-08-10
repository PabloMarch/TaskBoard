// import { ServerStyleSheet } from 'styled-components';

// App config constants
export const API_ENDPOINT = "https://env-develop.saturn.engineering/api/v2";

export const UPLOAD_HEADERS = {
  "accept": "application/json",
  "Content-Type": "multipart/form-data"
};

export const UPLOAD_QUERY = {
  url: "/test-notes/photo",
  baseURL: API_ENDPOINT,
  method: "post",
  headers: UPLOAD_HEADERS
};

// build server side styles
// export const buildSSRStyles = (callback) => {
//   const sheet = new ServerStyleSheet();
//   const page = callback((App) => (props) =>
//     sheet.collectStyles(<App {...props} />),
//   );
//   const styleTags = sheet.getStyleElement();
//   return { ...page, styleTags };
// };