import React, { memo } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import Logo from "../img/toothLogo.png";
import { convertTimeTable, convertAddress } from "../Utils/cardDetailsUtils";
import ModalDetails from "./ModalDetails";
import "./css/cardDetails.css";

const CardDetails = memo(function CardDetails({ data }) {
  return (
    <Card className="card">
      <CardContent style={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            size={{ xs: 3, md: 4, lg: 3 }}
            style={{ alignContent: "center", textAlign: "center" }}
          >
            <div style={{marginRight:15}}>
              <img src={Logo} alt="" className="icon" />
            </div>
          </Grid>
          <Grid size={{ xs: 9, md: 8, lg: 9 }} sx={{ textAlign: "left" }}>
            <div>
              <Typography className="zone">{data.zone}</Typography>
              <Typography className="centertype">{data.centerType}</Typography>
              <Typography className="promo">{data.promo}</Typography>
              <Typography>{convertAddress(data)}</Typography>
              <Typography>{convertTimeTable(data)}</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions style={{ justifyContent: "center" }}>
        <ModalDetails data={data}></ModalDetails>
      </CardActions>
    </Card>
  );
});

export default CardDetails;
