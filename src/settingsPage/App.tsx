import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";

import { Menu } from "./Menu";
import { SidePanel } from "./SidePanel";
import { ProfileSection } from "./ProfileSection";
import { SubLabel } from "./styles";
import { ToggleGroup } from "./ToggleGroup";

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
            <FormPanel>
              <ProfileSection />

              <PadBox as="section" padding="lg">
                <Stack gutter="lg">
                  <Stack as="header" gutter="md">
                    <h2>Privacy</h2>
                    <SubLabel>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </SubLabel>
                  </Stack>
                  <TogglePane>
                    <ToggleGroup
                      id="available"
                      label="Available for hire"
                      subLabel="Sit amet consectetur lorem ipsum dolor."
                      checked
                    />
                    <ToggleGroup
                      id="private"
                      label="Make account private"
                      subLabel="Sit amet consectetur lorem ipsum dolor."
                      checked
                    />
                    <ToggleGroup
                      id="comment"
                      label="Allow commenting"
                      subLabel="Sit amet consectetur lorem ipsum dolor."
                    />
                    <ToggleGroup
                      id="mentions"
                      label="Allow mentions"
                      subLabel="Sit amet consectetur lorem ipsum dolor."
                      checked
                    />
                  </TogglePane>
                </Stack>
              </PadBox>

              <div>
                <button>Cancel</button>
                <button>Save</button>
              </div>
            </FormPanel>
          </SettingsPane>
        </Center>
      </ContentArea>
    </div>
  );
}


const FormPanel = styled.div`
  border-inline-start: 1px solid lightgrey;

  /* Any element, that has a previous element (sibling), apply this. */
  > * + * {
    border-block-start: 1px solid lightgrey;
  }
`;

const TogglePane = styled.div`
  > * + * {
    border-block-start: 1px solid lightgrey;
  }
`;

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
