import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-primary text-3xl text-center">Hello From Next JS</h1>
      <div className="paper p-2 elevation-5 mb-2">hello</div>
      <div className="paper p-2 elevation-4 mb-2">hello</div>
      <div className="paper p-2 elevation-3 mb-2">hello</div>
      <div className="paper p-2 elevation-2 mb-2">hello</div>
      <div className="paper p-2 elevation-1">hello</div>
    </div>
  );
};

export default Home;
