'use client';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRouter } from "next/navigation";

type sideNavProperty = {
    bouquetName: string;
    causeName: string;
    streakName: string;
};
type pathProps = string;

const SideNav = (props: sideNavProperty) => {

	const router = useRouter()
	const redirectFunction = (path : pathProps) :void =>{
		router.push(path)
	}
    return (
        <div css={container}>
			<div css={logo_parent_container}>
				{/* <Header /> */}
                One Shade
			</div>
			<div css={menu_parent_container}>
				{/* <MenuItems /> */}
                <p onClick={()=>redirectFunction("/bouquet")}>Bouquet</p>
                <p onClick={()=>redirectFunction("/cause")} >Cause</p>
                <p onClick={()=>redirectFunction("/streak")} >Streak</p>
			</div>
			{/* <div css={logedin_user_container}>
				<p>LogOut</p>
			</div> */}
		</div>
    );
};
export default SideNav;



const container = css`
	background-color: var(--secondary-color);
	width: 300px;
	height: 100dvh;
`

const logo_parent_container = css`
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1.5rem;
	border-bottom: 1px solid var(--border-color);
`
const menu_parent_container = css`
	width: 100%;
	height: calc(100% - 135px);
	overflow-y: auto;
	text-align: start;
	padding: 0 1.5rem;
`
const logedin_user_container = css`
	height: 60px;
	border-top: 1px solid var(--border-color);
`
