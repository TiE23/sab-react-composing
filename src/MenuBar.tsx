import styled, { css } from "styled-components";

import { InlineCluster } from "./InlineCluster";
import { Logo, MenuContainer, Button } from "./MenuParts";

import { StretchProps } from "./types";
import { STRETCH_MAP } from "./consts";

type InlineProps = {
  stretch?: StretchProps | number,
};

type ResponsiveProps = {
  switchAt?: string | number,
};

/**
 * css template strings are provided by Styled Components and like other strings
 * can take in a prop type
 */
const responsive = css<ResponsiveProps>`
  --switchAt: ${({ switchAt }) => {
    // Pay close attention to missing end ; by looking at CSS rules in browser!
    if (typeof switchAt === "string") return `${switchAt};`;  // <-- Here!
    if (typeof switchAt === "number") return `${switchAt}px}`;// Not required?
    return switchAt; // Undefined is OK.
  }}

  flex-wrap: wrap;

  > * {
    min-width: fit-content;
    /* "At 40 rems, we want this to switch to a stacking layout..."
     * We also take in the gutter variable (why we defined it in InlineCluster)
     * and subtract it from the full width. If 40rem is SMALLER than that full
     * width (minus the gutter), we get a NEGATIVE number. If 40rem is LARGER,
     * we get a POSITIVE number. It's kinda like creating a boolean in CSS.
     * Multiplying it by 999 we exaggerate the result to generate a very large
     * positive number or a very large negative number. So, what we're telling
     * CSS is we want our flex-basis to try and fit this very large (pos or neg)
     * number, which is silly. And a negative number doesn't work, so it floors
     * to 0. Meaning it's a way to force a flex item to jump to a new line the
     * moment that value (40rem in this case) cannot be provided.
     * When used in this context, were all children are given this, it basically
     * means that the moment your parent element is below that 40rem width, all
     * children will take up an entire 100% of the space, meaning they get their
     * own lines.
     * -> https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     * Flex-basis sets the initial main size of a flex item, but can be
     * overridden by competing in-line elements that have min-content
     * requirements. It's a "desired" size.
     */
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`;

/**
 * This is how we can extend existing Styled Components. In this case, we extend
 * our InlineCluster and then override flex-wrap with nowrap and then create an
 * advanced form of stretching using a pre-fabbed "Stretch Map".9
 * Also, that's an interesting location for the <InlineProps>...
 * Oh, and I used type intersection to support the Inline and Responsive props
 * input. It's really amazing to consider how Styled Components works. It looks
 * like responsive is passed in the same props the containing component (Inline)
 * is given, that way it can gain access to the prop switchAt.
 * */
const Inline = styled(InlineCluster) <InlineProps & ResponsiveProps>`
  flex-wrap: nowrap;

  ${({ stretch }) => {
    if (stretch == null) return "";
    if (typeof stretch === "number") {
      return `> :nth-child(${stretch + 1}) { flex: 1 }`;
    }
    return STRETCH_MAP[stretch];
  }}

  /*
   * If someone has added a switchAt prop, then the responsive css above is
   * added
   */
  ${({ switchAt }) => switchAt && responsive}
`;

export default function MenuBar() {
  return (
    <MenuContainer>
      <Inline stretch={1} align="center" switchAt="40rem">
        <div>
          <Logo />
        </div>
        <InlineCluster gutter="md" justify="center" align="center">
          <span>Product</span>
          <span>Features</span>
          <span>Marketplace</span>
          <span>Company</span>
        </InlineCluster>
        <Inline justify="end" align="center">
          <span>Sign in</span>
          <Button>Sign up</Button>
        </Inline>
      </Inline>
    </MenuContainer>
  );
}
