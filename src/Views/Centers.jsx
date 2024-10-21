import { useEffect, useState } from "react";
import axios from "axios";
import { Grid2 as Grid, Typography } from "@mui/material";
import CardDetails from "../Components/CardDetails";
import { result } from "../Utils/cardDetailsUtils";
import { getParameters } from "../Utils/centerUtils";
import SelectParameters from "../Components/SelectParameters";

const Centers = (props) => {
  const [data, setdata] = useState(result);
  const [zones, setZones] = useState([]);
  const [centerType, setCenterType] = useState([]);
  const [services, setServices] = useState([]);
  const [states, setStates] = useState([]);
  const [optionsZone, setoptionsZone] = useState('');
  const [optionsCenterType, setoptionsCenterType] = useState('');
  const [optionsServices, setoptionsServices] = useState('');

  const setParameters = (data) => {
    const { uniqueZones, uniqueCenterTypes, uniqueServices, uniqueStates } =
      getParameters(data);
    if (zones.length > 0) {
      setStates(uniqueStates);
    } else {
      setZones(uniqueZones);
      setCenterType(uniqueCenterTypes);
      setServices(uniqueServices);
      setStates(uniqueStates);
    }
  };

  const fetchData = async () => {
    const headers = {
      "X-Parse-Application-Id": "IYL2kaPXOXZ6XjQlLcaxHKggtMIKiT9LojBq1TK6",
      "X-Parse-REST-API-Key": "bpJoBMPzjjm21F6bwUt1x1AMpZXuFuZOcP1guGqO",
    };
    try {
      const response = await axios.post(
        "https://parseapi.back4app.com/functions/Centers",
        {
          Limit: 100,
          Zone: optionsZone,
          Center_Type: optionsCenterType,
          Services: optionsServices,
        },
        { headers }
      );
      if (response.status === 200) {
        let dataResponse = response.data.result.message;
        setdata(dataResponse);
        setParameters(dataResponse);
      } else {
        console.error(`Error: ${response}`);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [optionsZone, optionsCenterType, optionsServices]);

  return (
    <div style={{ marginTop: 30 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <div>
            <SelectParameters data={zones} setOption={setoptionsZone} name={'Zona'}/>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <div>
            <SelectParameters
              data={centerType}
              setOption={setoptionsCenterType}
              name={'Centro'}
            />
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <div>
            <SelectParameters data={services} setOption={setoptionsServices} name={'Servicio'}/>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {states.map((state) => (
          <Grid size={12} key={state}>
            <div>
              <Typography variant="h6">{state}</Typography>
              <Grid container spacing={2}>
                {data
                  .filter(
                    (item) =>
                      item.state === state ||
                      (!item.state && state === "No Especificado")
                  )
                  .map((filteredItem, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 4 }}>
                      <div>
                        <CardDetails data={filteredItem} />
                      </div>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Centers;
