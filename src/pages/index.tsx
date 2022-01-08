import Dialog from "@/components/Dialog";
// import Drawer from "@/components/Drawer";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-primary text-3xl text-center">Hello From Next JS</h1>
      <div className="paper p-2 elevation-5 mb-2">hello</div>
      <div className="paper p-2 elevation-4 mb-2">hello</div>
      <div className="paper p-2 elevation-3 mb-2">hello</div>
      <div className="paper p-2 elevation-2 mb-2">hello</div>
      <div className="paper p-2 elevation-1">hello</div>
      {/* <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="w-36">
          <h1>Hello</h1>
        </div>
      </Drawer> */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="p-4 w-36">
          <h1>Hello</h1>
        </div>
      </Dialog>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        open
      </button>
    </div>
  );
};

export default Home;
