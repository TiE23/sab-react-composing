import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import { Stack } from "@bedrock-layout/stack";
import { Inline } from "@bedrock-layout/inline";

import { Logo } from "./Logo";

export const SidePanel = () => {
  return (
    <PadBox as="nav" padding={["lg", "none"]}>
      <Stack as="ul" gutter="xs">
        <li>
          <SideMenuItem active>
            <Logo square inverse size="1rem" />
            Profile
          </SideMenuItem>
        </li>
        <li>
          <SideMenuItem>
            <Logo square inverse size="1rem" />
            Account
          </SideMenuItem>
        </li>
        <li>
          <SideMenuItem>
            <Logo inverse size="1rem" />
            Password
          </SideMenuItem>
        </li>
        <li>
          <SideMenuItem>
            <Logo inverse size="1rem" />
            Notifications
          </SideMenuItem>
        </li>
        <li>
          <SideMenuItem>
            <Logo square inverse size="1rem" />
            Billing
          </SideMenuItem>
        </li>
        <li>
          <SideMenuItem>
            <Logo inverse size="1rem" />
            Integration
          </SideMenuItem>
        </li>
      </Stack>
    </PadBox>
  );
}

type SideMenuItemProps = {
  active?: boolean,
}
const SideMenuItem = styled(Inline).attrs(() => ({
  as: PadBox,
  gutter: "lg",
  padding: ["md", "lg"],
  align: "center",
})) <SideMenuItemProps>`
  border-inline-start: 0.25rem solid transparent; /* Starts with no color */
  ${({ active = false }) => active && `
    border-inline-start-color: grey;
    background: gainsboro;
  `}
`;