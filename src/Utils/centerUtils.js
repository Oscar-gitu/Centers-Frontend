export const getParameters = (data) => {
    const uniqueZones = new Set(['Todos']);
    const uniqueCenterTypes = new Set(['Todos']);
    const uniqueServices = new Set(['Todos']);
    const uniqueStates = new Set();
  
    data.forEach((center) => {
      const zone = center.zone;
      const centerType = center.centerType;
      const services = center.services;
      const state = center.state ? center.state : 'No Especificado'
  
      if (zone) uniqueZones.add(zone);
      if (centerType) uniqueCenterTypes.add(centerType);
      if (services) {
        for (const serviceKey in services) {
          uniqueServices.add(serviceKey);
        }
      }
      if (state) uniqueStates.add(state);
    });
  
    return {
      uniqueZones: Array.from(uniqueZones),
      uniqueCenterTypes: Array.from(uniqueCenterTypes),
      uniqueServices: Array.from(uniqueServices),
      uniqueStates: Array.from(uniqueStates)
    };
  };
  