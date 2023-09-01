import MuiLinearProgress from '@mui/material/LinearProgress';

/**
 * {@link Progress} Props.
 */
interface IProgressProps {
  /** Value of the progress between 0 and 100. */
  value: number;
}

/**
 * Renders a progress bar.
 *
 * @param props - {@link IProgressProps}.
 */
const Progress: React.FC<IProgressProps> = ({ value, ...rest }: IProgressProps) => (
  <MuiLinearProgress
      color   = 'primary'
      variant = 'determinate'

      value   = {value}
      {...rest} />
);

export default Progress;
