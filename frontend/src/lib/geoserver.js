// frontend/src/lib/geoserver.js
const GS = import.meta.env.VITE_GS_BASE;
const WS = import.meta.env.VITE_GS_WS;
const LAYER = import.meta.env.VITE_GS_LAYER;

export const WMS_BASE = `${GS}/${WS}/wms`;
export const WFS_BASE = `${GS}/${WS}/wfs`;
export const DEFAULT_LAYER = `${WS}:${LAYER}`;

export const makeWfsUrl = (extra = {}) => {
  const params = new URLSearchParams({
    service: "WFS",
    version: "2.0.0",
    request: "GetFeature",
    typeNames: DEFAULT_LAYER,
    outputFormat: "application/json",
    ...extra,
  });
  return `${WFS_BASE}?${params.toString()}`;
};
