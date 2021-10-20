import { Card, CardContent, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

type IStyleProps = {
  titleDirection: string
}

const useStyles = makeStyles<Theme, IStyleProps>((theme: Theme) => ({
  titleContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: "12px 16px",
    "& p": {
      fontWeight: 600,
      textAlign: (props) => props.titleDirection 
    },
  },
}));

type IBaseCardProps = {
  title: string;
  cardContent: Function;
  cardWidth: number | string;
  titleDirection: string;
}

export const BaseCard = (props: IBaseCardProps) => {
  const { title, cardContent, cardWidth, titleDirection } = props;
  const classes = useStyles({titleDirection});
  return (
    <Card sx={{maxWidth: cardWidth, width: '100%'}}>
      <Grid container direction="row">
        <Grid item xs={12} className={classes.titleContainer}>
          <Typography>{title}</Typography>
        </Grid>
        <CardContent sx={{width: '100%'}}>{cardContent && cardContent()}</CardContent>
      </Grid>
    </Card>
  );
};
