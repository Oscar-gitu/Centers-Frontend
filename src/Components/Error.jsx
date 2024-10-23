import { Typography } from "@mui/material";

const Error = (props) => {
  return (
    <div>
      <Typography
        style={{
          color: "red",
          fontWeight: 700,
          fontSize: 20,
          margin: 50,
          textAlign: 'center'
        }}
      >
        Error, Favor de conctactar a una administrador
      </Typography>
    </div>
  );
};
export default Error;
