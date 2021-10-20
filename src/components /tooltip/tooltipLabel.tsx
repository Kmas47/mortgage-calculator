import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { CustomToolTip } from "./customToolTip";

const useGlobalStyles = makeStyles(() => ({
  toolTipContainer: {
    paddingLeft: `0 !important`,
  },
}));

export const ToolTipLabel = (props) => {
  const globaleClasses = useGlobalStyles();
  const { toolTipTitle, title } = props;
  return (
    <Grid className={globaleClasses.toolTipContainer} item md={6}>
      <Grid container alignItems="center">
        <CustomToolTip title={toolTipTitle} />
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
