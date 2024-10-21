import React, { memo } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid2 as Grid} from '@mui/material';
import Logo from '../img/LogoDiente.png';
import { createTimeTable, createAddress } from '../Utils/cardDetailsUtils'
import ModalDetails from './ModalDetails';

const CardDetails = memo(function CardDetails({ data }) {
  return (
    <Card variant="outlined" style={{ margin: 10 }}>
      <CardContent>
        <Grid container>
          <Grid size={3}>
            <div>
              <img
                src={Logo}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
            </div>
          </Grid>
          <Grid size={9}>
            <div>
              <Typography>{data.zone}</Typography>
              <Typography>{data.promo}</Typography>
              <Typography>{createAddress(data)}</Typography>
              <Typography>{createTimeTable(data)}</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions style={{ justifyContent: 'center' }}>
        <ModalDetails data={data}></ModalDetails>
      </CardActions>
    </Card>
  );
});

export default CardDetails;
