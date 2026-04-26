import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemedCard from "./components/ThemedCard";

const Content = () => {
  const { toggleTheme, mode, theme } = useTheme();

  return (
    <div
      style={{
        background: theme.background,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <button onClick={toggleTheme}>
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </button>

      <div style={{ marginTop: "20px" }}>
        <ThemedCard />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
