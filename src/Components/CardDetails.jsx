import React, { memo } from 'react';
import { Card, CardContent, CardActions, Typography, Grid2 as Grid} from '@mui/material';
import Logo from '../img/LogoDiente.png';
import { convertTimeTable, convertAddress } from '../Utils/cardDetailsUtils'
import ModalDetails from './ModalDetails';

const CardDetails = memo(function CardDetails({ data }) {
  return (
    <Card style={{ margin: 10, borderRadius:20, boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)', minHeight:240, paddingTop:15 }}>
      <CardContent>
        <Grid container>
          <Grid size={3} style={{alignContent: 'center' }}>
            <div>
              <img
                src={Logo}
                alt=""
                style={{ width: "80px", height: "80px"}}
              />
            </div>
          </Grid>
          <Grid size={9} sx={{ textAlign: 'left' }}>
            <div>
              <Typography style={{color:'blue', fontWeight:700, fontSize:20}}>{data.zone}</Typography>
              <Typography style={{fontWeight:700, fontSize:16}}>{data.centerType}</Typography>
              <Typography style={{color:'red', fontWeight:700, fontSize:20}}>{data.promo}</Typography>
              <Typography>{convertAddress(data)}</Typography>
              <Typography>{convertTimeTable(data)}</Typography>
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
