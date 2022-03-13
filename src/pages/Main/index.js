import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import { APP_MODE } from 'constants/appMode'
import useViewerConfig from 'hooks/useViewerConfig'

export default function GeocoderPage ({ params }) {

  const { loading } = useViewerConfig()

  return (
    <div className="main-grid">
      {!loading &&
        <>
          {map && <Panel/>}
          <MapViewer/>
        </>
      }
    </div>
)
}