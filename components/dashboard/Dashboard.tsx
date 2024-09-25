"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { NextPage } from "next";
import SideNav from "./sideNav/SideNav";
import MainContent from "./main/MainContent";
import { Children, FC, ReactNode } from "react";
 type propTypes = {
    children:ReactNode,
 }

const Dashboard:FC<propTypes> = ({children}) => {
    return (
        <div css={p_comp}>
            <div css={side_nav}>
                <SideNav
                    bouquetName="Bouquet"
                    causeName="Cause"
                    streakName="Streak"
                />
            </div>
            <div css={main_nav}>
                <MainContent>
                    {children}
                </MainContent>
            </div>
        </div>
    );
};
export default Dashboard;

const p_comp = css`
    display: flex;
`;
const side_nav = css`
    background-color: red;
    width: 20vw;
    height: 100dvh;
`;
const main_nav = css`
    background-color: yellow;
    width: 80vw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
