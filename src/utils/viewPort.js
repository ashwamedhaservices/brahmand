const ViewPort = {
  isMobileLessThan360: window.innerWidth < 360,
  isMobileViewPort: window.innerWidth <= 767 ? true : false,
  isTabletViewPort: (window.innerWidth >= 768 && window.innerWidth <= 991) ? true : false,
  isLargeTabletViewPort: (window.innerWidth >= 992 && window.innerWidth <= 1024) ? true : false,
  isAllTabletViewPort: (window.innerWidth >= 768 && window.innerWidth <= 1024) ? true : false,
  isDesktopViewPort: window.innerWidth >= 1024,
};

export default ViewPort;