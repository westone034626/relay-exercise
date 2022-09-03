import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TodoEditorScreen from "./screens/TodoEditorScreen";
import TodoListScreen from "./screens/TodoListScreen";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter basename="/relay-exercise">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
          <Route path="/mutate" element={<TodoEditorScreen />} />
          <Route path="/todo-list" element={<TodoListScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// const App = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const [tempTodos, setTempTodos] = useState<string[]>([]);
//   const [activeModal, setActiveModal] = useState(true);

//   useEffect(() => {
//     function resizeHandler() {
//       setActiveModal(
//         window.innerHeight - (window.visualViewport?.height || 0) === 0
//       );
//     }
//     window.visualViewport?.addEventListener("resize", resizeHandler);
//     return () =>
//       window.visualViewport?.removeEventListener("resize", resizeHandler);
//   }, []);
//   return (
//     <div>
//       <div style={{ flexDirection: "column" }}>
//         {_.map(todoNodes, (node) => (
//           <div key={node.id} style={{ flexDirection: "column" }}>
//             <p>id: {node.id}</p>
//             <p>title: {node.title}</p>
//           </div>
//         ))}
//       </div>
//       {tempTodos.map((tempTodo, idx) => (
//         <div key={idx} style={{ flexDirection: "column" }}>
//           <p>id: {idx}</p>
//           <p>title: {tempTodo}</p>
//         </div>
//       ))}
//       {activeModal && (
//         <button
//           style={{
//             position: "fixed",
//             bottom: 50,
//             right: 50,
//           }}
//           onClick={() => setModalOpen((prev) => !prev)}
//         >
//           Add To do
//         </button>
//       )}
//       {modalOpen && (
//         <EditorModal
//           style={{
//             top: 24,
//             bottom: 24,
//             left: 24,
//             right: 24,
//             backgroundColor: "whitesmoke",
//           }}
//           onClose={() => setModalOpen((prev) => !prev)}
//           onSave={(todo) => setTempTodos((prev) => [...prev, todo])}
//         />
//       )}
//     </div>
//   );
// };

export default App;
