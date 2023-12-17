import "./styles.scss";

import { MainNav } from "../MainNav/main_nav";
import { ThemeButton } from "../ThemeButton/theme_button";
import { Logo } from "../Logo/logo";

export const PageHeader = () => {
  return (
    <header className="page-header">
      <Logo />
      <MainNav />
      <ThemeButton />
    </header>
  );
};
