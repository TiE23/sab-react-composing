import { Attribution } from "./testimonial-parts";

import styled from "styled-components";

type CenterProps = {
  maxWidth?: string,
  centerText?: boolean,
  centerChildren?: boolean,
};

/**
 * "Wait a second, we just spent all this time enforcing 'encapsulated CSS' and
 * using these margin-inline properties goes against the rule of 'Do not set your
 * own positioning!'."
 *
 * Also, we're using margin-inline-____ instead of the usual margin because this
 * can create problems where the shorthand is potentially overriding the margin
 * a parent container is trying to set.
 *
 * We're using content-box as well, because it lets our max-inline-size to affect
 * the CONTENT only. And then the margin will be set to that box as well.
 * This is how we create a component that automatically centers itself.
 *
 * With the margins set to "auto" we let the browser to decide the margin. If
 * the parent container's width is less than the max-inline-size there is no
 * excess space for margin, and therefore nothing happens. When the parent
 * container's width is greater than the max-inline-size, the browser will evenly
 * distribute the excess space on both sides, in the inline direction, as margin.
 * This will cause the Center primitive, as well the child it is wrapping, to be
 * centered in the inline direction.
 *
 * And this all works in whatever display mode we're using: flex, grid, or flow.
 */
const Center = styled.div<CenterProps>`
  box-sizing: content-box; /* Not the better border-box! */
  margin-inline-start: auto;
  margin-inline-end: auto;

  /* Undefined is OK, as it'll be ignored. */
  max-inline-size: ${({ maxWidth }) => maxWidth};

  /* This makes the text within centered. */
  ${({ centerText }) => centerText && "text-align: center;"}

  /* This makes the children within centered. */
  ${({ centerChildren }) => centerChildren && `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export default function Testimonial() {
  return (
    <Center maxWidth="60ch">
      <h2>Home4Hire</h2>
      <p>
        "Lorem ipsum dolor sit amet, nibh lorem convenire quo et. Usu ea libris
        omittantur. Dicta theophrastus ad mei. Dicat appetere at vis, qui ne
        scripta docendi."
      </p>
      <Attribution />
    </Center>
  );
}
