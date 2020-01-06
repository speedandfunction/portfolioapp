const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;
  const result = await graphql(
    `
      {
        allGoogleSheetContentFromNickRow {
          totalCount
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');

    return;
  }

  const rows = result.data.allGoogleSheetContentFromNickRow.totalCount;
  const rowsPerPage = 10;
  const numPages = Math.ceil(rows / rowsPerPage);

  Array.from({length: numPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/${i + 1}/`,
      component: path.resolve('./src/pages/index.js'),
      context: {
        limit: rowsPerPage,
        skip: i * rowsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
      },
    },
  });
};
