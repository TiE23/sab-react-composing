import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { Stack } from "@bedrock-layout/stack";
import { Grid } from "@bedrock-layout/grid";
import styled from "styled-components";

import {
  Card,
  Top,
  Bottom,
  // Button,
  Description,
  Price,
  PlanName,
} from "./card-parts";

import { SPACING_MAP } from "./consts";
import { ShirtSizes } from "./types";


type PadBoxProps = {
  padding?: ShirtSizes | ShirtSizes[],
};

const PadBox = styled.div<PadBoxProps>`
  padding: ${({ padding = "lg" }) => {
    /**
     * Defining a typed empty array is necessary to satisfy TypeScript, though
     * there might be a more elegant way of doing it...
     */
    const paddingArray: ShirtSizes[] = [];
    return paddingArray
      .concat(padding)
      .map((padKey) => SPACING_MAP[padKey])
      .join(" ");
  }};
`;

function PricingPlan() {
  /**
   * We show two choices of padding our button. We can either put a padded box
   * inside our <Button> component (which is actually just a styled div) or we
   * can use styled(PadBox) and the attrs() function to give it PadBox
   * properties. It's a bit crazy. I'm sure I'll understand it better soon.
   */
  return (
    <Card>
      <PadBox padding="lg">
        <Top>
          <PlanName>Basic</PlanName>
          <Description>All the Basics for getting started</Description>
          <Price>$12/mo</Price>
          <InlineCluster gutter="none" justify="center">
            {/* <Button>
              <PadBox padding={["sm", "xl"]}>
                Buy Basic
              </PadBox>
            </Button> */}
            <PaddedButton>
              Buy Basic
            </PaddedButton>
          </InlineCluster>
        </Top>
      </PadBox>

      <Bottom>
        <PadBox padding="lg">
          <Stack gutter="md">
            <span>What's included</span>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Mollis pretium lorem primis senectus habitasse</li>
              <li>Phasellus ante pellentesque erat</li>
            </ul>
          </Stack>
        </PadBox>
      </Bottom>
    </Card>
  );
}

export default function PlanList() {
  return (
    <Grid gutter="xl" minItemWidth="16rem">
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
    </Grid>
  );
}

/**
 * Putting this at the bottom because it breaks syntax highlighting of lines
 * below it.
 * Also I'm not sure how to make it typed correctly... which I'd probably do
 * with "<PadBoxProps & { as: string }>"...
 */
export const PaddedButton = styled(PadBox).attrs(() => ({
  as: "button",
  padding: ["sm", "xl"],
}))`
  background: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
`;
