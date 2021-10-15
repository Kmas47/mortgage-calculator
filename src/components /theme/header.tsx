import { Avatar, Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "sticky",
    top: 0,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    height: 60,
    color: theme.palette.common.white,
    [theme.breakpoints.up("sm")]: {
      height: 80,
    },
    [theme.breakpoints.up("lg")]: {
      height: 60,
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ p: 1 }}>
      <Avatar alt="Company Logo">
        <Typography>Logo</Typography>
      </Avatar>
    </Box>
  );
};
