export const ActiveMenu = (activeMenu) => {
  console.log('Active menu Action: ',activeMenu);
  return {
    type: 'ACTIVE_MENU',
    activeMenu
  }
};