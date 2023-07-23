import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2015-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="verticle-timline-element--title">
            Information Technology University, In Uzbekistan, Tashkent
          </h3>
          <p>Bachelor's degree, Computer Engineering</p>
          <p>GPA 4.1 out of 5</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="Started 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="verticle-timline-element--title">
            Gachon University, In South Korea, Seoul, Seongnam
          </h3>
          <p>Master's Degree, Computer Engineering</p>
          <p>GPA 4.7 out of 5</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
