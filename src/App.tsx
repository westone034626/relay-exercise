import React from 'react';
import { useLazyLoadQuery, graphql } from 'react-relay';

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
      fetchPolicy: 'network-only',
    }
  );

  return (
    <div>
      <h1>Todos</h1>
      <div style={{ flexDirection: 'column' }}>
        {todos.edges.map(({ node }) => (
          <div key={node.id} style={{ flexDirection: 'column' }}>
            <p>id: {node.id}</p>
            <p>title: {node.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
