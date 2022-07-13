import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import CubeLit from "./CubeLit";
import CubeEmpty from "../components/CubeEmpty";

// import "./Inbox.sass";

// const client = new ApolloClient({
//   uri: "https://api.spacex.land/graphql/",
//   cache: new InMemoryCache(),
// });
const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/20019/mpotelegraph/v1.0.1",
  cache: new InMemoryCache(),
});

const Inbox = () => {
  const [telegraphs, setTelegraphs] = useState([]);
  const fetchTelegraphs = async () => {
    const { data } = await client.query({
      query: gql`
        {
          telegraphs(first: 5) {
            id
            name
            description
            image
            from
            to
          }
        }
      `,
    });
    // setTelegraphs(data.filter(tele => tele.from == "0x..."))
    setTelegraphs(data.telegraphs);
  };

  const slotCount = 12;
  const makeArray = (data) => {
    const arr = [];
    for (let i = 0; i < slotCount; i++) {
      if (i < telegraphs.length) {
        arr.push(<CubeLit key={i} />);
      } else {
        arr.push(<CubeEmpty key={i} />);
      }
    }
    return arr;
  };
  useEffect(() => {
    fetchTelegraphs();
  }, [telegraphs]);

  const slots = makeArray();
  console.log(slots);
  return (
    <div className="Inbox">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div className="inbox-row" key={`row${i}`}>
            {console.log(slots.slice(i * 3, (i + 1) * 3))}
            {slots.slice(i * 3, (i + 1) * 3)}
          </div>
        ))}
    </div>
  );
};

export default Inbox;
