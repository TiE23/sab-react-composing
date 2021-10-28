import { Inline } from "@bedrock-layout/inline";
import { PadBox } from "@bedrock-layout/padbox";
import { Stack } from "@bedrock-layout/stack";

import { Input, SubLabel } from "./styles";

type ToggleGroupProps = {
  id: string,
  label: string,
  subLabel: string,
  checked?: boolean,
};

export const ToggleGroup = (
  { id, label, subLabel, checked = false }: ToggleGroupProps,
) => {
  return (
    <Inline
      as={PadBox}
      align="center"
      padding={["lg", "none"]}
      gutter="lg"
      stretch="start"
    >
      <Stack as="label" htmlFor={id} gutter="sm">
        {label}
        <SubLabel>{subLabel}</SubLabel>
      </Stack>
      <Input id={id} type="checkbox" checked={checked} />
    </Inline>
  );
};
