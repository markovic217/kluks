import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./Timeline.css";
function TimelineComp() {
  const marginBot = {
    marginBottom: "100px",
  };
  return (
    <div className="container container-override">
      <h1 style={{textAlign:"center"}}>Company Roadmap</h1>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={marginBot}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            atque quos sunt velit, saepe quibusdam iure tempore similique
            accusamus laboriosam explicabo, ad fugit voluptatibus quia aliquid
            sed eaque dolore. Minus.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={marginBot}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            reprehenderit doloremque possimus, reiciendis assumenda doloribus
            eum modi, a, obcaecati nobis laboriosam. Ipsum, maxime distinctio.
            Pariatur dolores architecto porro officia dicta!
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent style={marginBot}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, eligendi dolorem iste possimus voluptas quasi,
            temporibus nisi enim alias dolorum repellendus aut! Est maiores
            asperiores nobis totam minus. Dicta, voluptatum.
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimelineComp;
