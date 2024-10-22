import { Typography } from "@mui/material";

const NotFound = (props) => {
  return (
    <div>
      <Typography
        style={{
          color: "red",
          fontWeight: 700,
          fontSize: 20,
          margin: 50,
        }}
      >
        No se encontraron resultados
      </Typography>
    </div>
  );
};
export default NotFound;
