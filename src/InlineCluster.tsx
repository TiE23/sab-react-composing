import styled from "styled-components";
import { JustifyAlignProps, ShirtSizes } from "./types";
import { JUSTIFY_ALIGN_MAP, SPACING_MAP } from "./consts";

type InlineClusterProps = {
  gutter?: ShirtSizes,
  justify?: JustifyAlignProps,
  align?: JustifyAlignProps,
};

export const InlineCluster = styled.div<InlineClusterProps>`
  display: flex;
  flex-wrap: wrap;  /* If no space available on single line, wrap. */

  /* Author insists he'll explain later why we use --gutter this time. */
  --gutter: ${({ gutter = "lg" }) => SPACING_MAP[gutter]};
  gap: var(--gutter);

  justify-content: ${({ justify = "start" }) => JUSTIFY_ALIGN_MAP[justify]};
  align-items: ${({ align = "start" }) => JUSTIFY_ALIGN_MAP[align]};
`;