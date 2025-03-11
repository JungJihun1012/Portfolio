import styled from "styled-components";
import { font } from "../../../shared/types/theme/Font";
import { color } from "../../../shared/types/theme/Color";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const Main = styled.main`
  width: 60%;
  margin: 0 auto;
  margin-top: 7rem;
  display: flex;
`;
export const Img = styled.img`
  flex: 1;
  height: 400px;
  border-radius: 10px;
  max-width: 300px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-left: 8em;
`;
export const Msg = styled.div`
  font-size: ${font.Title};
  font-weight: ${font.Weight};
  margin-bottom: 30px;
`;

export const StyledMsg = styled.div`
  font-size: ${font.Msg};
  color: ${color.grey};
`;