import styled from "@emotion/styled";
import React, { FC } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaMinusCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { colors, ProjectStatus } from "../constants";

const BadgeTypes = {
  [ProjectStatus.stable]: {
    color: colors.primary,
    backgroundColor: "rgba(0, 134, 11, 1)",
    label: "stable",
    icon: <FaCheckCircle style={{ marginRight: "5px" }} />,
  },
  [ProjectStatus.inProgress]: {
    color: colors.background,
    backgroundColor: "rgba(255, 230, 0, 1)",
    label: "in progress",
    icon: <FaExclamationCircle style={{ marginRight: "5px" }} />,
  },
  [ProjectStatus.notStarted]: {
    color: colors.primary,
    backgroundColor: "rgba(95, 0, 173, 1)",
    label: "being designed",
    icon: <FaMinusCircle style={{ marginRight: "5px" }} />,
  },
  [ProjectStatus.blocked]: {
    color: colors.primary,
    backgroundColor: "rgba(221, 18, 0, 1)",
    label: "blocked",
    icon: <FaTimesCircle style={{ marginRight: "5px" }} />,
  },
};

const BadgeCard = styled.div`
  height: 16px;
  max-width: fit-content;

  border-radius: 5px;
  padding: 4px 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  font-size: 12px;
  user-select: none;
`;

type BadgeProps = {
  status: ProjectStatus;
};

export const Badge: FC<BadgeProps> = ({ status }) => {
  const { color, backgroundColor, label, icon } = BadgeTypes[status];

  return (
    <BadgeCard style={{ color, backgroundColor }}>
      {icon}
      <span style={{ textTransform: "uppercase" }}>{label}</span>
    </BadgeCard>
  );
};
