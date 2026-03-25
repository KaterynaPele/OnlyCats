import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Feed />
      </div>
    </div>
  );
}

export default App;