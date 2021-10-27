import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";

export const Details = (props) => (
  <PadBox padding="lg">
    <Center centerText>{props.children}</Center>
  </PadBox>
);
