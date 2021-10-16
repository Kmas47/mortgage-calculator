import { Card, CardContent, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 600,
  },
  titleContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: "12px 16px",
    "& p": {
      fontWeight: 540,
    },
  },
}));

export const BaseCard = (props: { title: any; cardContent: any }) => {
  const { title, cardContent } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={12} className={classes.titleContainer}>
          <Typography>{title}</Typography>
        </Grid>
        <CardContent>{cardContent && cardContent()}</CardContent>
      </Grid>
    </Card>
  );
};
