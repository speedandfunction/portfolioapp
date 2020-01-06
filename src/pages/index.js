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
    padding: '0 130px 173px',
    '@media screen and (max-width: 768px)': {
      padding: '0 20px 100px',
    },
  },
  projecItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '&:nth-child(2n)': {
      flexDirection: 'row-reverse',
      '@media screen and (max-width: 768px)': {
        flexDirection: 'column-reverse',
      },
    },
    '& img': {
      maxWidth: '100%',
    },
    '& + &': {
      marginTop: '287px',
      '@media screen and (max-width: 768px)': {
        marginTop: '75px',
      },
    },
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column-reverse',
    },
  },
  projectLeft: {
    textAlign: 'left',
    width: '48%',
    '@media screen and (max-width: 768px)': {
      width: '100%',
    },
  },
  projectRight: {
    width: '48%',
    textAlign: 'center',
    '@media screen and (max-width: 768px)': {
      width: '100%',
      marginBottom: '40px',
    },
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
  pageTitle: {
    fontSize: '100px',
    textAlign: 'center',
    margin: '200px 0 100px',
    '@media screen and (max-width: 768px)': {
      fontSize: '40px',
      margin: '100px 0 50px',
    },
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
      <span className={classes.projectLabel}>Links:</span>
      &nbsp;
      {item.urlproduction && <a href={item.urlproduction}>{item.urlnameproduction}</a>}
      &nbsp;
      {item.urlstaging && <a href={item.urlstaging}>{item.urlnamestaging}</a>}
      &nbsp;
      {item.urlcasestudy && <a href={item.urlcasestudy}>{item.urlnamecasestudy}</a>}
      &nbsp;
    </div>
  );

  const renderItem = (item) => {
    console.log(item);
    const hasLinks = item.urlproduction || item.urlstaging || item.urlcasestudy;
    const fluid = get(item.localImage, 'childImageSharp.fluid', false);

    console.log(fluid, item.image, item.localImage);

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
          {
            fluid && (
              <div
                onClick={() => handleClickDialogOpen(item)}
                onKeyDown={() => handleClickDialogOpen(item)}
                tabIndex="0"
                role="switch"
                aria-checked={openDialog.open}
              >
                <Img fluid={fluid} alt={item.title} />
              </div>
            )
          }
        </div>
      </div>
    );
  };

  const renderTable = () => (
    <>
      <div className={classes.projectWrapper}>
        {rows.map(({node}) => renderItem(node))}
        {rows && (
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={totalCount}
            rowsPerPage={10}
            page={currentPage - 1}
            onChangePage={handleChangePage}
          />
        )}
      </div>
      <Dialog
        className={classes.dialog}
        fullScreen
        open={openDialog.open}
        onClose={handleDialogClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {openDialog.title}
            </Typography>
            <IconButton edge="start" color="inherit" onClick={handleDialogClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent dividers>
          <Img fluid={openDialog.image} />
        </DialogContent>
        <DialogActions>
          <p>{openDialog.description}</p>
        </DialogActions>
      </Dialog>
    </>
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
  //   </Paper>
  // );

  // return (
  //   <Seo title="Demo Home" />
  // );
  return (
    <>
      <Seo title="Demo Home" />
      <h1 className={classes.pageTitle}>Work</h1>
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
          localImage {
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
