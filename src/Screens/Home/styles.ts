import {
  responsiveWidth,
  responsiveHeight,
  responsiveCircle,
} from '@utils/responsive';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme: {colors}}) => colors.primary};
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: ${responsiveWidth(20)}px;
  color: ${({theme: {colors}}) => colors.white};
`;

export const LinkDocumentation = styled.TouchableOpacity`
  margin-top: ${responsiveHeight(20)}px;
  border-radius: ${responsiveCircle(8)}px;
  background-color: ${({theme: {colors}}) => colors.white};
  padding: ${responsiveHeight(16)}px ${responsiveWidth(24)}px;
`;

export const LinkDocumentationTitle = styled.Text``;
