import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { convertServices } from "../Utils/modelDetailsUtils";
import "./css/modalDetails.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
  p: 4,
  borderRadius: "16px",
};

export default function ModalDetails({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Mas Informacion</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="center-name"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {data.centerName}
          </Typography>
          {data.embed ? (
            <div dangerouslySetInnerHTML={{ __html: data.embed }} />
          ) : data.mapUrl ? (
            <a href={data.mapUrl} target="_blank" rel="noopener noreferrer">
              Ver en Google Maps
            </a>
          ) : (
            "No existe referencia para mapa"
          )}

          {data.whatsAppLink ? (
            <React.Fragment>
              <Typography
                className="comunicate"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Comunicate con nosotros:
              </Typography>
              <a
                href={data.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </React.Fragment>
          ) : null}
          {data.services && Object.keys(data.services).length > 0 ? (
            <React.Fragment>
              <Typography
                className="services"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Nuestros servicios:
              </Typography>
              <Typography id="modal-modal-title" component="h2">
                {convertServices(data)}
              </Typography>
            </React.Fragment>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
