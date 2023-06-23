import type { NextPage } from "next";
import Link from "next/link";

import LollySVG from "../components/Lolly-SVG";

const Home: NextPage = () => {
  return (
    <>
      <div className="thumbs">
        <div className="lolly example example-red">
          <LollySVG />
        </div>
        <div className="lolly example example-tropical">
          <LollySVG />
        </div>
        <div className="lolly example example-green">
          <LollySVG />
        </div>
        <div className="lolly example example-mixed">
          <LollySVG />
        </div>
        <div className="lolly example example-french">
          <LollySVG />
        </div>
      </div>

      <Link href="/create">
        <a className="btn">Make a new lolly to send to a friend</a>
      </Link>
    </>
  );
};

export default Home;
