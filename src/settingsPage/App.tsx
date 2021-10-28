import { PropsWithChildren } from "react";

import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";
import { Columns, Column } from "@bedrock-layout/columns";

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
              <PadBox as="section" padding="lg">
                <Stack gutter="lg">

                  <Stack as="header" gutter="md">
                    <h2>Profile</h2>
                    <SubLabel>
                      This information will be displayed publicly so be careful what yuo choose.
                    </SubLabel>
                  </Stack>

                  <Split gutter="lg" fraction="auto-end">
                    <Stack gutter="lg">
                      <InputGroup label="User Name">
                        <Input />
                      </InputGroup>
                      <InputGroup label="About">
                        <Input as="textarea" />
                        <SubLabel>
                          Brief description for your profile. URLs are hyperlinked.
                        </SubLabel>
                      </InputGroup>
                    </Stack>
                    <label>
                      Photo
                      <Logo inverse size="10rem" />
                    </label>
                  </Split>

                  <Columns gutter="lg" columns={2}>
                    <InputGroup label="First Name">
                      <Input />
                    </InputGroup>
                    <InputGroup label="Last Name">
                      <Input />
                    </InputGroup>
                    <Column span={2}>
                      <InputGroup label="URL">
                        <Input />
                      </InputGroup>
                    </Column>
                    <InputGroup label="Company">
                      <Input />
                    </InputGroup>
                  </Columns>

                </Stack>
              </PadBox>

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

const SubLabel = styled.span`
  color: grey;
`;

/**
 * Pretty cool that we can also apply this to textarea as well just by using
 * as="textarea".
 */
const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid lightgrey;
  color: #303030;
`;

type InputGroupProps = {
  label: string,
};
const InputGroup = ({ label, children }: PropsWithChildren<InputGroupProps>) => {
  return (
    <Stack as="label" gutter="sm">
      {label}
      {children}
    </Stack>
  )
};


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
