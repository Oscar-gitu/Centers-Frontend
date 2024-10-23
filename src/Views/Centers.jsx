import { useEffect, useState } from "react";
import axios from "axios";
import { Grid2 as Grid, Typography } from "@mui/material";
import CardDetails from "../Components/CardDetails";
import { result } from "../Utils/cardDetailsUtils";
import { getParameters } from "../Utils/centerUtils";
import SelectParameters from "../Components/SelectParameters";
import NotFound from "../Components/NotFound";
import config from "../config";
import "./css/centers.css";

const Centers = () => {
  const [data, setdata] = useState(result);
  const [zones, setZones] = useState([]);
  const [centerType, setCenterType] = useState([]);
  const [services, setServices] = useState([]);
  const [states, setStates] = useState([]);
  const [optionsZone, setoptionsZone] = useState("");
  const [optionsCenterType, setoptionsCenterType] = useState("");
  const [optionsServices, setoptionsServices] = useState("");

  const fetchData = async () => {
    const headers = {
      "X-Parse-Application-Id": config.appId,
      "X-Parse-REST-API-Key": config.apiKey,
    };
    try {
      const response = await axios.post(
        config.apiUrl,
        {
          Limit: 100,
          Zone: optionsZone === "Todos" ? "" : optionsZone,
          Center_Type: optionsCenterType === "Todos" ? "" : optionsCenterType,
          Services: optionsServices === "Todos" ? "" : optionsServices,
        },
        { headers }
      );
      if (response.status === 200) {
        let dataResponse = response.data.result.message;
        setdata(dataResponse); //Se guardan los valores
        const { uniqueZones, uniqueCenterTypes, uniqueServices, uniqueStates } =
          getParameters(dataResponse); //Se crean los valores para los select
        setZones(uniqueZones);
        setCenterType(uniqueCenterTypes);
        setServices(uniqueServices);
        setStates(uniqueStates);
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
    <div className="principal-div">
      <div style={{ marginBottom: 30 }}>
        <Grid container spacing={3}>
          {" "}
          {/*por cada listado de opciones se crea un select */}
          {[
            { data: zones, setOption: setoptionsZone, name: "Zona" },
            {
              data: centerType,
              setOption: setoptionsCenterType,
              name: "Centro",
            },
            { data: services, setOption: setoptionsServices, name: "Servicio" },
          ].map((param, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <div>
                <SelectParameters
                  data={param.data}
                  setOption={param.setOption}
                  name={param.name}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {data.length > 0 ? (
          states.map(
            (
              state //Se filtra por estado para organizarlo y despues se lista cada valor
            ) => (
              <Grid size={12} key={state}>
                <div>
                  <Typography variant="h6" className="state">
                    {state}
                  </Typography>
                  <Grid container spacing={2}>
                    {data
                      .filter(
                        (item) =>
                          item.state === state ||
                          (!item.state && state === "No Especificado")
                      )
                      .map((filteredItem, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                          <div>
                            <CardDetails data={filteredItem} />
                          </div>
                        </Grid>
                      ))}
                  </Grid>
                </div>
              </Grid>
            )
          )
        ) : (
          <NotFound />
        )}
      </Grid>
    </div>
  );
};
export default Centers;
