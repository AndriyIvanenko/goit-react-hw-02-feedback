import styled from 'styled-components';

export const StatsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const StatsItemName = styled.span`
  display: inline-block;
  width: 90px;
`;
