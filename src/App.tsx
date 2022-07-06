import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import _ from "lodash";
import { useEffect, useState } from "react";
import EditorModal from "./components/EditorModal";

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
  const [modalOpen, setModalOpen] = useState(false);

  const [tempTodos, setTempTodos] = useState<string[]>([]);
  const [activeModal, setActiveModal] = useState(true);

  useEffect(() => {
    function resizeHandler() {
      setActiveModal(
        window.innerHeight - (window.visualViewport?.height || 0) === 0
      );
    }
    window.visualViewport?.addEventListener("resize", resizeHandler);
    return () =>
      window.visualViewport?.removeEventListener("resize", resizeHandler);
  }, []);
  return (
    <div>
      <div style={{ flexDirection: "column" }}>
        {_.map(todoNodes, (node) => (
          <div key={node.id} style={{ flexDirection: "column" }}>
            <p>id: {node.id}</p>
            <p>title: {node.title}</p>
          </div>
        ))}
      </div>
      {tempTodos.map((tempTodo, idx) => (
        <div key={idx} style={{ flexDirection: "column" }}>
          <p>id: {idx}</p>
          <p>title: {tempTodo}</p>
        </div>
      ))}
      {activeModal && (
        <button
          style={{
            position: "fixed",
            bottom: 50,
            right: 50,
          }}
          onClick={() => setModalOpen((prev) => !prev)}
        >
          Add To do
        </button>
      )}
      {modalOpen && (
        <EditorModal
          style={{
            top: 24,
            bottom: 24,
            left: 24,
            right: 24,
            backgroundColor: "whitesmoke",
          }}
          onClose={() => setModalOpen((prev) => !prev)}
          onSave={(todo) => setTempTodos((prev) => [...prev, todo])}
        />
      )}
    </div>
  );
};

export default App;
