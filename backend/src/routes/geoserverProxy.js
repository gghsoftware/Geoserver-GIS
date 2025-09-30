// backend/src/routes/geoserverProxy.js
import express from "express";
import proxy from "express-http-proxy";

const router = express.Router();
const GS = process.env.GEOSERVER_URL || "http://geoserver-gis-production.up.railway.app/geoserver";

// forward /gs/wms?... to {GS}/wms?... and /gs/wfs?... to {GS}/wfs?...
router.use("/wms", proxy(GS, {
  proxyReqPathResolver: (req) => `/wms${req.url}`,
  timeout: 10000,
}));

router.use("/wfs", proxy(GS, {
  proxyReqPathResolver: (req) => `/wfs${req.url}`,
  timeout: 15000,
}));

export default router;
