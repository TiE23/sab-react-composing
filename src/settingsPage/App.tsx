import { Inline } from "@bedrock-layout/inline";
import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";

import { Logo } from "./Logo";

export default function App() {
  return (
    <div className="App">
      {/* Stetching the nav ul with stretch={1}. */}
      <MenuBar>
        <Logo size="2.5rem" />
        <nav>
          <Inline as="ul" gutter="sm">
            <MenuItem active>Dashboard</MenuItem>
            <MenuItem>Job</MenuItem>
            <MenuItem>AppMenuItemcants</MenuItem>
            <MenuItem>Company</MenuItem>
          </Inline>
        </nav>
        <SearchInput placeholder="Search" />
        <Logo size="1.5rem" square />
        <Logo size="2rem" />
      </MenuBar>
      <header>
        <h1>Settings</h1>
      </header>
    </div>
  );
}

/**
 * Putting this at the end of the file because it breaks syntax highlighting.
 * Attrs are good for Components where you have props that you don't want to
 * change. It also doesn't pollute your mark-up with tons of prop delcarations.
 * Now, attrs() can be dynamic, too. So... it's good for stuff you don't want
 * to change, but it also is the method you'll want to use for styled-components
 * that have a lot of dynamic changes because it won't generate new CSS classes.
 * See my comments in react-with-typescript's trello-clone/src/styles.ts on that
 * subjet.
 */
const MenuBar = styled(Inline).attrs(() => ({
  as: PadBox,
  padding: ["md", "xl"],
  stretch: 1,
  gutter: "lg",
  align: "center",
}))`
  background: black;
  color: white;
  border-block-end: 1px solid #303030;
`;

type MenuItemProps = {
  active?: boolean,
};

/**
 * The Active state should probably be handled in some nice way. Author doesn't
 * go into how to do that.
 */
const MenuItem = styled(PadBox).attrs(() => ({
  as: "li",
  padding: ["sm", "md"],
}))<MenuItemProps>`
  background: ${({ active = false }) => active ? "#303030" : "transparent"};
  border-radius: 0.25rem;
`;

const SearchInput = styled(PadBox).attrs(() => ({
  as: "input",
  padding: ["sm", "lg"],
}))`
  border-radius: 0.25rem;
  background: #303030;
  border: none;
  color: white;
`;