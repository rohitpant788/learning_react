const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.background.paper, // use the same background color as the DataGrid
    borderBottom: `1px solid ${theme.palette.divider}`,
    '& .MuiTypography-root': {
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: 1.2,
      fontSize: '1.2rem',
      color: theme.palette.text.secondary,
      marginTop: theme.spacing(1),
    },
  },
}));
