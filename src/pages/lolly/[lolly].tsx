import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { withSSRContext } from "aws-amplify";

import type { Lolly as LollyType } from "../../API";
import { listLollies, getLolly } from "../../graphql/queries";
import LollySVG from "../../components/Lolly-SVG";
import MeltedSVG from "../../components/Melted-SVG";

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: listLollies });
  const paths = data.listLollies.items.map((lolly: LollyType) => ({
    params: { lolly: lolly.lollyPath },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: getLolly,
    variables: {
      lollyPath: params!.lolly,
    },
  });

  return {
    props: {
      lolly: data.getLolly,
    },
  };
};

const Lolly: NextPage<{ lolly: LollyType | null }> = ({ lolly }) => {
  const [origin, setOrigin] = useState("");
  const { isFallback } = useRouter();

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  if (!isFallback && lolly) {
    return (
      <div className="lolly">
        <div className="giftLolly">
          <style global jsx>{`
            .lollyTop {
              fill: ${lolly.flavourTop};
            }
            .lollyMiddle {
              fill: ${lolly.flavourMiddle};
            }
            .lollyBottom {
              fill: ${lolly.flavourBottom};
            }
          `}</style>
          <LollySVG />
        </div>
        <div className="info">
          <p className="share">Enjoy your Lolly! Share it with this link:</p>
          <pre>{origin + `/lolly/${lolly.lollyPath}`}</pre>
          <p />
          <div className="details">
            <p id="recipient" className="recipient">
              {lolly.recipientName ?? ""}
            </p>
            <div id="message" className="message">
              {lolly.message ?? ""}
            </div>
            <p id="from" className="from">
              — {lolly.sendersName ?? ""}
            </p>
          </div>
          <p className="bytheway">
            {lolly.sendersName} made this virtual lollipop for you. You can{" "}
            <Link href="/create">make your own</Link> to send to a friend who
            deserve some sugary treat which won&apos;t rot their teeth...
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h2>Ummm. We don&#39;t know. Maybe it melted?</h2>
        <div className="gone">
          <MeltedSVG />
        </div>
        <p>
          <Link href="/create">
            <a className="btn">Make a new lollipop to send to a friend</a>
          </Link>
        </p>
      </>
    );
  }
};

export default Lolly;
