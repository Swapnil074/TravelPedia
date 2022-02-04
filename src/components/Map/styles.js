import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "150px",
    borderRadius: "10px",
    height: "190px",
    overflow: "hidden",
  },
  mapContainer: {
    height: "85vh",
    width: "100%",
    margin: "1%",
    borderRadius: 30,
    overflow: "hidden",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
    width: "100%",
    alignItems: "center",
  },
}));
