import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";
import { Inline } from "@bedrock-layout/inline";
import { InlineCluster } from "@bedrock-layout/inline-cluster";

import dataImage from "./images/data.jpg";

export default function Hero() {
  return (
    <header>
      <div>
        <h1>Arrow Data</h1>

        {/* It's great to support accessibility with elements like nav.
            Don't just slap everything into divs. */}
        <nav>
          <ul>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Docs</li>
            <li>More</li>
          </ul>
        </nav>

        <div>
          <a href="/#">Sign in</a>
          <button>Sign up</button>
        </div>
      </div>

      <div>
        <section>
          <h2>Data Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc vel
            risus commodo viverra maecenas. Magna sit amet purus gravida quis
            blandit turpis cursus.
          </p>
          <div>
            <button>Get Started</button>
            <button>Live Demo</button>
          </div>
        </section>

        <img src={dataImage} alt="computer with graphs" />
      </div>
    </header>
  );
}
