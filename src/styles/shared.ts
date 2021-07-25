import { css } from 'styled-components';

const maxLengthParagraph = (length: number) => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${length}px;
`;

export { maxLengthParagraph };
