import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TableChartIcon from '@mui/icons-material/TableChart';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const links = [
  {
    title: 'Pages',
    links: [
      {
        name: 'Dashboard',
        icon: <DashboardIcon />,
      },
      {
        name: 'Bookings',
        icon: <TableChartIcon />,
      },
      {
        name: 'Form',
        icon: <ListAltIcon />,
      },
      {
        name: 'Calendar',
        icon: <CalendarMonthIcon />,
      },
    ],
  },     
];