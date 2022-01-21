import { Component } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { AnyComponent } from '../../types/Types';

/** {@link ErrorBoundary} Props. */
interface IErrorBoundaryProps extends WithTranslation {
  /** Print message? */
  verbose:    boolean;
  /** Print error stack? */
  printStack: boolean;
}

/** {@link ErrorBoundary} State. */
interface IErrorBoundaryState {
  readonly hasError: boolean;
  readonly error: Error | null | undefined;
}

const useStyles = makeStyles({
  errorContainer: {
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
});

interface IErrorBoundaryContainerProps {
  /** The error. */
  children: AnyComponent;
}

const ErrorBoundaryContainer: React.FC<IErrorBoundaryContainerProps> = (props: IErrorBoundaryContainerProps) => {
  const classes = useStyles();

  return (
    <div className={classes.errorContainer}>
      {props.children}
    </div>
  );
};

/**
 * Simple error catcher.
 *
 * Wrap the usage of components to prevent any error from leaving.
 *
 * Example:
 * ```
 * <ErrorBoundary>
 *     <MyComponent ... />
 * </ErrorBoundary>
 * ```
 *
 * See also: {@link https://reactjs.org/docs/error-boundaries.html}
 */
class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { error: error, hasError: true };
  }

  componentDidCatch(error: Error | null) {
    const { t } = this.props;
    this.setState({ error: error || new Error(t('error:missing error')) });
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const { t } = this.props;

      return (
        <ErrorBoundaryContainer>
          <Typography variant='h1' gutterBottom>{t('error:title')}</Typography>
          {this.props.verbose && (
            <>
              <Typography variant='h4' component='h2'>{`${t('error:message')}:`}</Typography>
              <Typography variant='body1'>{this.state.error.message}</Typography>
            </>
          )}
          {this.props.printStack && (
            <>
              <Typography variant='h4' component='h2'>{`${t('error:stack')}:`}</Typography>
              <Typography variant='body1'>{this.state.error.stack}</Typography>
            </>
          )}
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
