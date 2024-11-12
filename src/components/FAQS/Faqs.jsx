import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import + and - icons from react-icons
import Fade from "@mui/material/Fade";
import { accordionContent } from "./Faqs"; // Import the FAQ content

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="w-full md:w-2/3">
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        sx={{
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          marginBottom: "1rem",
          "&:last-child": {
            marginBottom: 0,
          },
          "& .MuiAccordionSummary-root": {
            backgroundColor: expanded ? "#4a90e2" : "#3498db",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#2980b9",
            },
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "#f4f8fb",
            padding: "16px",
            borderRadius: "8px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={expanded ? <FaMinus /> : <FaPlus />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ cursor: "pointer" }}
        >
          <Typography className="text-xl font-semibold">
            {accordionContent.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700 text-lg">
            {accordionContent.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
