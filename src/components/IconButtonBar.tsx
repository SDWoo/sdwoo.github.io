import React, { useCallback } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import PlayIcon from '@mui/icons-material/PlayArrowOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from './Introduction';

const IconButtonBar = function ({ links }: { links: Link }) {
  const IconPicker = useCallback((icon: string) => {
    const props = { className: 'icon' };
    switch (icon) {
      case 'post':
        return <DescriptionIcon {...props} />;
      case 'demo':
        return <PlayIcon {...props} />;
      case 'github':
        return <GitHubIcon {...props} />;
      case 'email':
        return <EmailIcon {...props} />;
      default:
        return <></>;
    }
  }, []);

  return (
    <>
      {Object.keys(links).map((link, index) => {
        if (!links[link]) return;
        return (
          <Tooltip key={index} title={link} arrow className="icon-tooltip">
            <IconButton
              size="small"
              href={`${link === 'email' ? `mailto:` : ``}${links[link]}`}
            >
              {IconPicker(link)}
            </IconButton>
          </Tooltip>
        );
      })}
    </>
  );
};

export default IconButtonBar;
