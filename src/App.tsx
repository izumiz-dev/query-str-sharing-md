import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { MDEditor } from "./components/MDEditor";
import { Preview } from "./components/Preview";

require("github-markdown-css");

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const subRoot = "/query-str-sharing-md";

const App: React.FC = () => {
  const query = useQuery();
  const sharedContents = query.get("content") || "";
  const hash = query.get("hash") || "";

  return (
    <Switch>
      <Route exact path={subRoot}>
        <MDEditor />
      </Route>
      <Route path={subRoot + "/shared"}>
        <Preview content={sharedContents} hash={hash} />
      </Route>
    </Switch>
  );
};

export default App;
