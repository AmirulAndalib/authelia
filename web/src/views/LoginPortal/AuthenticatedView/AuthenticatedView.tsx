import React from "react";

import { Button, Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "tss-react/mui";

import { LogoutRoute as SignOutRoute } from "@constants/Routes";
import MinimalLayout from "@layouts/MinimalLayout";
import { UserInfo } from "@models/UserInfo";
import Authenticated from "@views/LoginPortal/Authenticated";

export interface Props {
    userInfo: UserInfo;
}

const AuthenticatedView = function (props: Props) {
    const { t: translate } = useTranslation();

    const navigate = useNavigate();

    const { classes } = useStyles();

    const handleLogoutClick = () => {
        navigate(SignOutRoute);
    };

    return (
        <MinimalLayout
            id={"authenticated-stage"}
            title={`${translate("Hi")} ${props.userInfo.display_name}`}
            userInfo={props.userInfo}
        >
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid size={{ xs: 12 }}>
                    <Button id={"logout-button"} color={"secondary"} onClick={handleLogoutClick}>
                        {translate("Logout")}
                    </Button>
                </Grid>
                <Grid size={{ xs: 12 }} className={classes.mainContainer}>
                    <Authenticated />
                </Grid>
            </Grid>
        </MinimalLayout>
    );
};

const useStyles = makeStyles()((theme: Theme) => ({
    mainContainer: {
        border: "1px solid #d6d6d6",
        borderRadius: "10px",
        padding: theme.spacing(4),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

export default AuthenticatedView;
