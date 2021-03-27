import styled from "@emotion/styled";
import React, { FC, forwardRef, Ref } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

import { InfoBox, Section } from "../common";
import { colors, skills } from "../constants";

const SkillBody = styled.div``;

const SkillSection = styled(Section)`
  margin: auto;
`;

const SkillGroupSection = styled(Section)`
  font-family: Roboto Mono;
  width: 100%;
  max-width: 1575px;
  margin: auto;
  padding-bottom: 0px;
`;

const StyledReactTable = styled(ReactTable)``;

type SkillScoringProps = {
  rating: number;
};

const SkillScoring: FC<SkillScoringProps> = (props) => {
  return (
    <div style={{ width: "100%", textAlign: "right" }}>
      <Rating
        initialRating={props.rating}
        readonly
        quiet
        fullSymbol={
          <FaStar style={{ color: colors.highlight, margin: "5px" }} />
        }
        emptySymbol={
          <FaStar style={{ color: colors.secondary, margin: "5px" }} />
        }
      />
    </div>
  );
};

type SkillsProps = {
  sectionId: string;
};

export const Skills = forwardRef(
  (props: SkillsProps, ref: Ref<HTMLDivElement>) => {
    return (
      <SkillBody ref={ref}>
        <SkillSection sectionId={props.sectionId} header={skills.header}>
          <InfoBox>{skills.summary}</InfoBox>
          {Object.entries(skills.ratings).map(([group, scores]) => {
            return (
              <SkillGroupSection header={group}>
                <StyledReactTable
                  TheadComponent={() => <></>}
                  TrGroupComponent={(props) => (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      {props.children}
                    </div>
                  )}
                  style={{ border: "none" }}
                  defaultPageSize={Object.entries(scores).length}
                  sortable={false}
                  showPagination={false}
                  data={Object.entries(scores).map(([name, rating]) => {
                    return {
                      name: name,
                      rating: rating,
                    };
                  })}
                  columns={[
                    {
                      accessor: "name",
                      Cell: (props) => (
                        <div style={{ userSelect: "all" }}>{props.value}</div>
                      ),
                    },
                    {
                      accessor: "rating",
                      Cell: (props) => <SkillScoring rating={props.value} />,
                    },
                  ]}
                />
              </SkillGroupSection>
            );
          })}
        </SkillSection>
      </SkillBody>
    );
  }
);
