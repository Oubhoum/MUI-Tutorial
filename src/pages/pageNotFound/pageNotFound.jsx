import { Box, Typography, useTheme } from '@mui/material';

const PageNotFound = () => {

  const theme = useTheme();

  return (

    <Box>
      <Typography color={theme.palette.error.main} variant="h5">
        There is no design
        <br />
        <br />
        Please try again later
      </Typography>
    </Box>
  );
};

export default PageNotFound;