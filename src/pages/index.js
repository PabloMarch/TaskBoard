import Layout from "../components/Layout";
import Board from "../components/Board";

const Index = ({ tasks }) => (
  <Layout>
    <Board data={tasks} />
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  let tasks = [];

  // TODO: sorry it was a long test so I decided to ommit "real" fetch
  if (req) {
    // const res = await axios(`${config.API_ENDPOINT}/test-notes/`);
    // tasks = res.data;
    // console.log(tasks);
    tasks = require("@/api").default; // res.json();
  }

  return {
    tasks
  };
};

export default Index;