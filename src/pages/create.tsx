import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, FormEvent, ChangeEvent } from "react";
import { API } from "aws-amplify";
import { nanoid } from "nanoid";

import type { Lolly } from "../API";
import LollySVG from "../components/Lolly-SVG";
import { createLolly } from "../graphql/mutations";

const Create: NextPage = () => {
  const router = useRouter();

  const handleLollyColor = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const layer = event.target.getAttribute("data-section");

      document.querySelector<SVGElement>(layer!)!.style.fill =
        event.target.value;
    },
    []
  );

  const handleCreateLolly = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = new FormData(event.currentTarget);
      form.append("lollyPath", nanoid());

      try {
        const { data } = await (API.graphql({
          query: createLolly,
          variables: {
            input: {
              flavourTop: form.get("flavourTop"),
              flavourMiddle: form.get("flavourMiddle"),
              flavourBottom: form.get("flavourBottom"),
              recipientName: form.get("recipientName"),
              message: form.get("message"),
              sendersName: form.get("sendersName"),
              lollyPath: form.get("lollyPath"),
            },
          },
        }) as Promise<{ data: { createLolly: Lolly } }>);

        router.push(`/lolly/${data.createLolly.lollyPath}`);
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  );

  return (
    <form name="new-lolly" onSubmit={handleCreateLolly} autoComplete="off">
      <div className="lolly">
        <div className="giftLolly">
          <LollySVG />
        </div>
        <div className="flavours">
          <label htmlFor="flavourTop" className="pickerLabel">
            <input
              type="color"
              className="colourpicker"
              id="flavourTop"
              name="flavourTop"
              data-section=".lollyTop"
              defaultValue="#d52358"
              onChange={handleLollyColor}
            />
          </label>
          <label htmlFor="flavourMiddle" className="pickerLabel">
            <input
              type="color"
              className="colourpicker"
              id="flavourMiddle"
              name="flavourMiddle"
              data-section=".lollyMiddle"
              defaultValue="#e95946"
              onChange={handleLollyColor}
            />
          </label>
          <label htmlFor="flavourBottom" className="pickerLabel">
            <input
              type="color"
              className="colourpicker"
              id="flavourBottom"
              name="flavourBottom"
              data-section=".lollyBottom"
              defaultValue="#deaa43"
              onChange={handleLollyColor}
            />
          </label>
        </div>
        <div className="info">
          <div className="details">
            <p>
              <label htmlFor="recipientName">To</label>
              <input
                type="text"
                id="recipientName"
                name="recipientName"
                placeholder="A lolly for..."
              />
            </p>
            <div className="message">
              <label htmlFor="message">Say something nice</label>
              <textarea name="message" id="message" cols={30} rows={10} />
            </div>
            <p>
              <label htmlFor="sendersName">From</label>
              <input
                type="text"
                id="sendersName"
                name="sendersName"
                placeholder="from your friend..."
              />
            </p>
          </div>
          <button>Freeze this lolly and get a link</button>
        </div>
      </div>
    </form>
  );
};

export default Create;
