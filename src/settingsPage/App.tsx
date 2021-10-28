import { Inline } from "@bedrock-layout/inline";
import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";

const MenuBar = styled(Inline)`
  background: black;
  color: white;
  border-block-end: 1px solid #303030;
`;

export default function App() {
  return (
    <div>
      {/* Stetching the nav ul with stretch={1}. */}
      <MenuBar
        as={PadBox}
        padding={["md", "xl"]}
        gutter="lg"
        align="center"
        stretch={1}
      >
        <div>Logo</div>
        <nav>
          <Inline as="ul" gutter="sm">
            <li>Dashboard</li>
            <li>Job</li>
            <li>Applicants</li>
            <li>Company</li>
          </Inline>
        </nav>
        <input placeholder="Search" />
        <div>icon</div>
        <div>profile</div>
      </MenuBar>
    </div>
  );
}
