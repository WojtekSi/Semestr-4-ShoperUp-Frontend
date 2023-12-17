import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import { PageHeader } from "../../components/PageHeader/page_header";
import "../../App.css";

export const Page = ({ label }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <PageHeader />
      <h1
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      >
        {label}
      </h1>
    </div>
  );
};
