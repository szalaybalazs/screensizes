export interface iConfig {
  id: string;
  name: {
    long: string;
    short: string;
  };
  release: number;
  discontinued: boolean;
  diagonal: string;
  processor: string;
  support: number;
  shipped: number;
  ppi: number;
  aspectRatio: string;
  contrastRatio: string;

  booleanTone: boolean;
  alwaysOn: boolean;
  scaleFactor: number;
  colorProfile: string;
  displayType: string;
  xdr: boolean;
  biometrics: string;
  screenPress: string;
  ultraWideband: boolean;
  nfc: string;
  proMotion: boolean;
  lidar: boolean;
  displayZoom: boolean;
  displayMoreSpace: boolean;
  cameraHousing: string;
  displayShape: string;
  logicalResolution: string;
  downsampleResolution: boolean;
  stageManager: boolean;
  referenceMode: boolean;
  applePencil: boolean;
  actionButton: boolean;

  standard: {
    dimensions: { width: number; height: number };
    safeAreas: {
      statusBar: { portrait: number; landscape: number };
      homeIndicator: { portrait: number; landscape: number };
      cameraHousing: { width: number; height: number };
      overscan: boolean;
      scrollClearanceMargin: boolean;
      keyboard: { portrait: number; landscape: number };
    };
    sizeClasses: {
      fullscreen: {
        portrait: string;
        landscape: string;
      };
      splitTwoThirds: boolean;
      splitHalf: boolean;
      splitOneThird: boolean;
      slideOver: boolean;
      centerWindow: boolean;
    };
    multitasking: boolean;
    widgets: {
      current: {
        small: { width: number; height: number };
        medium: { width: number; height: number };
        large: { width: number; height: number };
        extraLarge: boolean;
      };
      previous: boolean;
    };
  };
  zoomed: {
    dimensions: { width: number; height: number };
    safeAreas: {
      statusBar: { portrait: number; landscape: number };
      homeIndicator: { portrait: number; landscape: number };
      cameraHousing: { width: number; height: number };
      overscan: boolean;
      scrollClearanceMargin: boolean;
      keyboard: { portrait: number; landscape: number };
    };
    sizeClasses: {
      fullscreen: {
        portrait: string;
        landscape: string;
      };
      splitTwoThirds: boolean;
      splitHalf: boolean;
      splitOneThird: boolean;
      slideOver: boolean;
      centerWindow: boolean;
    };
    multitasking: boolean;
    widgets: {
      current: {
        small: { width: number; height: number };
        medium: { width: number; height: number };
        large: { width: number; height: number };
        extraLarge: boolean;
      };
      previous: boolean;
    };
  };
  moreSpace: boolean;
}
