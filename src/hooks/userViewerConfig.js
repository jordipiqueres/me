import { useContext } from 'react'
import Context from 'context/ViewerConfigContext'

export default function useViewerConfig () {
  const { viewerConfig, loading } = useContext(Context)

  const getMapProjection = () => {
    return viewerConfig.map.config.projection
  }

  const getMapEpsgDefinitionTitle = (epsgCode) => {
    const mapEpsgDefinitions = viewerConfig.map.epsgDefinitions
    const epsg = mapEpsgDefinitions.filter((epsgDefinition) => epsgDefinition.epsg === epsgCode)
    return epsg[0].title || ''
  }

  return {
    viewerConfig,
    loading,
    getMapProjection,
    getMapEpsgDefinitionTitle
  }
}
