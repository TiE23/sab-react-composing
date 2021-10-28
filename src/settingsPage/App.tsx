import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";

import { Menu } from "./Menu";
import { SidePanel } from "./SidePanel";

export default function App() {
  return (
    <div>
      <Menu />
      <ContentArea>
        {/* Keeps it from getting to crazy wide.
          * And combining with Stack we don't need a second component. */}
        <Center as={Stack} gutter="xl" maxWidth="85rem">
          <SettingsHeader>
            <h1>Settings</h1>
          </SettingsHeader>
          <SettingsPane as="main">
            <SidePanel />
            <div>Placeholder for right hand side</div>
          </SettingsPane>
        </Center>
      </ContentArea>
    </div>
  );
}

/**
 * Learn about gradients here: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient
 */
const ContentArea = styled(PadBox).attrs(() => ({
  padding: "xl",
}))`
  background-image: linear-gradient(to bottom, black 14rem, whitesmoke 14rem);
`;

const SettingsHeader = styled.header`
  color: white;
`;

/**
 * Cannot set `as: "main",` because Split becomes Stack when too narrow and
 * the author could not work around it. So, do it in the component itself up above!
 */
const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;
