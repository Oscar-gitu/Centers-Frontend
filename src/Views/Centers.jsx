import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Grid2 as Grid, Typography } from "@mui/material";
import CardDetails from "../Components/CardDetails";
import { getParameters } from "../Utils/centerUtils";
import SelectParameters from "../Components/SelectParameters";
import NotFound from "../Components/NotFound";
import config from "../config";
import "./css/centers.css";
import Error from "../Components/Error";
import LoadInformation from "../Components/LoadInformation";

const Centers = () => {
  const [data, setdata] = useState([]);
  const [zones, setZones] = useState([]);
  const [centerType, setCenterType] = useState([]);
  const [services, setServices] = useState([]);
  const [states, setStates] = useState([]);
  const [optionsZone, setoptionsZone] = useState("");
  const [optionsCenterType, setoptionsCenterType] = useState("");
  const [optionsServices, setoptionsServices] = useState("");
  const [error, setError] = useState(false);
  const [load, setload] = useState(true);

  const fetchData = async () => {
    const headers = {
      "X-Parse-Application-Id": config.appId,
      "X-Parse-REST-API-Key": config.apiKey,
    };
    try {
      const response = await axios.post(
        config.apiUrl,
        {
          limit: 100,
          zone: optionsZone === "Todos" ? "" : optionsZone,
          center_type: optionsCenterType === "Todos" ? "" : optionsCenterType,
          services: optionsServices === "Todos" ? "" : optionsServices,
        },
        { headers }
      );
      if (response.status === 200) {
        setload(false);
        setError(false);
        let dataResponse = response.data.result.message;
        setdata(dataResponse); //Se guardan los valores
        const { uniqueZones, uniqueCenterTypes, uniqueServices, uniqueStates } =
          getParameters(dataResponse); //Se crean los valores para los select
        setZones(uniqueZones);
        setCenterType(uniqueCenterTypes);
        setServices(uniqueServices);
        setStates(uniqueStates);
      } else {
        setload(false);
        setError(true);
        console.error(`Error: ${response}`);
      }
    } catch (error) {
      setload(false);
      setError(true);
      console.error("Error en la petición:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [optionsZone, optionsCenterType, optionsServices]);

  return (
    <div className="principal-div">
      {error ? (
        <Error />
      ) : (
        <React.Fragment>
          <div style={{ marginBottom: 30 }}>
            <Grid container spacing={3}>
              {/*por cada listado de opciones se crea un select */}
              {[
                { data: zones, setOption: setoptionsZone, name: "Zona" },
                {
                  data: centerType,
                  setOption: setoptionsCenterType,
                  name: "Centro",
                },
                {
                  data: services,
                  setOption: setoptionsServices,
                  name: "Servicio",
                },
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
            ) : load ? (
              <LoadInformation />
            ) : (
              <NotFound />
            )}
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
};
export default Centers;
