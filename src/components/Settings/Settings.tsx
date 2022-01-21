import { useContext, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { WbSunny, Brightness3, Language } from '@material-ui/icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
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
}));

/**
 * Fancy UserHeader for the {@link HomePage}.
 *
 * @param props - {@link ISettingsProps}.
 */
const Settings: React.FC<ISettingsProps> = (props: ISettingsProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [langDialogIsOpen, setLangDialogIsOpen] = useState(false);

  const settingsContext = useContext(SettingsContext);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLangDialogOpen = () => {
    setLangDialogIsOpen(true);
  };

  const handleLangDialogClose = () => {
    setLangDialogIsOpen(false);
    handleMobileMenuClose();
  };

  const handleLangListItemClick = (value: string) => {
    handleLangDialogClose();
    if (settingsContext != null) {
      settingsContext.setLanguage(value);
    }
  };

  const handleThemeClick = () => {
    handleMobileMenuClose();
    if (settingsContext != null) {
      settingsContext.setTheme(settingsContext.getTheme() === 0 ? 1 : 0);
    }
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
        id       = {mobileMenuId}
        anchorEl = {mobileMoreAnchorEl}
        isOpen   = {isMobileMenuOpen}
        onClose  = {handleMobileMenuClose}>
      {(settingsContext == null || settingsContext.getTheme() === 0) && (
        <MenuItem icon={<Brightness3 />} onClick={handleThemeClick}>
          <span>{t('common:dark theme option')}</span>
        </MenuItem>
      )}
      {(settingsContext != null && settingsContext.getTheme() === 1) && (
        <MenuItem icon={<WbSunny />} onClick={handleThemeClick}>
          <span>{t('common:light theme option')}</span>
        </MenuItem>
      )}
      {settingsContext != null && (
        <MenuItem icon={<Language />} onClick={handleLangDialogOpen}>
          <span>{t('common:choose language option')}</span>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <>
      <div className={clsx(classes.sectionDesktop, props.className)}>
        <div className={classes.settings}>
          {(settingsContext == null || settingsContext.getTheme() === 0) && (
            <IconButton color='inherit' size='small' onClick={handleThemeClick}><Brightness3 /></IconButton>
          )}
          {(settingsContext != null && settingsContext.getTheme() === 1) && (
            <IconButton color='inherit' size='small' onClick={handleThemeClick}><WbSunny /></IconButton>
          )}
          {settingsContext != null && (
            <IconButton color='inherit' size='small' onClick={handleLangDialogOpen}><Language /></IconButton>
          )}
        </div>
      </div>

      <div className={clsx(classes.sectionMobile, props.className)}>
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
                selected = {settingsContext != null && lang === settingsContext.getLanguage()}
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
