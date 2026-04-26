import { useTheme } from "../context/ThemeContext";

const ThemedCard = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme.surface,
        color: theme.textPrimary,
        padding: "20px",
        borderRadius: "12px",
        border: `1px solid ${theme.border}`,
      }}
    >
      <h2>Updated Color Palette</h2>
      <p>This card adapts to the active theme.</p>
    </div>
  );
};

export default ThemedCard;
