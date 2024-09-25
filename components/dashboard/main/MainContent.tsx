/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, ReactNode } from "react";

type PropsType = {
    children: ReactNode;
};

const MainContent: FC<PropsType> = ({ children }) => {
    return <div>{children}</div>;
};
export default MainContent;
