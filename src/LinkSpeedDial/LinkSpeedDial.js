import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./LinkSpeedDial.css";

// TODO probably better to define these at App level and then pass them in so we are using props
const actions = [
  {icon: <LinkedInIcon /> , name: 'LinkedIn', href: 'https://www.linkedin.com/in/haydn-neese-676088173/', alt: 'Link to Linked In'},
  {icon: <GitHubIcon /> , name: 'GitHub', href: 'https://github.com/HaydnNeese', alt: 'Link to Git Hub'},
];

const LinkSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          href={action.href}
          target='_blank'
          alt={actions.link}
        />
      ))}
    </SpeedDial>
  );
};

export default LinkSpeedDial;
