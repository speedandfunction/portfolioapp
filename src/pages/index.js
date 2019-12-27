import React from 'react';
import {graphql, navigate} from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import {Seo} from 'components/common';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const columns = [
  {id: 'title', label: 'Title', minWidth: 100},
  {id: 'description', label: 'Description', minWidth: 100},
  {
    id: 'isPrivate',
    label: 'Private',
    checkbox: true,
  },
  {
    id: 'timeSpent',
    label: 'Time\u00a0Spent\u00a0(h)',
  },
  {
    id: 'isActive',
    label: 'Is\u00a0Active',
    checkbox: true,
  },
  {
    id: 'techStacks',
    label: 'Tech\u00a0Stacks',
    isChips: true,
  },
  {
    id: 'localImage',
    label: 'Image',
    minWidth: 256,
    isImage: true,
  },
];

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    display: 'relative',
  },
  chip: {
    margin: '1px 2px',
    '&:hover': {
      cursor: 'default',
    },
  },
  dialog: {
    height: '100%',
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  projectWrapper: {
    padding: '273px 130px 173px',
  },
  projecItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '&:nth-child(2n)': {
      flexDirection: 'row-reverse',
    },
    '& img': {
      maxWidth: '100%',
    },
    '& + &': {
      marginTop: '287px',
    },
  },
  projectLeft: {
    textAlign: 'left',
    width: '48%',
  },
  projectRight: {
    width: '48%',
    textAlign: 'center',
  },
  projectTitle: {
    fontSize: '36px',
    lineHeight: 1,
    color: '#101010',
    margin: '0 0 55px',
  },
  projectSubtitle: {
    fontSize: '24px',
    color: '#000',
    letterSpacing: '0.24px',
    lineHeight: 1,
    marginBottom: '28px',
  },
  projectParagraph: {
    fontSize: '16px',
    color: '#1a1a1a',
    letterSpacing: '0.24px',
    lineHeight: '24px;',
    marginBottom: '28px',
  },
  projectLink: {
    fontSize: '16px',
    color: '#5fbeec',
    letterSpacing: '0.24px',
    lineHeight: '24px;',
    marginBottom: '28px',
    textDecoration: 'underline',
  },
  projectLabel: {
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#1a1a1a',
    letterSpacing: '0.24px',
    lineHeight: '24px;',
    marginBottom: '28px',
  },
  projectTags: {
    marginTop: '52px',
    marginLeft: '-10px',
  },
  projectTag: {
    padding: '8px 12px',
    border: '1px solid #000',
    borderRadius: '5px',
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.14px',
    display: 'inline-block',
    margin: '0 0 10px 10px',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#1a1a1a',
  },
}));

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const IndexPage = ({data, pageContext}) => {
  if (!data) {
    return null;
  }
  console.log(data);
  const {currentPage = 1} = pageContext;
  const {
    allGoogleSheetContentFromNickRow: {
      edges: rows,
      totalCount,
    },
  } = data;
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState({
    open: false,
  });

  console.log(rows);

  const handleClickDialogOpen = (row) => {
    setOpenDialog({
      title: row.title,
      description: row.description,
      image: row.localImage.childImageSharp.fluid,
      open: true,
    });
  };

  const handleDialogClose = () => {
    setOpenDialog({open: false});
  };

  const handleChangePage = (event, newPage) => {
    const navigatePage = newPage ? `${newPage + 1}/` : '';

    navigate(`/${navigatePage}`);
  };

  const handleChipClick = () => {};
  const renderSection = (item, field) => (
    <div>
      <div className={classes.projectLabel}>{field}</div>
      <div className={classes.projectParagraph}>{item[field]}</div>
    </div>
  );

  const renderTags = (item) => (
    <div className={classes.projectTags}>
      {
        item.techstacktags.split(', ').map((tag) => <div className={classes.projectTag}>{tag}</div>)
      }
    </div>
  );

  const renderLinks = (item) => (
    <div>
      <span className={classes.projectLabel}>Links:</span>&nbsp;
      {item.urlproduction && <a href={item.urlproduction}>{item.urlnameproduction}</a>}&nbsp;
      {item.urlstaging && <a href={item.urlstaging}>{item.urlnamestaging}</a>}&nbsp;
      {item.urlcasestudy && <a href={item.urlcasestudy}>{item.urlnamecasestudy}</a>}&nbsp;
    </div>
  );

  const renderItem = (item) => {
    console.log(item);
    const hasLinks = item.urlproduction || item.urlstaging || item.urlcasestudy;

    return (
      <div className={classes.projecItem}>
        <div className={classes.projectLeft}>
          <h2 className={classes.projectTitle}>{item.title}</h2>
          {item.overview && renderSection(item, 'overview')}
          {item.challenge && renderSection(item, 'challenge')}
          {item.solution && renderSection(item, 'solution')}
          {item.results && renderSection(item, 'results')}
          {item.awards && renderSection(item, 'awards')}
          {item.category && renderSection(item, 'category')}
          {hasLinks && renderLinks(item)}
          {item.techstacktags && renderTags(item)}
        </div>
        <div className={classes.projectRight}>
          <img alt={item.title} src={item.image} />
        </div>
      </div>
      // projectTitle
      // projectSubtitle
      // projectParagraph
      // projectLink
      // projectLabel
      // projectTags
      // projectTag
    );
  };

  const renderTable = () => (
    <Paper>
      <div className={classes.projectWrapper}>
        {rows.map(({node}) => renderItem(node))}
      </div>
    </Paper>
  );
  //     <Table stickyHeader aria-label="sticky table">
  //       <TableHead>
  //         <TableRow>
  //           {columns.map((column) => (
  //             <TableCell
  //               key={column.id}
  //               align={column.align}
  //               style={{minWidth: column.minWidth}}
  //             >
  //               {column.label}
  //             </TableCell>
  //           ))}
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {rows.map(({node: row}) => (
  //           <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
  //             {columns.map((column) => {
  //               const value = row[column.id] || '';

  //               if (column.isImage) {
  //                 const fluid = get(value, 'childImageSharp.fluid', false);

  //                 return (
  //                   <TableCell key={column.id}>
  //                     {fluid && (
  //                       <div
  //                         onClick={() => handleClickDialogOpen(row)}
  //                         onKeyDown={() => handleClickDialogOpen(row)}
  //                         tabIndex="0"
  //                         role="switch"
  //                         aria-checked={openDialog.open}
  //                       >
  //                         <Img
  //                           fluid={fluid}
  //                           className={classes.image}
  //                         />
  //                       </div>
  //                     )}
  //                   </TableCell>
  //                 );
  //               }

  //               if (column.isChips) {
  //                 const chips = value.split(',');

  //                 return (
  //                   <TableCell key={column.id}>
  //                     <div className={classes.chipContainer}>
  //                       {chips.map((chipName) => (
  //                         <Chip
  //                           key={chipName}
  //                           className={classes.chip}
  //                           size="small"
  //                           label={chipName.trim()}
  //                           onClick={handleChipClick}
  //                         />
  //                       ))}
  //                     </div>
  //                   </TableCell>
  //                 );
  //               }
  //               const checkBoxIcon = column.checkbox && Boolean(value)
  //                 ? <CheckBoxIcon />
  //                 : <CheckBoxOutlineBlankIcon />;

  //               return (
  //                 <TableCell key={column.id}>
  //                   {column.checkbox
  //                     ? checkBoxIcon
  //                     : value}
  //                 </TableCell>
  //               );
  //             })}
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //     {rows && (
  //       <TablePagination
  //         rowsPerPageOptions={[]}
  //         component="div"
  //         count={totalCount}
  //         rowsPerPage={10}
  //         page={currentPage - 1}
  //         onChangePage={handleChangePage}
  //       />
  //     )}
  //     <Dialog
  //       className={classes.dialog}
  //       fullScreen
  //       open={openDialog.open}
  //       onClose={handleDialogClose}
  //       TransitionComponent={Transition}
  //     >
  //       <AppBar className={classes.appBar}>
  //         <Toolbar>
  //           <Typography variant="h6" className={classes.title}>
  //             {openDialog.title}
  //           </Typography>
  //           <IconButton edge="start" color="inherit" onClick={handleDialogClose} aria-label="close">
  //             <CloseIcon />
  //           </IconButton>
  //         </Toolbar>
  //       </AppBar>
  //       <DialogContent dividers>
  //         <Img fluid={openDialog.image} />
  //       </DialogContent>
  //       <DialogActions>
  //         <p>{openDialog.description}</p>
  //       </DialogActions>
  //     </Dialog>
  //   </Paper>
  // );

  // return (
  //   <Seo title="Demo Home" />
  // );
  return (
    <>
      <Seo title="Demo Home" />
      <h1>Demo Title</h1>
      {!data
        ? <p>Loading</p>
        : renderTable()}
    </>
  );
};

export const query = graphql`
  query allGoogleSheetContentFromNickRow($skip: Int! = 0, $limit: Int! = 10) {
    allGoogleSheetContentFromNickRow(
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          image
          title
          overview
          challenge
          solution
          results
          awards
          category
          techstacktags
          timespent
          urlproduction
          urlnameproduction
          urlnamestaging
          urlnamecasestudy
        }
      }
      totalCount
    }
  }
`;

IndexPage.propTypes = {
  data: {
    allGoogleSheetContentFromNickRow: {
      edges: PropTypes.shape({}).isRequired,
      totalCount: Number,
    }.isRequired,
  }.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default IndexPage;
