import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { AnyComponent } from '../../types/Types';

import Container from '../../components/Ui/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Paper from '../../components/Ui/Paper';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    flex: '1 1 1px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
}));

/**
 * {@link PageWithHeaderAndFooter} Props.
 */
interface IPageWithHeaderAndFooterProps {
  /** Header title to render. */
  header?: string;
  /** Custom header? */
  headerComponent?: AnyComponent;
  /** Main page content. */
  children: AnyComponent;
}

/**
 * Default page layout with a defined header and footer.
 * Use this for the usual subpages, where no own fancy layout is needed.
 *
 * @param props - {@link IPageWithHeaderAndFooterProps}
 */
const PageWithHeaderAndFooter: React.FC<IPageWithHeaderAndFooterProps> = (props: IPageWithHeaderAndFooterProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {props.header && (
          <Header title={props.header} />
        )}
        {props.headerComponent && (
          props.headerComponent
        )}
        <Container>
          <Paper>
            {props.children}
          </Paper>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default PageWithHeaderAndFooter;
