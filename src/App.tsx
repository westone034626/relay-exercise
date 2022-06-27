import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import _ from "lodash";

const App = () => {
  const { todos } = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        todos {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `,
    {},
    {
      fetchPolicy: "network-only",
    }
  );

  const todoNodes = _.chain(todos.edges)
    .filter((edge) => Boolean(edge?.node))
    .map((edge) => edge?.node as { id: string; title: string })
    .value();
  return (
    <div>
      <h1>Todos</h1>
      <div style={{ flexDirection: "column" }}>
        {_.map(todoNodes, (node) => (
          <div key={node.id} style={{ flexDirection: "column" }}>
            <p>id: {node.id}</p>
            <p>title: {node.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
