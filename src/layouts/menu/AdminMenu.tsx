import { Box } from '@mui/material';
import {
  AttachMoney as FeesIcon,
  Home as SchoolDocsIcon,
  CollectionsBookmark as TranscriptIcon,
  Inventory as DocsIcon,
  LibraryAddCheck as WorkStudyDocsIcon,
  Work as OtherDocsIcon,
} from '@mui/icons-material';
import { MenuItemLink } from 'react-admin';

function StudentMenu() {
  return (
    <Box
      style={{
        position: 'fixed',
        top: '8%',
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 'min-content',
          backgroundColor: 'white',
          boxShadow: '5px 5px 5px gray',
          height: '100%',
        }}
      >
        <MenuItemLink
          to="/photos"
          primaryText="List of Car"
          leftIcon={<FeesIcon />}
          sx={{ marginTop: '20%' }}
        />
        <Box component="nav" data-testid="docs">
          <MenuItemLink
            to="/docs/school"
            primaryText="HEI"
            leftIcon={<SchoolDocsIcon />}
          />
          <MenuItemLink
            to="/docs/students/TRANSCRIPT"
            primaryText="Bulletins"
            leftIcon={<TranscriptIcon />}
          />
          <MenuItemLink
            to="/docs/students/WORK_DOCUMENT"
            primaryText="Autorisations d'alternance"
            leftIcon={<WorkStudyDocsIcon />}
          />
          <MenuItemLink
            to="/docs/students/OTHER"
            primaryText="Autres"
            leftIcon={<OtherDocsIcon />}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default StudentMenu;
