import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { convertServices } from "../Utils/modelDetailsUtils";
import "./css/modalDetails.css";
import maps from "../img/maps.jpg";

export default function ModalDetails({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="information" onClick={handleOpen}>
        Mas Informacion
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
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
            <React.Fragment>
              <img className="image-maps" src={maps} alt="" />
              <a href={data.mapUrl} target="_blank" rel="noopener noreferrer">
                <p className="text-modal">VER EN GOOGLE MAPS</p>
              </a>
            </React.Fragment>
          ) : (
            "No existe referencia para mapa"
          )}

          {data.whatsAppLink ? (
            <React.Fragment>
              <Typography
                className="communicate"
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
                <p className="text-modal">WHATSAPP</p>
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
