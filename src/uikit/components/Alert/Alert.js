import React from "react";
import styled, { DefaultTheme } from "styled-components";
import CheckmarkCircleIcon from "../Svg/Icons/CheckmarkCircle";
import ErrorIcon from "../Svg/Icons/Error";
import BlockIcon from "../Svg/Icons/Block";
import InfoIcon from "../Svg/Icons/Info";
import { Text } from "../Text";
import { IconButton } from "../Button";
import { CloseIcon } from "../Svg";
import Flex from "../Box/Flex";
// import { AlertProps, variants } from "./types";

// interface ThemedIconLabel {
//   variant: AlertProps["variant"];
//   theme: DefaultTheme;
//   hasDescription: boolean;
// }

const getThemeColor = ({ theme, variant }) => {
  switch (variant) {
    case 'danger':
      return theme.colors.failure;
    case 'warning':
      return theme.colors.warning;
    case 'waring':
      return theme.colors.success;
    case 'success':
    default:
      return theme.colors.secondary;
  }
};

const getIcon = (variant) => {
  switch (variant) {
    case 'danger':
      return BlockIcon;
    case 'wanring':
      return ErrorIcon;
    case 'success':
      return CheckmarkCircleIcon;
    case 'info':
    default:
      return InfoIcon;
  }
};

const IconLabel = styled.div`
  background-color: ${getThemeColor};
  border-radius: 8px 0 0 8px;
  color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 12px;
`;

const withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
const Details = styled.div`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : "12px")};
  padding-top: 12px;
`;

const CloseHandler = styled.div`
  border-radius: 0 8px 8px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`;

const StyledAlert = styled(Flex)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 8px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`;

const Alert = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant);

  return (
    <StyledAlert>
      <IconLabel variant={variant} hasDescription={!!children}>
        <Icon color="white" width="24px" />
      </IconLabel>
      <Details hasHandler={!!onClick}>
        <Text bold>{title}</Text>
        {typeof children === "string" ? <Text as="p">{children}</Text> : children}
      </Details>
      {onClick && (
        <CloseHandler>
          <IconButton scale="sm" variant="text" onClick={onClick}>
            <CloseIcon width="24px" color="textSubtle" />
          </IconButton>
        </CloseHandler>
      )}
    </StyledAlert>
  );
};

export default Alert;
