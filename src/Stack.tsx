import styled from "styled-components";

type StackProps = {
  gutter?: string,
};

const Stack = styled.div<StackProps>`
  display: grid;
  gap: ${(props) => props?.gutter ?? "1rem"};
`;

export default function Subscribe() {
  return (
    <Stack gutter="2rem">
      <Stack gutter="0.5rem">
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing
          products.
        </p>
      </Stack>

      <Stack>
        <Stack gutter="0.25rem">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </Stack>

        <Stack gutter="0.25rem">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </Stack>

        <button>Subscribe</button>
      </Stack>
    </Stack>
  );
}
