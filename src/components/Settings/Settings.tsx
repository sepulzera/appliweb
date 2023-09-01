import { useCallback, useContext, useState } from 'react';
import { cx } from '@emotion/css';
import { useTranslation } from 'react-i18next';
import { List, ListItem, ListItemText } from '@mui/material';
import { WbSunny, Brightness3, Language } from '@mui/icons-material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from 'tss-react/mui';

import LanguageHelper, { SupportedLanguages } from '../../constants/Language';
import SettingsContext from '../../context/SettingsContext/SettingsContext';
import IconButton from '../Ui/IconButton';
import Dialog from '../Ui/Dialog';
import Menu from '../Ui/Menu';
import MenuItem from '../Ui/MenuItem';

/**
 * {@link Settings} Props.
 */
interface ISettingsProps {
  /** Classes used for styling. */
  className?: string | undefined;
}

const useStyles = makeStyles()((theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  sectionMobile: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  settings: {
    marginTop:    'auto',
    marginBottom: 'auto',
  },
})));

/**
 * Fancy UserHeader for the {@link HomePage}.
 *
 * @param props - {@link ISettingsProps}.
 */
const Settings: React.FC<ISettingsProps> = ({ className }: ISettingsProps) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const [langDialogIsOpen, setLangDialogIsOpen] = useState(false);

  const settingsContext = useContext(SettingsContext);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMoreAnchorEl(null);
  }, []);

  const handleMobileMenuOpen = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }, []);

  const handleLangDialogOpen = useCallback(() => {
    setLangDialogIsOpen(true);
  }, []);

  const handleLangDialogClose = useCallback(() => {
    setLangDialogIsOpen(false);
    handleMobileMenuClose();
  }, []);

  const handleLangListItemClick = useCallback((value: string) => {
    handleLangDialogClose();
    settingsContext.setLanguage(value);
  }, []);

  const handleThemeClick = useCallback(() => {
    handleMobileMenuClose();
    settingsContext.setTheme(settingsContext.theme === 0 ? 1 : 0);
  }, [settingsContext.theme]);

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
        id       = {mobileMenuId}
        anchorEl = {mobileMoreAnchorEl}
        isOpen   = {isMobileMenuOpen}
        onClose  = {handleMobileMenuClose}>
      <MenuItem icon={settingsContext.theme === 0 ? <Brightness3 /> : <WbSunny />} onClick={handleThemeClick}>
        <span>{settingsContext.theme === 0 ? t('common:dark theme option') : t('common:light theme option')}</span>
      </MenuItem>
      <MenuItem icon={<Language />} onClick={handleLangDialogOpen}>
        <span>{t('common:choose language option')}</span>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={cx(classes.sectionDesktop, className)}>
        <div className={classes.settings}>
          <IconButton color='inherit' size='small' onClick={handleThemeClick}>
            {settingsContext.theme === 0 && <Brightness3 />}
            {settingsContext.theme === 1 && <WbSunny />}
          </IconButton>
          <IconButton color='inherit' size='small' onClick={handleLangDialogOpen}><Language /></IconButton>
        </div>
      </div>

      <div className={cx(classes.sectionMobile, className)}>
        <IconButton
            color = 'inherit'
            aria-label='show more'
            aria-controls={mobileMenuId}
            aria-haspopup='true'
            onClick={handleMobileMenuOpen}>
          <MoreIcon />
        </IconButton>
      </div>

      {renderMobileMenu}

      <Dialog title={t('common:choose language')} isOpen={langDialogIsOpen} onClose={handleLangDialogClose}>
        <List>
          {SupportedLanguages.map(lang => (
            <ListItem
                key      = {lang}
                button
                dense
                selected = {lang === settingsContext.language}
                onClick  = {() => handleLangListItemClick(lang)}>
              <ListItemText primary={LanguageHelper.languageToDisplayText(lang)} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
};

export default Settings;
