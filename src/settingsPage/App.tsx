import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";

import { Menu } from "./Menu";
import { SidePanel } from "./SidePanel";
import { Logo } from "./Logo";

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
              <section>
                <header>
                  <h2>Profile</h2>
                  <span>
                    This information will be displayed publicly so be careful what yuo choose.
                  </span>
                </header>
                <div>
                  <label>
                    User Name
                    <input />
                  </label>
                  <label>
                    About
                    <textarea />
                    <span>
                      Brief description for your profile. URLs are hyperlinked.
                    </span>
                  </label>
                  <label>
                    Photo
                    <Logo inverse size="10rem" />
                  </label>
                </div>
                <div>
                  <label>
                    First Name
                    <input />
                  </label>
                  <label>
                    Last Name
                    <input />
                  </label>
                  <label>
                    URL
                    <input />
                  </label>
                  <label>
                    Company
                    <input />
                  </label>
                </div>
              </section>

              <section>
                <h2>Privacy</h2>
              </section>

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
