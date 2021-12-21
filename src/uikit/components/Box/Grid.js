import styled from "styled-components";
import { grid, flexbox } from 'styled-system'
import Box from './Box'
// import { GridProps } from "./types";

const Grid = styled(Box)`
  display: grid;
  ${flexbox}
  ${grid}
`

export default  Grid