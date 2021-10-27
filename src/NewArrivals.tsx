import { Grid } from "@bedrock-layout/grid";
import styled, { css } from "styled-components";

import shirt from "./images/shirt.jpg";
import { Details } from "./new-arrival-parts";


type FrameProps = {
  ratio?: [number, number],
};

/**
 * Use <Frame style={{height: 400, width: 300}}> to skip using the ratio.
 */
const ratioStyles = css`
  aspect-ratio: var(--n) / var(--d);
  @supports not (aspect-ratio: 1/1) {
    padding-bottom: calc(var(--d) / var(--n) * 100%);
  }
`;

/**
 * Safari (MacOS and iOS) support for aspect-ratio was only very recently added.
 * n = numerator; d = denominator (n/d)
 * (at)supports is a "feature query"
 * The padding-bottom hack is an interesting trick that's been around for over
 * a decade. For whatever reason, the padding-bottom, when expressed as a
 * percentage, is calculated as a percentage of the WIDTH of the element.
 * So, if you want a 300px wide by 400px tall image, you'd write [3, 4].
 * If the width is 300px, then 300 * (4/3) is 400. That way we pad the vertical
 * size of the element by 400px.
 * Well, since we're using rems to determine the width of our images with <Grid>,
 * it just makes sure that the height becomes the correct amount, and the
 * <Grid> handles the width (as a responsive organizing layout).
 */
const Frame = styled.div<FrameProps>`
  position: relative;

  --n: ${({ ratio }) => (ratio ? ratio[0] : 1)};
  --d: ${({ ratio }) => (ratio ? ratio[1] : 1)};

  ${({ ratio }) => ratio && ratioStyles}

  > * {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;

    /* It'll cover the entire area, even if that means cutting off some edges. */
    object-fit: cover;
  }
`;

function NewArrivals() {
  return (
    <div>
      <Frame >
        <img src={shirt} alt="" />
      </Frame>
      <Details>Ella Blouse - $35.99</Details>
    </div>
  );
}

export default function NewArrivalList() {
  return (
    <Grid gutter="xl" minItemWidth="18rem">
      <NewArrivals />
      <NewArrivals />
      <NewArrivals />
      <NewArrivals />
    </Grid>
  );
}
