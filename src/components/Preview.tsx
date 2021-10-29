import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { digestMessage } from "./createShareURL";

export const Preview = ({
  content,
  hash,
}: {
  content: string;
  hash: string;
}) => {
  const [OK, setOK] = useState(false);
  useEffect(() => {
    const check = async () => {
      let calculatedHash = await digestMessage(content);
      if (hash === calculatedHash) {
        setOK(true);
      }
    };
    check();
  }, [content, hash]);

  if (OK) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="markdown-body" id="preview">
          <Markdown>{content || ""}</Markdown>
        </div>
      </div>
    );
  }
  return <h1>Error: Invalid Contents</h1>;
};
