import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

import { Menu } from "./Menu";

export default function App() {
  return (
    <div>
      <Menu />
      <ContentArea>
        <SettingsHeader>
          <h1>Settings</h1>
        </SettingsHeader>
        <SettingsPane>
          <nav>
            <ul>
              <li>Profile</li>
              <li>Account</li>
              <li>Password</li>
              <li>Notifications</li>
              <li>Billing</li>
              <li>Integration</li>
            </ul>
          </nav>
          <div>Placeholder for right hand side</div>
        </SettingsPane>
      </ContentArea>
    </div>
  );
}

const ContentArea = styled(PadBox).attrs(() => ({
  padding: "xl",
}))`
  /**
   * Learn about gradients here: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient
   */
  background-image: linear-gradient(to bottom, black 14rem, whitesmoke 14rem);
`;

const SettingsHeader = styled.header`
  color: white;
`;

const SettingsPane = styled.main`
  background: white;
  border-radius: 0.5rem;
`;
