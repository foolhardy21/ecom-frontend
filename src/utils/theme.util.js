// these are the helper functions for ui components related to theme toggling 

export const getBgColor = theme => theme === 'light' ? 'bg-primary' : 'bg-secondary'

export const getTextColor = theme => theme === 'light' ? 'txt-primary' : 'txt-secondary'

export const getSolidBtnBgColor = theme => theme === 'dark' ? 'bg-primary' : 'bg-secondary'

export const getSolidBtnTextColor = theme => theme === 'dark' ? 'txt-primary' : 'txt-secondary'

export const getBorderColor = theme => theme === 'light' ? 'b-primary' : 'b-secondary'

export const getIconColor = theme => theme === 'light' ? 'icon-primary' : 'icon-secondary'

export const getBadgeBgColor = theme => theme === 'light' ? 'bg-secondary' : 'bg-primary'

export const getBadgeTextColor = theme => theme === 'light' ? 'txt-secondary' : 'txt-primary'
