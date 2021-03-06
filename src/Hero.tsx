import { useRef } from "react";
import { useMedia } from "react-use";
import { Cover } from "@bedrock-layout/cover";
import { Frame } from "@bedrock-layout/frame";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";
import { Inline } from "@bedrock-layout/inline";
import { InlineCluster } from "@bedrock-layout/inline-cluster";

import dataImage from "./images/data.jpg";

const NARROW_SPLIT_SIZE = "60rem";
const NARROW_NAV_SIZE = "40rem";

export default function Hero() {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuHeight = menuRef.current?.getBoundingClientRect().height ?? 48;
  const isCoverNarrow = useMedia(`(max-width:${NARROW_SPLIT_SIZE})`);

  return (
    <Stack as="header" gutter="sm">
      <Inline
        gutter="lg"
        align="center"
        stretch={1}
        ref={menuRef}
        switchAt={NARROW_NAV_SIZE}
      >
        <h1>Arrow Data</h1>

        {/* It's great to support accessibility with elements like nav.
            Don't just slap everything into divs. */}
        <nav>
          <InlineCluster as="ul" gutter="xl" justify="center">
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Docs</li>
            <li>More</li>
          </InlineCluster>
        </nav>

        <InlineCluster gutter="lg" align="center" justify="end">
          <a href="/#">Sign in</a>
          <button>Sign up</button>
        </InlineCluster>
      </Inline>

      <Split gutter="sm" switchAt={NARROW_SPLIT_SIZE}>
        {/* 0.25rem is the navbar's gutter */}
        <Cover gutter="none" minHeight={`calc(100vh - ${menuHeight}px - 0.25rem)`}>
          <Stack as="section" gutter="xl">
            {isCoverNarrow && (
              <Frame position="70% 50%" ratio={[3, 1]}>
                <img src={dataImage} alt="computer with graphs" />
              </Frame>
            )}
            <h2>Data Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc vel
              risus commodo viverra maecenas. Magna sit amet purus gravida quis
              blandit turpis cursus.
            </p>
            <InlineCluster gutter="lg">
              <button>Get Started</button>
              <button>Live Demo</button>
            </InlineCluster>
          </Stack>
        </Cover>
        {!isCoverNarrow && (
          <Frame position="70% 50%">
            <img src={dataImage} alt="computer with graphs" />
          </Frame>
        )}
      </Split>
    </Stack>
  );
}
